# json
* perl 에서는 JSON 모듈을 이용하면 손쉽게 json 을 사용할 수 있다.
* encode_json 함수를 이용해서 hash 값을 json string 으로 바꿀 수 있다.
* decode_json 함수를 이용해서 json string 값을 hash 로 바꿀 수 있다.

## encode (hash to json string)

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

## decode (json string to hash)

간단 요약
```perl
use JSON;

my $data = decode_json($json_content);
```

사용 예시
```perl
#!/usr/bin/env perl

use strict;
use warnings;

use JSON;
use Data::Dumper;

my $json_content = qq/{"hello":"world","parent":{"son":"grand son"}}/;

my $data = decode_json($json_content);

print Dumper($data);

=pod
$VAR1 = {
          'parent' => {
                        'son' => 'grand son'
                      },
          'hello' => 'world'
        };
=cut
```

## References
* https://metacpan.org/pod/release/ISHIGAKI/JSON-2.93/lib/JSON.pm
* http://junho85.pe.kr/596 - encode json
* http://junho85.pe.kr/600 - decode json