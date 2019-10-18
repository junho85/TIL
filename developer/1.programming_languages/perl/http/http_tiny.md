# HTTP::Tiny

## GET 요청 보내기 기본
```perl
use HTTP::Tiny;

my $ua = HTTP::Tiny->new();

my $url = "http://testurl.com:8080/api/test";
my $response = $ua->get($url);

print $response->{content};
```

## POST 요청 보내기 기본
```perl
use HTTP::Tiny;
use JSON;

my $ua = HTTP::Tiny->new();

my $somehash->{"somekey"} = {
    ip => "111.111.111.111"
};

my $url = "http://testurl.com:8080/api/test";
my $response = $ua->post($url, {
        content => encode_json($somehash)
    });

print $response->{content};
```

## 정리
* [perl - HTTP::Tiny 로 http POST request 날리기 2017.09.27](https://junho85.pe.kr/665)

## References
* [HTTP::Tiny](https://metacpan.org/pod/HTTP::Tiny)