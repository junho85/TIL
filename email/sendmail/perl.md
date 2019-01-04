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

## 블로그
* [perl - send email](http://junho85.pe.kr/879)