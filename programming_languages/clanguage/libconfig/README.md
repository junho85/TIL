# libconfig

## installation

### osx
```bash
$ brew install libconfig
```

### linux - centos
```bash
$ sudo yum install libconfig-devel
```

### linux - redhat
redhat 에는 libconfig-devel 가 기본 패키지에 없음. libconfig 는 있는데 좀 아쉬운 부분.

redhat 6.9 사용한다면 centos 6.9 가서 받아오면 된다.

http://vault.centos.org/6.9/os/i386/Packages/

```bash
$ wget http://vault.centos.org/6.9/os/i386/Packages/libcurl-devel-7.19.7-52.el6.i686.rpm
```

```bash
$ sudo rpm -Uvh libconfig-devel-1.3.2-1.1.el6.i686.rpm
```

https://pkgs.org/download/libconfig 에서 찾아 보는 방법도 있음.

## 예제

example_simple.cfg
```
api_host = "somehost1";
api_key = "abcdefg";
```
참고로 1.3.2 에서는 마지막에 세미콜론(;) 이 꼭 있어야 됨. 이후 버전에서는 세미콜론(;)은 빠져도 되도록 바뀜.

```c
#include <stdio.h>
#include <libconfig.h>
#include <libgen.h>

int main() {
    config_t cfg;

    config_init(&cfg);

    char filepath[200];
    sprintf(filepath, "%s/example_simple.cfg", dirname(__FILE__));

    if (!config_read_file(&cfg, filepath)) {
        fprintf(stderr, "%d - %s\n", config_error_line(&cfg), config_error_text(&cfg));
        config_destroy(&cfg);
        return 1;
    }

    const char *api_host;
    if (config_lookup_string(&cfg, "api_host", &api_host))
        printf("api_host: %s\n", api_host);
    else
        fprintf(stderr, "No 'api_host' setting in configuration file.\n");

    const char *api_key;
    if (config_lookup_string(&cfg, "api_key", &api_key))
        printf("api_key: %s\n", api_key);
    else
        fprintf(stderr, "No 'api_key' setting in configuration file.\n");

    config_destroy(&cfg);

    return 0;
}
```

## 버전차이로 인한 문제
2019.04.17 기준 osx 에서 설치 하면 1.7.2 가 설치 됨.

1.3.2 에서 샘플 코드 빌드 안됨. (redhat 6.9 에서는 1.3.2 가 설치된다.)

다른 것들 타입도 잘 안맞지만 config_error_file 은 아예 없음.
```bash
$ gcc test.c -o test -lconfig
test.c: In function ‘main’:
test.c:47: warning: passing argument 3 of ‘config_setting_lookup_int’ from incompatible pointer type
/usr/include/libconfig.h:127: note: expected ‘long int *’ but argument is of type ‘int *’
test.c:73: warning: passing argument 3 of ‘config_setting_lookup_int’ from incompatible pointer type
/usr/include/libconfig.h:127: note: expected ‘long int *’ but argument is of type ‘int *’
/tmp/cccCR6SX.o: In function `main':
test.c:(.text+0x76): undefined reference to `config_error_file'
collect2: ld returned 1 exit status
```

config_error_file 은 안써도 되면 그냥 빼면 됨.

## 기타
* libconfuse
  * https://github.com/martinh/libconfuse
* glib parser
  * https://developer.gnome.org/glib/stable/glib-Key-value-file-parser.html