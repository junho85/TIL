# trim

## 정규표현식을 이용하여 직접 구현
```
sub trim {
  my $s = shift;
  $s =~ s/^\s+|\s+$//g;
  return $s;
};

sub ltrim {
  my $s = shift;
  $s =~ s/^\s+//;
  return $s;
};

sub rtrim {
  my $s = shift;
  $s =~ s/\s+$//;
  return $s;
};
```

사용 예제
```perl
my $some_str = "   hello world   ";
print "===$some_str===\n"; # ===   hello world   ===

my $trimmed_str = trim($some_str);
print "===$trimmed_str===\n"; # ===hello world===

my $ltrimmed_str = ltrim($some_str);
print "===$ltrimmed_str===\n"; # ===hello world   ===

my $rtrimmed_str = rtrim($some_str);
print "===$rtrimmed_str===\n"; # ===   hello world===
```

* [perl - string trim, ltrim, rtrim 2019.08.15](https://junho85.pe.kr/1414)

## String::Util
```
use String::Util qw(trim);
```

## Text::Trim
```
use Text::Trim qw(trim);
```
chomp 처럼 자기 자신이 변핟록 사용 할 수도 있음


## references
* http://ko.perlmaven.com/trim