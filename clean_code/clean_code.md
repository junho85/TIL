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