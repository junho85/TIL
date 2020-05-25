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
  * RouterFunction
* 요청 바인딩
* 핸들러 실행
* 핸들러 결과 처리(응답 생성)

나머지 셋은 HandlerFunction

## WebFlux 함수형 Hello/{name} 작성
* 함수 2개 만들면 됨
  * HandlerFunctino을 먼저 만들고
  * RouterFunction에서 path기준 매핑을 해준다

```java
@RestController
public class MyController {
  @GetMapping("/hello/{name}")
  String hello(@PathVariable String name) {
    return "Hello " + name;
  }
}
```
HandlerFunction으로

```java
HandlerFunction helloHandler = req -> {
  String name = req.pathVariable("name"); // ServerRequest.pathVariable()로 {name} 추출
  Mono<String> result = Mono.just("Hello " + name); // 로직 적용후 결과 값을 Mono에 담는다
  Mono<ServerResponse> res = ServerResponse.ok().body(result, String.class);
  return res;
}
```
HandlerFunction.handle()의 람다식
Mono<T> handle(ServerRequest request);

Mono에 담아서 리턴해야함.

* 웹 응답을 ServerResponse로 만든다
* HTTP 응답에는 응답코드, 헤더, 바디가 필요
* ServerResponse의 빌더를 활용
* Mono에 담긴 ServerResponse 타입으로 리턴

설명을 하느라 풀어서 작성한 것이고 아래 처럼 작성

```java
HandlerFunction helloHandler = req ->
  ok().body(fromObject("Hello " + req.pathVariable("name")));
```

ServerRequest에서 로직이 필요한 데이터 추출 & 바인딩

* 애플리케이션 로직을 적용하고 결과 값을 만든다
* BodyInserters.fromObject()의 도움을 받아 Mono에 담는다

* 로직의 결과 값을 바디에 담고 상태코드를 추가해 웹응답(ServerResponse)으로 만든다
* content-type이나 기타 헤더들은 스프링이 알아서 만들어준다

함수(람다 식) 형식으로 만들어 둔다


@GetMapping("/hello/{name}")

RouterFunction으로

```java
RouterFunction router = req->
  RequestPredicates.path("/hello/{name}").test(req) ? // 웹 요청 정보 중에서 URL 경로 패턴 검사
    Mono.just(helloHandler) : Mono.empty();
```
조건에 맞으면 핸들러 함수를 Mono에 담아서 반환

* 조건에 맞지 않으면 빈 Mono 반환
* 함수니까 뭐라도 반환해야 함

RouterFunction.route()의 람다식
Mono<HandlerFunction<T>> route(ServerRequest request);

복잡해 보이는데? 과연 이걸 꼭 써야 하는가?

HandlerFunction과 RouterFunction 조합
* RouterFunctions.route(predicate, handler)
```java
RouterFunction router =
  RouterFunctions.route(RequestPredicates.path("/hello/{name}"),
    req -> ServerResponse.ok().body(fromObject("Hello " + 
      req.pathVariable("name"))));   
```
RouterFunction과 HandlerFunction조합하여 간결하게 작성

RouterFunction router = req ->
  RequestPredicates.path("/hello/{name}").test(req) ?
    Mono.just(helloHandler) : Mono.empty();
    
RouterFunction의 매핑 조건을 체크하는 로직만 발췌

HandlerFunction helloHandler = req->
  ok...
  
기존 MVC 보다 나아보이지 않는다.

RouterFunction의 등록
* RouterFunction 타입의 @Bean으로 만든다

```java
@Bean
RouterFunction helloPathVarRouter() {
  return route(RequestPredicates.path("/hello/{name}"),
    req -> ok().body(fromObject("Hello " +
      req.pathVariable("name"))));
```

## 핸들러 내부 로직이 복잡하다면 분리한다
* 핸들러 코드만 람다 식을 따로 선언하거나
* 메소드를 정의하고 메소드 참조로 가져온다

```java
HandlerFunction handler = req-> {
  String res = myService.hello(req.pathVariable("name"));
  return ok().body(fromObject(res));
};

return route(path("/hello/{name}"), handler);
```

다른 bean 호출을 포함한 복잡한 로직을 담은 람다 식

```java
@Component
public class HelloHandler {
  @Autowired MyService myService;

  Mono<ServerResponse> hello(ServerRequest req) {
    String res = myService.hello(req.pathVariable("name"));
    return ok().body(fromObject(res));
  }
  ...
}
```

앞의 람다식과 동일한 메소드 타입을 가진 메소드

```java
@Bean
RouterFunction helloRouter(@Autowired HelloHandler helloHandler) {
  return route(path("/hello/{name}"), helloHandler::hello);
}
```

핸들로 메소드가 정의된 빈을 주입

하나의 컴포넌트 안에 메소드 형태로

10개 정도의 API가 필요 하다면 10개 만들어야 함. 비효율.

route라는 static메소드.

## RouterFunction의 조합
* 핸들러 하나에 @Bean하나씩 만들어야 하나?
* RouterFunction의 and(), andRoute() 등으로 하나의 @Bean에 n개의 RouterFunctoin을 선언할 수 있다.

## RouterFunction의 매핑 조건의 중복
* 타입 레벨 - 메소드 레벨의 @RequestMapping처럼 공통의 조건을 정의하는것 가능
* RouterFunction.nest()

```java
public RouterFunction<?> routingFunction() {
  return nest(pathPrefix("/person"), // URL이 /person으로 시작하는 조건을 공통으로
    nest(accept(APPLICATION_JSON), // APPLICATION_JSON을 accept하는 공통조건 중첩
      route(GET("/{id}), handler::getPerson) // /person/{id} 경로의 GET이면 getPerson 핸들러로 매핑
      .andRoute(method(HttpMethod.GET), handler::listPeople) // /person 경로에 GET이면 listPeople 핸들러로
    ).andRoute(POST("/").and(contentType(APPLICATION_JSON)), // /person 경로에 POST이고 contentType이 APPLICATION_JSON이면 createPerson 핸들러로
  handler::createPerson));
}
```
3개의 handlerFunction

적은 코드로 요청맵핑 코드를 정의할 수 있다.

MVC프로그램에 비해 간단하거나 나아보이지 않는다.

## WebFlux 함수형 스타일의 장점
* 모든 웹 요청 처리 작업을 명시적인 코드로 작성
  * 메소드 시그니처 관례와 타입 체크가 불가능한 애노테이션에 의존하는 @MVC 스타일보다 명확
  * 정확한 타입 체크 가능
* 함수 조합을 통한 편리한 구성, 추상화에 유리
* 테스트 작성의 편리함
  * 핸들러 조직은 물론이고 요청 매핑과 리턴 값 처리까지 단위테스트로 작성 가능
  
## WebFlux 함수형 스타일의 단점
* 함수형 스타일의 코드 작성이 편하지 않으면 코드작성과 이해 모두 어려움
* 익숙한 방식으로도 가능한데 뭐하러

@Controller + @RequestMapping
@MVC WebFlux

## @MVC WebFlux
* 애노테이션과 메소드 형식의 관례를 이용하는 @MVC방식과 유사
* 비동기 + 논블록킹 리액티브 스타일로 작성

## ServerRequest, ServerResponse
* WebFlux의 기본 요청, 응답 인터페이스 사용
* 함수형 WebFlux의 HandlerFunction을 메소드로 만들었을 때와 유사
* 매핑만 애노테이션 방식을 이용

```java
@RestController
public static class MyController {
  @RequestMapping("/hello/{name}") // 요청 매핑과 등록은 기존 @MVC 방식으로
  Mono<ServerResponse> hello(ServerRequest req) { // 메소드로 재정의된 HandlerFunction
    return ok().body(fromObject(req.pathVariable("Pname"))));
  }
```

## @MVC 요청 바인딩과 Mono/Flux 리턴 값
* 가장 대표적인 @MVC WebFlux 작성 방식
* 파라미터 바인딩은 @MVC 방식 그대로
* 핸들러 로직 코드의 결과를 Mono/Flux 타입으로 리턴

```java
@GetMapping("/hello/{name}")
Mono<String> hello(@PathVariable String name) {
  return Mono.just("Hello " + name);
}
```

MVC에 리턴만 Mono

```java
@RequestMapping("/hello")
Mono<String> hello(User user) {
  return Mono.just("Hello " + user.getName());
}
```

* 커맨드 오브젝트, 모델 오브젝트 바인딩
* URL 파라미터 또는 form-data

## @RequestBody 바인딩 (JSON, XML)
* T
* Mono<T>
* Flux<T>


```java
@RequestMapping("/hello")
Mono<String> hello(@RequestBody Mono<User> user) {
  return user.map(u -> "Hello " + u.getName());
}
```

Mono의 연산자를 사용해서 로직을 수행하고 Mono로 리턴

```java
@PostMapping(value = "/hello")
Flux<String> hello(@RequestBody Flux<User> users) {
  return users.map(u -> "Hello " + u.getName());
}
```

User의 스트림 형태로 로직 수행

## @ResponseBody 리턴 값 타입
* T
* Mono<T>
* Flux<T>
* Flux<ServerSideEvent>
* void
* Mono<Void>


WebClient + Reactive Data
WebFlux와 리액티브 기술

## WebFlux만으로 성능이 좋아질까?
* 비동기-논블록킹 구조의 장점은 블록킹 IO를 제거하는 데서 나온다
* HTTP 서버에 논블록킹 IO는 오래 전부터 지원
* 뭘 개선해야 하나?

## 개선할 블록킹 IO
* 데이터 액세스 리포지토리
* HTTP API 호출
* 기타 네트워크를 이용하는 서비스

## JPA - JDBC 기반 RDB 연결
* 현재는 답이 없다
* 블로킹 메소드로 점철된 JDBC API
* 일부 DB는 논블록킹 드라이버가 존재하지만...
* @Async 비동기 호출과 CFuture를 리액티브로 연결하고 쓰레드풀 관리를 통해서 웹 연결 자원을 효율적으로 사용하도록 만드는 정도
* JDK 10에서 Async JDBC가 등장할 수도

## Spring Data JPA의 비동기 쿼리 결과 방식
* 리포지토리 메소드의 리턴 값을 @Async 메소드처럼 작성

```java
@Async
CompletableFuture<User> findOneByFirstname(String firstname);
```

```java
@GetMapping
Mono<User> findUser(String name) {
  return Mono.fromCompletionStage(myRepository.findOneByFirstName(name));
}
```

## 본격 리액티브 데이터 액세스 기술
* 스프링 데이터의 리액티브 리포지토리 이용
  * MongoDB
  * Cassandra
  * Redis
* ReactiveCrudRepository 확장

...

```java
@Autowired UserRepository userRepository;

@Getmapping
F..
```

findAll


```java
public Mono<ServerResponse> getPerson(ServerRequest request) {
  int personId = Integer....

```

## 논블록킹 API 호출은 WebClient
* AsyncRestTemplate의 리액티브 버전
* 요청을 Mono/Flux로 전달할 수 있고
* 응답ㅇ르 Mono/Flux형태로 가져온다

```java
@GetMapping("/webclient")
Mono<String> webclient() {
  return WebClient.create("http://localhost:8080")
    .get()
    .uri("/hello/{name}", "Spring")
    .accept(MediaType.TEXT_PLAIN)
    .exchange()
    .flatMap(r -> r.bodyToMono(String.class))
    .map(d -> d.toUppserCase())
    .flatMap(d -> helloRepository.save(d));
}
```

## 함수형 스타일의 코드가 읽기 어렵다면
* 각 단계의 타입이 보이지 않기 때문이다
* 타입이 보이도록 코드를 재구성하고 익숙해지도록 연습이 필요하다

```java
@GetMapping("/webclient")
Mono<String> webclient() {
  WebClient wc = WebClient.create("http://localhost:8080"); // 기준 URL을 넣어 WebClient 생성
  UriSpec<RequestHeadersSpec<?>> uriSpec = wc.get(); // 다음 단계로 Uri설정 준비. HTTP 메소드 결정
  RequestHeadersSpec<?> headerSpec = uriSpec.uri("/hello/{name}", "Spring"); // URI 패턴과 파라미터로 URI 설정
  RequestHeadersSpec<?> headerSpec2 = headerSpec.accept(MediaType.TEXT_PLAIN); // 헤더 설정
  Mono<ClientResponse> res = headerSpec2.exchange(); // ServerResponse와 유사한 구조의 응답 정보. 요청을 응답으로 교환!
  Mono<String> data = res.flatMap(r -> r.bodyToMono(String.class)); // Mono 데이터에 적용한 함수의 결과가 Mono타입이기 때문에 flatMap을 적용해야 한다. 아니면 Mono<Mono<String>>이 됨. 요청 바디를 String 타입으로 변환해서 Mono에 담아 리턴하는 함수
  Mono<String> upperData = data.map(d -> d.toUpperCase()); // 데이터에 함수를 적용해서 변환
  return upperData.flatMap(d -> helloRepository.save(d)); // 데이터를 리포지토리에 저장하고 결과를 리턴
}
```

리액터나 rxjava써보신분들은 왜 이렇게 작성 되는지 잘 아시겠죠

## 비동기-논블록킹 리액티브 웹 애플리케이션의 효과를 얻으려면
* WebFlux + 리액티브 리포지토리
          + 리액티브 원격 API 호출
          + 리액티브 지원 외부 서비스
          + @Async 블록킹 IO
* 코드에서 블록킹 작업이 발생하지 않도록 Flux 스트림 또는 Mono에 데이터를 넣어서 전달

## 리액티브 함수형은 꼭 성능 때문만?
* 함수형 스타일 코드를 이용해 간결하고 읽기 좋고 조합하기 편한 코드 작성
* 데이터 흐름에 다양한 오퍼레이터 적용
* 연산을 조합해서 만든 동시성 정보가 노출되지 않는 추상화된 코드 작성
  * 동기, 비동기, 블록킹, 논블록킹 등을 유연하게 적용
* 데이터의 흐름의 속도를 제어할 수 있는 메커니즘 제공

## 논블록킹 IO에만 효과가 있나?
* 시스템 외부에서 발생하는 이벤트에도 유용
* 클라이언트로부터의 이벤트에도 활용 가능

## ReactiveStreams
* WebFlux가 사용하는 Reactor외에 RxJava2를 비롯한 다양한 리액티브 기술에 적용된 표준 인터페이스
* 다양한 기술, 서비스 간의 상호 호환성에 율
* 자바9에 Flow API로 포함

## 뭘 공부해야 하나
* 자바 8+함수형 프로그래밍에 익숙해질 것
* CompletableFuture와 같이 비동기 작업의 조합, 결합에 뛰어난 툴의 사용법을 익힐 것
* ReactorCore 학습
  * Mono/Flux, 오퍼레이터, 스케줄러
* WebFlux와 스프링의 리액티브 스택 공부
* 비동기 논블록킹 성능과 관련된 벤치마킹, 모니터링, 디버깅 연구
* 테스트

스프링 리액티브 라이브 코딩은 https://www.youtube.com/tobyleetv
