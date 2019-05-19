# perl - euckr to utf8
euckr.txt 에 euckr 내용이 있는 경우 euckr 을 utf-8 로 변형해서 출력하는 예제이다.
```perl
#!/usr/bin/perl

use strict;
use warnings;
use utf8;

use FindBin;

use Encode qw(decode encode encode_utf8);

my $str = `cat $FindBin::Bin/euckr.txt`;
print $str."\n";
print euckr_to_utf8($str);

sub euckr_to_utf8 {
    my $str = shift;
    $str = encode_utf8(decode("euc-kr", $str));
    return $str;
}
```
cat 명령어로 euckr.txt 내용을 불러온 것을 decode 함수로 euc-kr 로 decode 한다. 그것을 다시 encode_utf8 로 encode 한다.

decode euc-kr 을 먼저 해 주는 것은 perl 에서 cat 으로 불러온 문자열이 그냥 데이터 상태인 것을 euc-kr 로 인식하도록 작업 해 주는 용도 인 듯 한데 자세한 이유는 모르겠다. 나중에 알게 되면 추가 정리 해 봐야 겠다.