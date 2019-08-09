# split

## split 결과에서 값을 바로 뽑아 쓰기
```perl
my $log = "name=june";

my $name = (split(/=/, $log))[1];

print $name."\n";
```
$name 변수에 "june" 이 들어간다.