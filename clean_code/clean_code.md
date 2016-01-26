# clean code

## 1장 깨끗한 코드
* DSL
* 르블랑의 법칙 - 나중은 결코 오지 않는다
* 나쁜 코드가 쌓일수록 팀 생산성을 떨어진다
* 원대한 재설계의 꿈
* 유명한 프로그래머들이 말하는 클린코드
* TDD
* 중복이 없다
* 모든 테스트 통과
* 짐작한 대로 돌아가는 코드
* 코드를 읽는 시간 대 코드를 짜는 시간 비율 10:1 넘음
* 보이스카우트 규칙 - 캠프장은 처음 왔을 때보다 더 깨끗하게 해놓고 떠나라
* 프리퀄과 원칙
* SRP - Single Responsibility Principle
* OCP - Open Closed Principle
* DIP - Dependency Inversion Principle

## 2장 의미 있는 이름
* 의도를 분명히 밝혀라

* 그릇된 정보를 피하라

* 의미 있게 구분하라

* 발음하기 쉬운 이름을 사용하라
  * (X) genymdhms -> generationTimestamp

* 검색하기 쉬운 이름을 사용하라

* 인코딩을 피하라
* 헝가리식 표기법
* 멤버 변수 접두어 - m_dsc -> description
* 인터페이스 클래스와 구현 클래스 - IShapeFactory -> ShapeFactory
- 인터페이스의 I 생략. 구현 클래스에 ShapeFactoryImpl 처름 Impl 뒤에 붙이거나 차라리 앞에 C를 붙임

* 자신의 기억력을 자랑하지 마라

* 클래스 이름
  * 명사나 명사구 - Customer, WikiPage, Account, AddressParser
  * Manager, Processor, Data, Info 등과 같은 단어는 피하고, 동사는 사용하지 않는다.

* 메서드 이름
  * 동사나 동사구가 적합 - postPayment, deletePage, save
  * 접근자Accessor, 변경자Mutator, 조건자Predicate는 javabean 표준에 따라 값 앞에 get, set, is를 붙임
  * 생성자Constructor를 중복정의 overload할 때는 정적 팩토리 메서드를 사용. 메서드는 인수를 설명하는 이름을 사용
    * (Good) Complex fulcrumPoint = Complex.FromRealNumber(23.0);
    * (Bad) Complex fulcrumPoint = new Complex(23.0);

* 기발한 이름은 피하라
  * whack()? -> kill()
  * eatMyShort()? -> Abort()

* 한 개념에 한 단어를 사용하라

* 말장난을 하지 마라

* 해법 영역에서 가져온 이름을 사용하라

* 문제 영역에서 가져온 이름을 사용하라

* 의미 있는 맥락을 추가하라

* 불필요한 맥락을 없애라

## 3장 함수
### 작게 만들어라

#### 블록과 들여쓰기

### 한 가지만 해라
```
함수는 한 가지를 해야 한다. 그 한 가지를 잘 해야 한다. 그 한 가지만을 해야 한다.
```
#### 함수 내 섹션
p90 4-7 generatePrimes 함수는 declarations, inializations, sieve 라는 세 섹션으로 나눠짐

### 함수 당 추상화 수준을 하나로

#### 위에서 아래로 코드 읽기: 내려가기 규칙

### Switch 문
* 가급적 쓰지 않는 것이 좋음;;
* 다형적 객체를 생성하는 코드 안에서 사용하고 상속 관계로 숨긴 후 절대로 다른 코드에 노출 하지 않는다. [G23]
* 물론 불가피한 상황도 생김. (언제?)

### 서술적인 이름을 사용하라
* 3-7 testableHtml -> SetupTeardownIncluder.render 로 변경. 함수가 하는 일을 좀 더 잘 표현
* 코드를 읽으면서 짐작했던 기능을 각 루틴이 그대로 수행한다면 깨끗한 코드라고 불러도 되겠다."
* 이름이 길어도 괜찮다.
* 이름을 붙일 때는 일관성이 있어야 한다. 모듈 내에서 함수 이름은 같은 문구, 명사, 동사를 사용.
  * includeSetupAndTeardownPages, includeSetupPages, includeSuiteSetupPage, includeSetupPage 등
  * 문체가 비슷하면 이야기를 순차적으로 풀어가기도 쉬워진다.

### 함수 인수
* 이상적인 인수 개수는 0개 (무항), 다음은 1개 (단항), 다음은 2개 (이항). 3개 (삼항)는 가능한 피하는 편이 좋다.
* 4개 이상 (다항)은 특별한 이유가 필요하다.

#### 많이 쓰는 단항 형식
* 함수에 인수 1개를 넘기는 이유로 가장 흔한 경우는 두 가지
  * 인수에 질문을 던지는 경우. boolean fileExists("MyFile")
  * 인수를 뭔가로 변환해 결과를 반환하는 경우. InputStream fileOpen("MyFile"). String 형의 파일 이름을 InputStream 으로 변환
  * 드물지만 이벤트. 출력 인수는 없다. passwordAttemptFailedNtimes(int attempts)
* 단항함수 피할거
  * void includeSetupPageInfo(StringBuffer pageText).
  * 변환 함수에서 출력 인수를 사용하면 혼란을 일으킴
  * 입력 인수를 변환하는 함수라면 변환 결과는 반환값을 돌려준다.
  * StringBuffer transform(StringBuffer in) 이 void transform(StringBuffer out) 보다 좋다.
  * StringBuffer transform(StringBuffer in) 이 입력 인수를 그대로 돌려주는 함수라 할지라도 변환 함수 형식을 따르는 편이 좋다. 적어도 변환 형태는 유지하기 떄문

#### 플래그 인수
#### 이항 함수
#### 삼항 함수

#### 인수 객체
#### 인수 목록
#### 동사와 키워드

### 부수 효과를 일으키지 마라
#### 출력 인수
* public void appendFooter(StringBuffer report) 에서 report 는 출력 인수.
* 객체 지향 프로그래밍이 나오기 전에는 출력 인수가 불가피한 경우도 있었다. 하지만 객체 지향 언어에서는 출력 인수를 사용할 필요가 거의 없다. 출력 인수로 사용하라고 설계한 변수가 바로 this 이기 때문. 다시 말해, appendFooter는 다음과 같이 호출하는 방식이 좋다.
```
report.appendFooter()
```
* 일반적으로 출력 인수는 피해야 한다.
* 함수에서 상태를 변경해야 한다면 함수가 속한 객체 상태를 변경하는 방식을 택한다.

### 명령과 조회를 분리하라
* 함수는 뭔가를 수행하거나 뭔가에 답하거나 둘 중 하나만 해야 한다. 둘 다 하면 안 된다. 혼란을 초래한다.

### 오류 코드보다 예외를 사용하라
* 오류 코드를 반환하면 호출자는 오류 코드를 곧바로 처리해야 한다는 문제에 부딪힌다.

#### Try/Catch 블록 뽑아내기
* try/catch 는 원래 추함 ㅠㅠ
* 코드 구조 혼란 일으키고 정상 동작과 오류 처리 동작을 뒤섞음
* try/catch 블록을 별도 함수로 뽑아내는 편이 좋음

```
public void delete(Page page) {
  try {
    deletePageAndAllReferences(page);
  } catch (Exception e) {
    logError(e);
  }
}

private void deletePageAndAllReferences(Page page) throws Exception {
  deletePage(page);
  registry.deleteReference(page.name);
  configKeys.deleteKey(page.name.makeKey());
}

private void logError(Exception e) {
  logger.log(e.getMessage());
}
```
* delete 함수는 모든 오류를 처리함. 그래서 코드를 이해하기 쉬움.

#### 오류 처리도 한 가지 작업이다
* 함수는 '한 가지'작업만. 오류 처리도 '한 가지' 작업에 속함.

#### Error.java 의존성 자석
* 오류 코드를 반환한다는 이야기는, 클래스든 열거형 변수든, 어디선가 오류 코드를 정의한다는 뜻
```
public enum Error {
  OK,
  INVALID,
  NO_SUCH,
  LOCKED,
  OUT_OF_RESOURCES,
  WAITING_FOR_EVENT;
}
```
* 위와 같은 클래스는 의존성 자석 magnet
* 다른 클래스에서 Error enum 을 import 해 사용해야 하므로, 즉, Error enum이 변한다면 Error enum 을 사용하는 클래스 전부를 다시 컴파일 하고 다시 배치해야 한다. 그래서 Error 클래스 변경이 어려워진다. 프로그래머는 재컴파일/재배치가 번거롭기에 새 오류 코드를 정의하고 싶지 않다. 그래서 새 오류 코드를 추가하는 대신 기존 오류 코드를 재사용한다.
* 오류 코드 대신 예외를 사용하면 새 예외는 Exception 클래스에서 파생된다. 따라서 재컴파일/재배치 없이도 새 예외 클래스를 추가할 수 있다. OCP (Open Closed Principle)를 보여주는 예다. [PPP02]

### 반복하지 마라!
* 객체지향 프로그래밍은 코드를 부모 클래스로 몰아 중복을 없앤다.
* 구조적 프로그래밍, AOP(Aspect Oriented Programming), COP(Component Oriented Programming) 모두 어떤 면에서 중복 제거 전략이다.

#### 구조적 프로그래밍
* 에츠허르 데이크스트라 Edsger Dijkstra 원칙은 너무 빠듯함. (함수에 return 하나, 루프 안에 break, continue 사용하면 안 되면 goto는 절대로 안됨)
* 함수를 작게 만든다면 간혹 return, break, continue 를 여러 차례 사용해도 괜찮다.
* goto 문은 큰 함수에서만 의미가 있으므로, 작은 함수에서는 피해야만 한다.

#### 함수를 어떻게 짜죠?

#### 결론

## 4장 주석
```
나쁜 코드에 주석을 달지 마라. 새로 짜라.
- 브라이언W. 커니핸, P.J.프라우거
```

### 코드로 의도를 표현하라!
```
// 직원에게 복지 혜택을 받을 자격이 있는지 검사한다.
if ((employee.flags & HOURLY_FLAG) &&
    (employee.age > 65))
```
vs
```
if (employee.isEligibleForFullBenefits())
```
당연히 아래가 좋다.

#### 좋은 주석
글자 값을 한다고 생각하는 주석 몇가지 소개. 정말로 좋은 주석은, 주석을 달지 않을 방법을 찾아낸 주석

##### 법적인 주석
```
// Copyright (C) 2003,2004,2005 by Object Mentor, Inc. All rights reserved.
// GNU General Public License 버전 2 이상을 따르는 조건으로 배포한다.
```
##### 정보를 제공하는 주석
```
// 테스트 중인 Responder 인스턴스를 반환한다.
protected abstract Responder responderInstance();
```
가능하다면, 함수 이름에 정보를 담는 편이 더 좋다. ex) responderBeingTested

```
// kk:mm:ss EEE, MMM dd, yyyy 형식이다.
Pattern timeMatcher = Pattern.compie(
  "\\d*:\\d*:\\d* \\w*, \\w* \\d*, \\d*");
```
이왕이면 시각과 날짜를 변환하는 클래스를 만들어 코드를 옮겨주면 더 좋고 더 깔끔하겠다. 그러면 주석이 필요 없어 진다.

##### 의도를 설명하는 주석
```
// 오른쪽 유형이므로 정렬 순위가 더 높다.

// 스레드를 대량 생성하는 방법으로 어떻게든 경쟁 조건을 만들려 시도한다.
```

##### 의미를 명료하게 밝히는 주석
인수나 반환값이 표준 라이브러리나 변경하는 못하는 코드에 속한다면 의미를 명료하게 밝히는 주석이 유용
```
assertTrue(a.compareTo(a) == 0); // a == a
```
##### 결과를 경고하는 주석
```
// 여유 시간이 충분하지 않다면 실행하지 마십시오.
```
물론 요즘에는 @Ignore 속성을 이용해 테스트 케이스를 꺼버린다. 구체적인 설명은 @Ignore 속성에 문자열로 넣어준다.
```
@Ignore("실행이 너무 오래 걸린다.")
```

```
// SimpleDateFormat은 스레드에 안전하지 못한다.
// 따라서 각 인스턴스를 독립적으로 생성해야 한다.
```

##### TODO 주석
```
// TODO-MdM 현재 필요하지 않다.
// 체크아웃 모델을 도입하면 함수가 필요 없다.
```
그래도 TODO 로 떡칠한 코드는 바람직하지 않다. 그러므로 주기적으로 TODO 주석을 점검해 없애도 괜찮은 주석은 없애라고 권한다.

##### 중요성을 강조하는 주석
```
// 여기서 trim 은 정말 중요하다. trim 함수는 문자열에서 시작 공백을 제거한다.
// 문자열에 시작 공백이 있으면 다른 문자열로 인식되기 때문이다.
```

##### 공개 API에서 Javadocs


#### 나쁜 주석
대다수 주석이 이 범주에 속함.

##### 주절거리는 주석

##### 같은 이야기를 중복하는 주석

##### 오해할 여지가 있는 주석

##### 의무적으로 다는 주석

##### 이력을 기록하는 주석
소스 코드 관리 시스템이 없던 시절에나 필요 했음

##### 있으나 마나 한 주석
기본 생성자
// day of Month
dayOfMonth

// 이게 뭐야!

##### 무서운 잡음
때로는 Javadocs 도 잡음

```
/** The name. */
private String name;
```

##### 함수나 변수로 표현할 수 있다면 주석을 달지 마라
```
// 전역 목록 <smodule>에 속하는 모듈이 우리가 속한 하위 시스템에 의존하는가?
if (smodule.getDependSubsystems().contains(subSysMod.getSubSystem()))
```
이 코드에서 주석을 없애도 다시 표현하면 다음과 같다.
```
ArrayList moduleDependees = smodule.getDependSubsystems();
String ourSubSystem = subSysMod.getSubSystem();
if (moduleDependees.contains(ourSubsystem))
```

##### 위치를 표시하는 주석
```
// Actions //////////////////////
```

##### 닫는 괄호에 다는 주석
함수를 줄이려 시도하자

##### 공로를 돌리거나 저자를 표시하는 주석
소스 코드 관리 시스템이 기억한다.

##### 주석으로 처리한 코드
주석으로 처리된 코드는 다른 사람들이 지우기를 주저한다. 소스 코드 관리 시스템이 대신 기억해 준다.

##### HTML 주석
주석을 뽑아 웹 페이지에 올릴 작정이라면 주석에 HTML 태그를 삽입해야 하는 책임은 프로그래머가 아니라 도구가 져야 한다.

##### 전역 정보

##### 너무 많은 정보

##### 모호한 관계

##### 함수 헤더

##### 비공개 코드에서 Javadocs

##### 예제