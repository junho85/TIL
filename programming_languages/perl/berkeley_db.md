# Berkeley DB 사용법


```
use DB_File;

my %db = ();

tie(%db, 'DB_File', 'data.db');

```

## 참고
* https://perldoc.perl.org/DB_File.html