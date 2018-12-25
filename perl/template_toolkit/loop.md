# loop
* template toolkit 의 loop 문

## 기본
* perl script
```perl
#!/usr/bin/env perl

use strict;
use warnings;
use utf8;

binmode STDOUT, ":utf8";

use Template;

use FindBin;

my $tt = Template->new({
    ENCODING => 'utf8',
    INCLUDE_PATH => ["$FindBin::Bin/templates",],
}) || die "$Template::ERROR\n";

my $vars = {

};

my $output;
$tt->process("loop.html", $vars, \$output) || die $tt->error(), "\n";
print $output;
```

* loop.html template file
```perl
[% FOREACH item IN items %]
    [% loop.count %] [% item.name %] [% item.address %]<br>
[% END %]
```

* 결과
```
    1 apple mango<br>

    2 hello world<br>
```

## index, count
* loop iterator 에 유용한 메소드들이 있다.
* loop.index 는 0 부터 시작
* loop.count 는 1 부터 시작
```perl
[% FOREACH item IN items %]
    [% loop.count %] [% item.name %] [% item.address %]<br>
[% END %]
```

## Blog Postings
* [perl - template toolkit (tt) 반복문](http://junho85.pe.kr/748)

## References
* http://www.template-toolkit.org/docs/manual/Directives.html