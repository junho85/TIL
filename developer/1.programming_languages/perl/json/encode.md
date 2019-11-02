# encode (object to json string)
* encode_json 함수를 이용해서 hash 값을 json string 으로 바꿀 수 있다.

간단 요약
```perl
use JSON;

my %hash = (
    hello => "world",
    parent => {
        son => "grand son"
    }
);

print encode_json(\%hash); 
```

사용 예시
```perl
#!/usr/bin/env perl

use strict;
use warnings;

use JSON;

my %hash = (
    hello => "world",
    parent => {
        son => "grand son"
    }
);

print encode_json(\%hash);
# {"hello":"world","parent":{"son":"grand son"}}
print "\n";

print JSON->new->encode(\%hash);
# {"hello":"world","parent":{"son":"grand son"}}
print "\n";

print JSON->new->pretty->encode(\%hash);
# {
#     "hello" : "world",
#     "parent" : {
#         "son" : "grand son"
#     }
# }
```

## 정리
* http://junho85.pe.kr/596 - encode json

## References
* [encode_json](https://metacpan.org/pod/JSON#encode_json)
```perl
$json_text = encode_json $perl_scalar
```
아래와 같음
```perl
$json_text = JSON->new->utf8->encode($perl_scalar)
```

to_json 은 JSON->new->encode 와 같음