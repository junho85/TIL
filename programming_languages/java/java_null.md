# java null

## 자바에서 null을 안전하게 다루는 방법
* [자바에서 null을 안전하게 다루는 방법](https://www.slideshare.net/gyumee/null-142590829)
* Part 0: null에 대해서
  * 2000년 대 중반
    * 동적 타이핑/스크립팅
    * RoR과 스타트업 붐으로 생산성이 강조
    * 다언어 프로그래밍(Polyglot) 인기
    * 그루비(Groovy), jRuby, Jython
  * 2010년 전후
    * 함수형 프로그래밍
      * 멀티코어와 대용량 분산 처리가 인기를 끌면서 함수형 프로그래밍이 주목 받음. 스칼라(Scala), 클로저(Clojure)
  * 2010년대 중반
    * 널 안정성
      * 차기 자바의 자리를 두고 실용 언어들 간 경쟁
        * 실론(Ceylon), 코틀린(Kotlin)
  * "I call it my billion-dollar mistake. It was the invention of the null reference in 1965." - Tony Hoare
  * null 참조
    * '레고드 핸들링': 객체지향의 시초가 된 논문
    * 특별한 값이 없음을 나타내려고 null을 도입했고 이 값을 사용하려고 할 때 오류를 내도록 설계
    * 두 참조값이 null일 때 두 참조는 동일하다고 판단
  * 자바의 null 참조
    * 의미가 모호함: 초기화되지 않음, 정의되지 않음, 값이 없음, null 값
    * 모든 참조의 기본 상태(값?)
    * 모든 참조는 null 가능
  * 소프트웨어 결함 통계
    * Google Play 주요 crush 2위가 NullPointer
* Part 1: null을 안전하게 다루는 방법
* Part 2: null이 안전하다고 보장해주는 도구

