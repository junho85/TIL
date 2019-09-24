# flat array
```perl
use Data::Dumper;

my $array_of_array_ref = [[1,2,3],[4,5,6]];
print(Dumper($array_of_array_ref)); # [[1,2,3],[4,5,6]]

my @result = map {@$_} @$array_of_array_ref;
print(Dumper(\@result)); # [1,2,3,4,5,6]
```

## List::Flatten
```
use List::Flatten;

my @result2 = flat @$array_of_array_ref;
print(Dumper(\@result2)); # [1,2,3,4,5,6]
```

## References
* [Perl: What is the easiest way to flatten a multidimensional array?](https://stackoverflow.com/questions/5166662/perl-what-is-the-easiest-way-to-flatten-a-multidimensional-array)