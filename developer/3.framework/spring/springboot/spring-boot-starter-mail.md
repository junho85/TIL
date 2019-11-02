# spring boot starter mail

## maven
* [Spring Boot Mail Starter](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-mail)

2.2.0
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
    <version>2.2.0.RELEASE</version>
</dependency>
```

## spring boot starter mail, kotlin, grade 로 간단하게 만들어서 메일 발송해보기.
간단히 프로젝트를 하나 만들어 봅니다. spring-boot-start-mail 를 이용할겁니다. 언어는 kotlin 을 쓰고 빌드툴은 gradle 을 사용합니다.
```
curl https://start.spring.io/starter.zip -d type=gradle-project -d language=kotlin -d bootVersion=2.2.0.RELEASE -d baseDir=mail -d groupId=kr.pe.junho85 -d artifactId=mail -d name=mail -d description=Demo%20project%20for%20Spring%20Boot -d packageName=kr.pe.junho85.mail -d packaging=jar -d javaVersion=1.8 -d dependencies=mail -o mail.zip
unzip mail.zip
cd mail
idea .
```
https://start.spring.io 에서 프로젝트 뼈대를 만들수 있는데요. request 를 뜯어 보면 curl 커맨드로도 만들수 있습니다.

idea 커맨드로 intellij 를 간단히 실행했는데요. 커맨드라인에서 IntelliJ 실행하는 방법은 https://junho85.pe.kr/1448 를 참고 하시기 바랍니다.

MailApplication.kt 에 메일발송 코드를 간단히 작성합니다.
```kotlin
@SpringBootApplication
class MailApplication

fun main(args: Array<String>) {
	runApplication<MailApplication>(*args)

	val message = SimpleMailMessage()
	message.setFrom("test@junho85.pe.kr")
	message.setTo("junho85@gmail.com")
	message.setSubject("this is test mail")
	message.setText("this is simple mail")

	val sender = JavaMailSenderImpl()
	sender.host = "gmail-smtp-in.l.google.com."
	
	sender.send(message)
}
```


## References
* [Spring Boot – How to send email via SMTP 2019.04.12](https://www.mkyong.com/spring-boot/spring-boot-how-to-send-email-via-smtp/)