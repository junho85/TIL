# 스프링캠프 2017 [Day1 A3] : Spring Web Flux
[스프링캠프 2017 [Day1 A3] : Spring Web Flux](https://www.youtube.com/watch?v=2E_1yb8iLKk)

10년전 ksug처음 만든사람.
toby.epril.com
fb.com/tobylee

## 발표내용
Spring 5.0 WebFlux 소개와 개발 방법
M5+ 아직 정식 안나왔음.
(X) 리액티브 프로그래밍이란 무엇인가?
(X) 클라우드에서 리액티브 시스템 구축
(X) Reactor, RxJava 사용법

## Spring 5.0
* 2016년 M1 공개
* 현재 M5 -> RC1
* 2017년 6월 출시 예정 (늦어 질 수 있으니 천천히 여유를 가지고)
* 자바8+

## Spring-WebFlux
* 구 Spring-Web-Reactive
* 스프링 5의 메인 테마는 원래 JDK9이었는데 이제는 WebFlux으로 바뀌었다 - Jurgen Holler
* 스프링 리액티브 스택의 웹 파트 담당

## 용도
* 비동기-논블록킹 리액티브 개발에 사용
* 효율적으로 동작하는 고성능 웹 애플리케이션 개발
* 서비스간 호출이 많은 마이크로서비스 아키텍처에 적합
* ~~새로운 방식으로 개발해보고 싶은 호기심 충족~~

## 2가지 개발방식 지원
* 기존의 @MVC 방식
  * @Controller, @RestController, @RequestMapping
* 새로운 함수형 모델
  * RouterFunction
  * HandlerFunction
  
## 새로운 요청-응답 모델
* 서블릿 스택과 API에서 탈피
  * 서블릿 API는 리액티브 함수형 스타일에 적합하지 않음
* ~~HttpServletRequest, HttpServletResponse~~
* ServerRequest, ServerResponse

## 지원 웹 서버/컨테이너
* Servlet 3.1+ (Tomcat, Jetty, ...)
  * 서블릿 3.1+의 비동기-논블록킹 요청 처리 기능
* Netty
  * 비동기-논블록킹IO 웹 서버
* Undertow

RouterFunction + HandlerFunction
함수형 스타일 WebFlux

## 스프링이 웹 요청을 처리하는 방식
* 요청 맵핑
  * 웹 요청을 어느 핸들러에게 보낼지 결정
  * URL, 헤더
  * @RequestMapping
* 요청 바인딩
  * 핸들러에 전달할 웹 요청 준비
  * 웹 URL, 헤더, 쿠키, 바디
* 핸들러 실행
  * 전달 받은 요청 정보를 이용해 로직을 수행하고 결과를 리턴
* 핸들러 결과 처리(응답 생성)
  * 핸들러의 리턴 값으로 웹 응답 생성

```java
@RestController
public class MyController {
  @GetMapping("/hello/{name}") // 요청 맵핑
  String hello(@PathVariable String name) { // 요청 바인딩
    return "Hello " + name; // 핸들러 실행, 핸들러 결과 처리(응답 생성)
  }
}
```

스트링타입을 바로 리턴하면 Response Body에 문자열 그대로
Content-Type을 따로 지정하지 않으면 Plain Text

## RouterFunction
* 함수형 스타일의 요청 매핑

```java
@FunctionalInterface
public interface RouterFunction<T extends ServerResponse> {
  Mono<HandlerFunction<T>> route(ServerRequest request); // WebFlux 버전의 웹 요청
// 웹 플럭스 버전의 웹 응답인 ServerResponse이나 그 서브타입의 Mono 퍼블리셔를 리턴하는 HandlerFunction의 Mono타입...
// 간단히... ServerResponse를 리턴하는 HandlerFunction
```
펑셔널 인터페이스

HandlerFunction<T>
웹 응답을 리턴하는 함수

## HandlerFunction
* 함수형 스타일의 웹 핸들러(컨트롤러 메소드)
* 웹 요청을 받아 웹 응답을 돌려주는 함수

```java
@FunctionalInterface
public interface HandlerFunction<T extends ServerResponse> {
  Mono<T> handler(ServerRequest request);
}
```

Mono의 의미는 공부 하시면 됩니다.

## 함수형 WebFlux가 웹 요청을 처리하는 방식
* 요청 매핑
* 요청 바인딩
* 핸들러 실행
* 핸들러 결과 처리(응답 생성)
