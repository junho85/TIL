# string
## trim
### 직접 구현
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

### String::Util
```
use String::Util qw(trim);
```

### Text::Trim
```
use Text::Trim qw(trim);
```
chomp 처럼 자기 자신이 변핟록 사용 할 수도 있음


## references
* http://ko.perlmaven.com/trim