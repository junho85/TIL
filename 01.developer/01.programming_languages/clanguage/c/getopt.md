# getopt

## getopt 기본
unistd.h 에 있는 함수

getopt(argc, argv, 옵션문자열);

옵션문자열은 "lf:" 라고 하면

l 은 단순히 flag 값이다. on/off 의 개념이다. 뭔가 활성화 비활성화 할 때 사용.

f: 는 뒤에 추가 옵션이 있는 경우이다. (e.g. -f test.txt)

아래는 -l -f 옵션이 있는 프로그램의 예제이다.
```c
#include <stdio.h>
#include <stdlib.h> // exit
#include <unistd.h> // getopt

int main(int argc, char *argv[]) {
    printf("-- getopt example\n");

    int opt;
    while ((opt = getopt(argc, argv, "lf:")) != -1) {
        switch (opt) {
            case 'l':
                printf("l enabled\n");
                break;
            case 'f':
                printf("filename=%s\n", optarg);
                break;
            default: /* '?' */
                fprintf(stderr, "Usage: %s [-l] [-f filename]\n", argv[0]);
                exit(0);
        }
    }
    return 0;
}
```

## getopt_long


## References
* [[C] 프로그램 파라미터를 처리하는 getopt() 사용법 2014.05.03](https://soooprmx.com/archives/4993(https://soooprmx.com/archives/4993)
* [긴 이름의 옵션을 파싱하는 C함수, getopt_long() 2014.05.04](https://soooprmx.com/archives/4991)
* [getopt](http://man7.org/linux/man-pages/man3/getopt.3.html)