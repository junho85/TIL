# encoding
main.html 내용이 utf-8 이고 perl 스크립트가 아래처럼 use utf8 에 binmode 를 :utf8 로 해 두면 한글이 깨져 보인다.  
정확한 이유는 아직 잘 모르겠지만 해결 방법을 정리 해 본다.  
아래 처럼 작성하면 한글이 깨진다.
```perl
#!/usr/bin/env perl

use strict;
use warnings;
use utf8;

binmode STDOUT, ":utf8";

use Template;

use FindBin;

my $tt = Template->new({
    # ENCODING => 'utf8',
    INCLUDE_PATH => ["$FindBin::Bin/templates",],
}) || die "$Template::ERROR\n";

my $vars = (
);

$tt->process("main.html", $vars) || die $tt->error(), "\n";
```

결과
```
ìëíì¸ì
```

ENCODING => 'utf8', 의 주석을 해제 하면 깨지지 않는다.

결과
```
안녕하세요
```