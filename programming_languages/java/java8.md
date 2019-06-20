# java8

## PermGen to Metaspace
* Java8 에서 메모리 설정이 일부 바뀌었다.
* Permanent Generation 이 없어졌다. (이하 PermGen)
* PermGen 에는 각종 메타데이터를 저장하고 있었다.
* 메타데이터는 어디에 저장해야 하나?
* Metaspace 로 저장하도록 바꼈다.
* Metaspace 는 native 메모리 영역을 사용한다.


### 참고
* [Java8 메모리 설정과 GeoServer 2016.07.15](https://tonyne.jeju.onl/2016/07/15/java8-memory-setting-geoserver/)
* [JDK8 적용 후, 심각한 성능저하가 발생한다면? 2017.11.14](https://brunch.co.kr/@heracul/1)
* [Java 8: From PermGen to Metaspace](https://dzone.com/articles/the-false-hope-of-managing-effects-with-tagless-fi)
* [JDK8에선 PermGen이 완전히 사라지고 Metaspace가 이를 대신 함. 2014.08.01](https://starplatina.tistory.com/entry/JDK8%EC%97%90%EC%84%A0-PermGen%EC%9D%B4-%EC%99%84%EC%A0%84%ED%9E%88-%EC%82%AC%EB%9D%BC%EC%A7%80%EA%B3%A0-Metaspace%EA%B0%80-%EC%9D%B4%EB%A5%BC-%EB%8C%80%EC%8B%A0-%ED%95%A8)
* [JAVA8 Permanent 영역은 어디로 가는가 2015.03.18](https://yckwon2nd.blogspot.com/2015/03/java8-permanent.html)
* [Where Has the Java PermGen Gone? 2014.07.07](http://www.infoq.com/articles/Java-PERMGEN-Removed)

## lambda

## stream api

## interface
* java8 에서는 default 함수기능이 생김. 함수에 기능을 구현 할 수 있음.
* 다중 상속을 피하기 위해 기능 구현을 못하도록 한 거 같은데 기능 구현이 되도록 함.
* 다만 default 함수는 필드 변수를 사용 할 수 없다고 함. (확인 필요)

## references
* https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html
* http://blog.powerumc.kr/473
