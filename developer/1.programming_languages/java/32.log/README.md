# log
## log4j

maven 설정 예
```
		<dependency>
			<groupId>org.slf4j</groupId>
			<artifactId>slf4j-api</artifactId>
			<version>1.7.5</version>
		</dependency>
		<dependency>
			<groupId>org.slf4j</groupId>
			<artifactId>slf4j-log4j12</artifactId>
			<version>1.7.5</version>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>log4j</groupId>
			<artifactId>log4j</artifactId>
			<version>1.2.16</version>
		</dependency>
```


## logback
* log4j 기반으로 작성됨

## log4j 에서 logback 으로 마이그레이션 하기
* [log4j.properties to logback.xml Translator](http://logback.qos.ch/translator/)

## References
* [[LOG] Log4j, LogBack 정리](https://goddaehee.tistory.com/45)

### Reasons to prefer logback over log4j
* [Reasons to prefer logback over log4j](http://logback.qos.ch/reasonsToSwitch.html)
  * 특정 상황에서 10배 정도 빠름. 메모리도 적게 먹음
* [Log4j에서 LOGBack으로 마이그레이션 하기 ( migrate from log4j to logback)](https://beyondj2ee.wordpress.com/2013/11/05/log4j%EC%97%90%EC%84%9C-logback%EC%9C%BC%EB%A1%9C-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%ED%95%98%EA%B8%B0-migrate-from-log4j-to-logback/)