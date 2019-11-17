# 정원사들 (일일커밋, TIL 모임) 출석체크 만들기
* 행사: [DevFest Pangyo 2019 : Fun Thing is Good!](https://festa.io/events/606)
* google sheet: [정원사들 시즌4 출석부](https://docs.google.com/spreadsheets/d/1kBxDS7BE0O_NvgfVRFeIUSHCXIdxjaqESAp_-Dg_yZY/edit#gid=0)
* [웹사이트](http://garden4.junho85.pe.kr)
* [2019 DevFest Pangyo 발표자료](https://docs.google.com/presentation/d/1jrGFmWeBJz8GLlidANQidkG8QKNQMss4mZ1pTIIfVAY)

## 중점적으로 다룰부분?
* 일일커밋의 좋은점?
* 점진적인 개발?
* 데이터 시각화?
* 데이터에서 얻은 인사이트?

## 개요
* 정원사들과 일일커밋. 일일커밋의 좋은점.
* 출석체크 - slack github bot
* slack api 와 python
* 출석부를 만들자. 일일 자동 출석부 공유
* 데이터 시각화. google sheet
* 웹사이트 개발. (TODO 인증 안한사람들에게 알림 보내기)
* 효율성 개선.

## 정원사들 모임?
* 매일매일 공부한 거나 알게된 지식을 일일커밋을 통해 쌓아가고 공유하는 모임
  * 벙개를 통해 친목도 도모함
  * 지식공유회를 통해 공부한 것들을 공부함. (까먹은 출석 채우기도 가능)

## 일일커밋을 하는 이유와 효과?
* 기억력 감퇴. 기억 보조제
  * 기억력이 나빠서 알던것도 기억이 잘 안나면 찾아 봐야 한다. 
  * 검색해서 나오는건 내 기준에 최고의 결과가 아닐 수 있음.
  * 내 기준에 최종 버전이 필요하다.
* 좋은 일이 생길거야
  * 발표 기회
    * [잔디콘 2019](https://jandi-gardening.github.io/)
    * DevFest
  * 해커톤
  * PS 책 쓰기 제의. github 보고 연락 드립니다.

## 출석 정보를 어떻게 모을까?
* (X 외부인의 시각에서는 중요하지도 않고 이해하기도 어려울듯) project100? 하지만 금액이 기부 처리 된다. (마음대로 쓰기 힘들어진다)
* slack 에 github 봇 연동해서 push 될 때 마다 자동으로 메시지가 쌓인다.

## slack 으로 알람 온 걸 어떻게 수집 할까?
* slack api 이용
  * python 좀 짱인듯
* slack api 메시지?
* push 된 시간을 기준으로 한다.
* commit 메시지
* 왜 출석을 안하시나? github page 메시지를 다르게 나온다.
* slack api 로 매번 호출 하려니 느리고 불편. DB 에 데이터를 쌓자.

## 출석체크를 어떻게 할까?
* 다음날 새벽 4시 까지 인증 가능에 따른 이슈

## github bot 이 메시지를 안보내서 출석이 누락 되었어요
* 수작업으로 넣어주기?

## 데이터 시각화
* 보기좋은 떡이 맛도 좋다

### google sheet
* google sheet 에 출석 데이터를 모아서 차트로 표현


### 웹사이트로 만들면 어떨까?
* Django 를 선택한 이유
  * python 이니까
  * 책상위에 Django 책이 있어서
  * 이건 그냥 API 서버용
```
pip install Django
django-admin startproject garden4-backend
cd garden4-backend
python manage.py startapp attendance
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
...
python manage.py createsuperuser
```

### 프론트엔드는?


## 데이터에서 얻은 인사이트
* 출석률을 어떻게 끌어 올릴 것인가?
* 독려가 필요한 시점?
* 출석률을 높이기 위한 이벤트의 효과?

## slack 메시지를 주기적으로 퍼오기 보다 event 를 받는게 좋지 않을까?
* 웹서버도 있겠다 event 받기 가능해짐
* event 받을 때 마다 그 데이터를 slack_message 에 추가하고
* event 메시지로 출석부에 누적 시키기
* 실시간 출석부 가능

## 애시당초 github push 메시지로 출석을 한게 잘 한 걸까?

## 더 나아가서
* 사람별 커밋 내역 살펴 보기
* 커밋의 양으로 보기
* 커밋 메시지로 관심사 분석 하기
* react, nodejs... 로 툴 만들기?
* 출석률 순위
* 횟수가 많은 사람?
* 활동량이 많은 시간대?
* 대선주자 방송 처럼?
* 잔디 모아 보여주기


* mariadb -> mongodb
  * 회사에서 업무로 쓰기 시작해서 공부할겸
  * slack api 결과가 json 이라서 slack message 모으기 편하지 않을까?
* python
  * slack, mongodb 사용하기 편리함.
* gist는 안되나요? -> 안됨. github 봇에 기능이 있을까?
* 아직 출석 완료 하지 않은 사람들을 위한 알람기능
* 매일 자동 통계 뽑아서 공유하기

## References
* [2019 정원사들 시즌4 출석체크 만들기](https://docs.google.com/document/d/1GYlGBW4OxuQDlEeCjg5EEu-SlgEvlALA79lzAIfUM8o)
* [자동화 이미지](https://pixabay.com/ko/illustrations/%EC%9E%90%EB%8F%99%ED%99%94-%EC%9E%AC%EB%B0%B0-%EB%A1%9C%EB%B4%87-%EC%8B%AC%EA%B8%B0-%EC%9B%90%EC%98%88-3615114/)
* [100일간 잔디 심기 아리아 2018.08.12](https://brunch.co.kr/@aria-grande/27)
