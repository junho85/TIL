# decode (json string to object)
* decode_json 함수를 이용해서 json string 값을 hash 로 바꿀 수 있다.

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


from_json 은 JSON->new->decode 와 같음.

