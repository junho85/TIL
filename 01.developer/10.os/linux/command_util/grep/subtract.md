# grep - subtract
fileA
```
a
b
c
10
20
30
```

fileB
```
b
c
d
30
```

fileA - fileB
```
$ grep -F -x -v -f fileB fileA
1
10
20
```

fileA - fileB shorter
```
$ grep -Fxvf fileB fileA
1
10
20
```

man grep
```
...
     -F, --fixed-strings
             Interpret pattern as a set of fixed strings (i.e. force grep to behave as fgrep).

     -f file, --file=file
             Read one or more newline separated patterns from file.  Empty pattern lines match every input line.  Newlines are not considered
             part of a pattern.  If file is empty, nothing is matched.
...

     -v, --invert-match
             Selected lines are those not matching any of the specified patterns.
...
     -x, --line-regexp
             Only input lines selected against an entire fixed string or regular expression are considered to be matching lines.
...
```

## 정리
* [How to subtract two files using grep](https://junho85.pe.kr/593)