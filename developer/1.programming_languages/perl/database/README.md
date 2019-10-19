# perl database
* perl 에서 db 를 다루는 방법을 정리합니다.

## fetchrow_array()
* 결과값을 배열로 받습니다. 컬럼명을 알 수 없습니다.
```
while (my @data = $sth->fetchrow_array()) {
  print Dumper(\@data);
}
```

## fetchrow_arrayref
* 결과값을 배열참조로 받습니다. 컬럼명을 알 수 없습니다.
```
while (my $row = $sth->fetchrow_arrayref()) {
  print Dumper($row);
}
```

## fetchrow_hashref
* column name 도 표시 하려면 이걸 사용해야된다.
```
while (my @data = $sth->fetchrow_hashref()) {
  print Dumper(\@data);
}
```


## References
* [fetchrow_arrayref](https://metacpan.org/pod/DBI#fetchrow_arrayref)