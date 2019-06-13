# perl - 이메일 보내기. SMTP

## Net::SMTP 기본 예
* Net::SMTP 모듈을 이용하여 메일을 보내는 예제
* Debug 메시지를 보여 주기 싫으면 ```Debug => 1``` 부분을 지우면 된다.
* 심플하게 메일을 보내는데 한글이 들어가면 수신 서버에 따라 제대로 처리가 안되는 경우가 있다.
* 가급적이면 MIME 으로 인코딩 해서 보내는 것이 좋다.
```perl
use strict;
use warnings;

use Net::SMTP;

my $smtp = Net::SMTP->new('mx1.hanmail.net', Debug => 1);

my $from = 'test@junho85.pe.kr';
my $to = 'junho85@daum.net';

$smtp->mail($from); # from
$smtp->to($to); # to

$smtp->data();
$smtp->datasend("From: $from\n");
$smtp->datasend("To: $to\n");
$smtp->datasend("Subject: this is test mail for perl\n");
$smtp->datasend("\n");
$smtp->datasend("A simple test message\n");
$smtp->dataend();
$smtp->quit;
```

## MIME::Lite
MIME::Lite 를 이용해서 MIME 메시지 만들기

```perl
use strict;
use warnings;

use MIME::Lite;

my $from = '"테스트" <junho85@daum.net>';
my $to = 'jworld2000@daum.net';
my $subject = "테스트 메일 입니다.";
my $contents = "테스트 메일 내용 입니다.<br>어쩌고 저쩌고";

my $msg = mime_msg($from, $to, $subject, $contents);

my $raw_msg = $msg->as_string;

print $raw_msg;

sub mime_msg {
    my $from = shift;
    my $to = shift;
    my $subject = shift;
    my $contents = shift;

    my $msg = MIME::Lite->new(
        From    => $from,
        To      => $to,
        Subject => $subject,
        Type    => 'multipart/mixed'
    );

    $msg->attach(
        Type     => 'text/html',
        Data     => $contents
    );
    return $msg;
}
```

## Mail::DKIM 으로 DKIM 헤더 만들기

```perl
#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

use MIME::Lite;

use Encode qw(decode encode encode_utf8);

use Mail::DKIM::Signer;
use Mail::DKIM::TextWrap;

use FindBin;

# get mime message
my $from = 'from_address@junho85.pe.kr';
my $fromname = "테스트발송자";
my $to = 'to_address@junho85.pe.kr';
my $subject = "테스트 메일 입니다.";
my $contents = "테스트 메일 내용 입니다.<br>어쩌고 저쩌고";

my $msg = mime_msg($from, $fromname, $to, $subject, $contents);
# print $msg->as_string;

# get dkim signature
my $dkim_sign = get_dkim_sign($msg->as_string);
print $dkim_sign->as_string;

sub get_dkim_sign {
    my $raw_data = shift;

    my $dkim = Mail::DKIM::Signer->new(
        Algorithm => "rsa-sha256",
        Method => "relaxed/simple",
        Domain => "junho85.pe.kr",
        Selector => "1439968973.junho85",
        KeyFile => "$FindBin::Bin/dkimkeys/junho85.pe.kr.private.key.pem",
    );

    $raw_data =~ s/\n/\015\012/gs;
    $dkim->PRINT($raw_data);
    $dkim->CLOSE;

    my $sig = $dkim->signature;

    return $sig;
}

sub mime_msg {
    my $from = shift;
    my $fromname = shift;
    my $to = shift;
    my $subject = shift;
    my $contents = shift;

    my $header_from = $from;
    if ($fromname) {
        $header_from = encode("MIME-B", $fromname)." <".$from.">";
    }

    my $msg = MIME::Lite->new(
        From    => $header_from,
        To      => $to,
        Subject => encode("MIME-B", $subject),
        Type    => 'multipart/mixed'
    );

    $msg->attach(
        Type     => 'TEXT',
        Data     => $contents
    );
    return $msg;
}
```

아래와 같이 DKIM 헤더가 만들어 진다.
```
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/simple; d=junho85.pe.kr; h=
        content-transfer-encoding:content-type:mime-version:date:from:to
        :subject; s=1439968973.junho85; bh=HZ4aIj0JA9YP9NQUeB49Up5RJdcQs
        189PJAP8MagBK8=; b=m8v8hm1OIO8w14H3vdRM2Txfcjy9CnrnTs6pqAMdRkfbR
        K3Z9tXA/fQzSKJsED7QmiTTYwkyqAgDD2+UsL52hmrEaVEh6g/PYsqMQAlv2LULv
        f5eXwnU0iVrQdCe5wQCifViJXcJESZRWRS3d5MKV2EKWx5BrFQnf+7lW0zd11U=
```

## 블로그
* [perl - send email](http://junho85.pe.kr/879)