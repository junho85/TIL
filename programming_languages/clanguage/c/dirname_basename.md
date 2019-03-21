# dirname 과 basename
* dirname https://linux.die.net/man/3/dirname
* basename https://linux.die.net/man/3/basename
* __FILE__ macro 를 이용하면 현재 소스 코드의 full path 를 알 수 있다.
* 만약 해당 파일의 디렉토리만 알고 싶으면 dirname 함수를 이용하면 되고, 파일명만 알고 싶으면 basename 함수를 이용하면 된다.

```c
#include <stdio.h>
#include <libgen.h>

int main() {
    // suppose current file is /Users/junho85/CLionProjects/study-c/file.c
    printf("__FILE__ %s\n", __FILE__); // /Users/junho85/CLionProjects/study-c/file.c
    printf("dirname %s\n", dirname(__FILE__)); // /Users/junho85/CLionProjects/study-c
    printf("basename %s\n", basename(__FILE__)); // file.c

    return 0;
}
```