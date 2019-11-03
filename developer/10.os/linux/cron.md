# crontab

## setting environment variables
```환경변수명=값``` 을 선언해 주면 된다.

```
ENVIRONMENT=prod

10 0 * * * somescript.sh
```

* 블로그 포스팅: [cron - How to set environment variables](http://junho85.pe.kr/1148)

## 매일 5시 0분
분을 0 으로 하고 시간을 5로 하고 나머지는 모두 *
```
0 5 * * * somescript.sh
```

## 평일 지정 방법. set
* 평일 (월~금) 9시 0분 예제
```
# 오늘의 휴가자 알림
0 9 * * 1-5 /ourteam/vacation_alarm.pl
```

* 블로그 포스팅: [cron, crontab 평일 지정 예제](http://junho85.pe.kr/899)

## 초 단위로 cronjob 수행 하는 방법
* 기본적으로 초 단위로 수행이 안된다. 그래서 sleep 을 이용한 꼼수를 사용하는 편이다. 똑같은 내용을 3개 만들고, 
```
* * * * * cd /hanmail/2019-ingyeo && git pull
* * * * * sleep 20 && cd /hanmail/2019-ingyeo && git pull
* * * * * sleep 40 && cd /hanmail/2019-ingyeo && git pull
```