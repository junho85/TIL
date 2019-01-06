# perl - lookup mx records
* Net::DNS 모듈을 이용해서 구하는 방법
* mx 메서드를 이용하면 쉽게 구할 수 있다.
* resolver 의 query 메서드를 이용해서도 구할 수 있다.

```perl
#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

use Net::DNS;

use Data::Dumper;

my $res = Net::DNS::Resolver->new;

my $domain = "daum.net";

# mx 메서드 이용 방법
my @mxs = mx($res, $domain);

for my $mx (@mxs) {
    print $mx->preference, ' ', $mx->exchange, "\n";
}

# query 메서드 이용 방법
my $reply = $res->query($domain, 'MX');

for my $mx ($reply->answer) {
    print $mx->preference, ' ', $mx->exchange, "\n";
}
```

## 블로그
* [perl - MX 레코드 조회 하기. Net::DNS 모듈 이용. lookup mx records](http://junho85.pe.kr/1186)