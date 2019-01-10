# HTTP::Tiny

## GET 요청 보내기 기본
```perl
use HTTP::Tiny;

my $ua = HTTP::Tiny->new();

my $url = "http://testurl.com:8080/api/test";
my $response = $ua->get($url);

print $response->{content};
```