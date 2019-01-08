# crontab

## setting environment variables
```환경변수명=값``` 을 선언해 주면 된다.

```
ENVIRONMENT=prod

10 0 * * * somescript.sh
```

* 블로그 포스팅: [cron - How to set environment variables](http://junho85.pe.kr/1148)

## 평일 지정 방법. set
* 평일 (월~금) 9시 0분 예제
```
# 오늘의 휴가자 알림
0 9 * * 1-5 /ourteam/vacation_alarm.pl
```

* 블로그 포스팅: [cron, crontab 평일 지정 예제](http://junho85.pe.kr/899)
