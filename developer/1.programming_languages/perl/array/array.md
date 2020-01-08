# perl - array

## merge two arrays
* push 함수를 이용하면 간단히 배열을 합칠 수 있다.

```perl
my @array1 = (1,2);
my @array2 = (3,4);

my @array3 = ();

push(@array3, @array1);
push(@array3, @array2);

print "@array3\n"; # 1 2 3 4
```

* 이렇게 해도 같음. 그런데 push 가 좀 더 효과적이고 한다.
  * https://docstore.mik.ua/orelly/perl3/cookbook/ch04_10.htm
```perl
my @array4 = (@array1, @array2);

print "@array4\n"; # 1 2 3 4
```

## find array
```
my @matches = grep { /$stream_s/ } @astreams;
```

### References
* [How can I check if a Perl array contains a particular value?](https://stackoverflow.com/questions/2860226/how-can-i-check-if-a-perl-array-contains-a-particular-value)
* [How do I search a Perl array for a matching string?](https://stackoverflow.com/questions/2925604/how-do-i-search-a-perl-array-for-a-matching-string/2925834)
* [Perl Array search a string in](https://stackoverflow.com/questions/41501707/perl-array-search-a-string-in)