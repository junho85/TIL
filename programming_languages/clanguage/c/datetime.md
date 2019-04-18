# c - datetime
* ```time_t cur_time = time((time_t *) 0);``` 로 현재 시각을 구할 수 있음.
* UTC 1970 년 1월 1일 0시 0분 0초 부터 몇초가 지났는지를 리턴한다.
* POSIX 시간이나 Epoch 시간이라고도 부른다.
* time_t 은 long type 이다. 32 머신에서는 2038년 1월 19일 03:14:08 까지만 표현 할 수 있어서 문제가 생긴다.
* 이 값을 localtime() 함수에 넣으면 초, 분, 시, 일, 월 (0부터 시작 주의), 년 (1990부터의 년), 일요일부터의 요일, 년 초부터 몇일 지났는지, 서버 타임이 유효한지 정보를 구조체로 만들어 준다.
* 이것을 strftime 함수에 넣으면 원하는 포멧으로 문자열로 만들어 준다.

```c
#include <stdio.h>
#include <time.h>

time_t get_curtime() {
    return time((time_t *) 0);
}

void test_cur_yyyymmdd() {
    char formatted_date[9];

    time_t cur_time = time((time_t *) 0);

    struct tm *tp = localtime(&cur_time);
    size_t ret = strftime(formatted_date, 9, "%Y%m%d", tp);

    printf("%s\n", formatted_date); // e.g. 20190419
    printf("%zu\n", ret); // 8 - length
}

void test_cur_yyyymmddhhmmss() {
    char formatted_date[15];

    time_t cur_time = time((time_t *) 0);

    struct tm *tp = localtime(&cur_time);
    size_t ret = strftime(formatted_date, 15, "%Y%m%d%H%M%S", tp);

    printf("%s\n", formatted_date); // e.g. 20190419000305
    printf("%zu\n", ret); // 14 - length
}

int main() {
    test_cur_yyyymmdd();
    test_cur_yyyymmddhhmmss();

    return 0;
}
```

```c
/* localtime example */
#include <stdio.h>      /* puts, printf */
#include <time.h>       /* time_t, struct tm, time, localtime */

int main ()
{
  time_t rawtime;
  struct tm * timeinfo;

  time (&rawtime);
  timeinfo = localtime (&rawtime);
  printf ("Current local time and date: %s", asctime(timeinfo));

  return 0;
}
```

## References
* http://www.cplusplus.com/reference/ctime/time/
* http://www.cplusplus.com/reference/ctime/localtime/
* https://www.geeksforgeeks.org/time-function-in-c/
* [유닉스 시간](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%89%EC%8A%A4_%EC%8B%9C%EA%B0%84)
