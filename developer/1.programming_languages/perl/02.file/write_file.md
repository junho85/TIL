# perl write file
```
open(my $fh, '>', 'result.txt');
print $fh "Hello World!\n";
close $fh;
```
이렇게 하면 기존에 result.txt 파일이 있으면 내용을 덮어 써서 기존 내용은 사라진다.

## append
>> 처럼 두개를 넣으면 기존 내용 뒤에 내용을 계속 붙이게 된다.
```
open(my $fh, '>>', 'result.txt');
print $fh "Hello World!\n";
close $fh;
```

## References
* [Writing to files with Perl](https://perlmaven.com/writing-to-files-with-perl)
