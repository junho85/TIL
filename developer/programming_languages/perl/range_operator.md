# perl range operator (..)
아래는 모두 0 부터 9 까지 하나씩 출력 하는 예제이다.

고전적인 for loop
```perl
for (my $i=0; $i<10; $i++) {
    print $i."\n";
}
```

range operator 로 표현
```perl
for my $i (0..9) {
    print $i."\n";
}
```

풀어서 쓸 수도 있음.
```perl
for my $i (0,1,2,3,4,5,6,7,8,9) {
    print $i."\n";
}
```

응용
```perl
for my $i ('00'..'09') {
    print $i."\n";
}
```

00 부터 09 까지 출력 된다. 그 이상도 가능.

## 참고
* https://users.cs.cf.ac.uk/Dave.Marshall/PERL/node38.html