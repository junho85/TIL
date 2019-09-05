# perl cgi

```
use CGI qw(:all);
```

## header
```
charset('utf-8');
print header;
```

그냥 구현
```
print <<END_OF_PRINT;
Content-Type: text/html; charset=utf-8

END_OF_PRINT
```