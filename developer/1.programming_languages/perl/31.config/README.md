# config

## Config::Properties
[Config::Properties](https://metacpan.org/pod/Config::Properties)

perl 에서 설정을 이용하는 방법입니다.

Config::Properties 모듈을 설치해 줍니다.
```
cpan Config::Properties
```

### example
some.properties
```
mode = dev
```

```perl
use Config::Properties;
use FindBin;

my %defaults = (
    mode => "dev",
);

my $config = Config::Properties->new(file => "$FindBin::Bin/../conf/some.properties", defaults => \%defaults);

my $mode = getProperty("mode");
```
