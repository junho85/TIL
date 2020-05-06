# line by line

## cat
라인수가 많지 않으면 그냥 cat 결과를 array 에 넣어서 읽으면 됨.
```perl
my @lines = `cat file.txt`;

for my $line (@lines) {
    print $line;
}
```

## file open
라인수가 많으면 file open 해서 한줄씩 읽는다.
```perl
my $file = "file.txt";
open my $info, $file or die "Could not open $file: $!";

while (my $line = <$info>) {
    print $line;
}
close $info;
```

### 정리
* [perl - read file line by line](https://junho85.pe.kr/926)