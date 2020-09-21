# java - Optional
* null 은 1965년 Tony Hoare 라는 영국 컴퓨터 과학자에 의해 고안됨. "존재하지 않는 값"을 표현하는 방법. 10억불 짜리 큰 실수였고, null 참조 만든 것을 후회.
* NullPointerException (NPE) 로 인한 고통
* 컴파일시에는 발견되지 않고 런타임에서 펑펑 터짐.
* NPE 방어를 위한 null 체크 로직 남발. 가독성, 유지 보수성 떨어짐.
* 스칼라, 하스켈 같은 함수형 언어들은 "존재할지 안 할지 모르는 값"을 표현하는 별개의 타입을 가지고 있음.
* Java8 에서 이런 방식에 착안하여 java.util.Optional<T> 라는 새로운 클래스 도입
* NPE를 유발할 수 있는 null 을 직접 다루지 않아도 됨.
* 수고롭게 null 체크를 직접 하지 않아도 됨.
* 명시적으로 해당 변수가 null 일 수도 있다는 가능성 표현. (불필요 방어 로직을 줄일 수 있음)

## Optional 객체 생성
```java
Optional<String> hello = Optional.empty();
```

```java
Optional<String> hello = Optional.of(value);
```
null 이 넘어올 경우 NPE (NullPointerException) 발생하기 때문에 주의.

```java
Optional<String> hello = Optional.ofNullable(value);
```
null 이 넘어 오면 NPE 대신 Optional.empty()

해당 객체가 null 인지 아닌지 자신이 없을 때 사용.

## Optional 이 담고 있는 객체 접근
* get() 비어 있는 Optional 객체에 대해서, NoSuchElementException 던짐
* orElse(T other) 비어 있으면 other 를 리턴함.
* orElseGet(Supplier<? extends T> other) 비어 있으면 넘어온 함수형 인자를 통해 생성된 객체 리턴. orElse(T other) 의 게으른 버전. 성능상 이점.
* orElseThrow(Supplier<? extends X> exceptionSupplier) 비어 있으면 넘어온 함수형 인자를 통해 생성된 예외 던짐.

## Optional 의 잘못된 사용
* get() 은 비어 있는 Optional 객체인 경우 예외를 발생. isPresent() 로 null 체크 필요.
  * null 체크 하는거랑 거의 같음. 그럼 왜씀?

## Stream 처럼 사용하기
* Optional 을 최대 1개의 원소를 가지고 있는 특별한 Stream 이라고 생각하면 좋음. 사용 방법이나 기본 사상이 매우 유사하기 때문.
* Stream 클래스가 가지고 있는 map(), flatMap(), filter() 를 Optional 도 가지고 있음.

...

## null 이 나올수도 있는 변수의 유효성 검사하기
예를 들어 다음과 같은 코드가 있다.
```java
String isAdmin = System.getProperty("program.mode.admin");
```
환경변수 program.mode.admin 이 선언되어 있으면 해당 값을 가져 오는 코드이다.

program.mode.admin 에는 true/false 두 가지 값이 입력 될 수 있다고 가정한다.

그렇다면 아래처럼 관리자 모드와 아닌 모드로 나눌 수 있다.
```java
String isAdmin = System.getProperty("program.mode.admin");
if (isAdmin.equals("true")) {
  // 관리자
} else {
  // 관리자 아님
}
```

그런데 환경변수의 값을 선언하지 않은 환경에서라면 어떻게 될까?

isAdmin.equals 하는 순가 NullPointerException 이 발생하게 된다.

선언하지 않은 경우 false 가 되길 원한다. 그렇다면 다음과 같이 코드를 짜게 될 것이다.

```java
String isAdmin = System.getProperty("program.mode.admin");
if (isAdmin != null && isAdmin.equals("true")) {
  // 관리자
} else {
  // 관리자 아님
}
```

null 검사를 해야 된다는게 좀 내키지 않는다. 이럴때는 Optional 을 사용해 볼 수 있다.

```java
String isAdmin = System.getProperty("program.mode.admin");
if (Optional.ofNullable(isAdmin).filter(s -> s.equals("true")).isPresent()) {
  // 관리자
} else {
  // 관리자 아님
}
```

코드가 좀 길어 지긴 했지만 null 에 대한 검사를 코드로 직접 작성하지 않고 한줄에 해결 할 수 있다.


## References
* 잘 정리된 3부작 포스팅
  * [자바8 Optional 1부: 빠져나올 수 없는 null 처리의 늪 2017.01.01](http://www.daleseo.com/java8-optional-before/)
  * [자바8 Optional 2부: null을 대하는 새로운 방법 2017.01.08](http://www.daleseo.com/java8-optional-after)
  * [자바8 Optional 3부: Optional을 Optional답게 2017.01.15](http://www.daleseo.com/java8-optional-effective/)
* [자바8 Optional이란 2018.10.14](https://advenoh.tistory.com/15)
* [3. Optional Class 2017.03.10](https://asfirstalways.tistory.com/354)
* [26 Reasons Why Using Optional Correctly Is Not Optional 2018.11.28](https://dzone.com/articles/using-optional-correctly-is-not-optional)
* [Java Optional 바르게 쓰기 2019.10.03](http://homoefficio.github.io/2019/10/03/Java-Optional-%EB%B0%94%EB%A5%B4%EA%B2%8C-%EC%93%B0%EA%B8%B0/)
