# 11장 DSL 만들기
* 영역 특화 언어 만들기
* 수신 객체 지정 람다 사용
* invoke 관례 사용
* 기존 코틀린 DSL 예제

sql
html
docker file
ansible
jenkins script

범용 프로그래밍 언어는 아니고, 특정 영역에 특화된 언어

내부
java 에서 test

query dsl

// 수신 객체 지정 람다
```
fun buildString(f: java.lang.StringBuilder -> Unit) { // 이거 맞는지 모르겠음...

}

fun example1() {
  buildString {
    it.append("a")
    it.append("a")
  }
```
it 가 필요 한데 안쓸 수 있게 하려면 수신 객체 지정 람다

```
fun buildString(f: StringBuilder.() -> Unit) {
  val sb = java.lang.StringBuilder()
  sb.f()
}

fun example1() {
  buildString {
    append("a")
    append("a")
  }

```

// invoke 관례
```

class Greeter(val name: String) {
  operator fun invoke(prefix: String) {
    // 
  }
}

fun example2() {
  val bavarianGreeter = Greeter("Servus")
  bavarianGreeter("Dmitry"(
}
```

// 중의 호출
```
fun example3() {
  println("kotlint" should start with "k")
}
```

```
object start

infix fun String.should(x: start): StartWrapper = StartWrapper(this)

class StartWrapper(val value: String) {
  infix fun with(prefix: String) =
    if (!value.startsWith(prefix))
      throw AssertionError("!!!")
    else
      Unit
}
```

```
fun main() {
  example3()
}
```

// 기본 타입 확장
```
val Int.ays: Period
    get() = Period.ofDays(this)

fun example4() {
  println(1.days)
}

fu nmain() {
  example4()
}
```

// 멤버 확장 함수
```kotlin
class Column<T>

open class Table {
  fun integer(name: String): Column<Int> = TODO()
  fun varchar(name: String, length: Int): Column<String> = TODO()
  //fun <T> Column<T>.autoIncrement(): Column<T> = TODO()
  fun Column<int>.autoIncrement(): Column<Int> = TODO()
  fun <T> Column<T>.primaryKey(): Column<T> = TODO()
}

object Country: Table() {
  // NO ERROR
  val id = integer("id").autoIncrement().primaryKey()
  val name = varchar("name", 50)
}

fun main() {
  // ERROR
  Column<Int>().autoIncrement()
}
```
## 11.1 API에서 DSL로

### 11.1.1 영역 특화 언어라는 개념

### 11.1.2 내부 DSL

### 11.1.3 DSL의 구조

### 11.1.4 내부 DSL로 HTML 만들기
```
fun createSimpleTable() = createHTML().
  table {
    tr {
      td { +"cell" }
    }
  }
```

```
<table>
  <tr>
    <td>cell</td>
  </tr>
</table>
```

## 11.2 구조화된 API 구축: DSL에서 수신 객체 지정 DSL 사용

### 11.2.1 수신 객체 지정 람다와 확장 함수 타입


## 11.5 요약
* 내부 DSL은 여러 메소드 호출로 구성된 구조를 더 쉽게 표현할 수 있게 해주는 API를 설계할 때 사용할 수 있는 패턴이다.
* 수신 객체 지정 람다는 람다 본문 안에서 메소드를 결정하는 방식을 재정의함으로써 여러 요소를 중첩시킬 수 있는 구조를 만들 수 있다.
* 수신 객체 지정 람다를 파라미터로 받은 경우 그 람다의 타입은 확장 함수 타입이다. 람다를 파라미터로 받아서 사용하는 함수는 람다를 호출하면서 람다에 수신 객체를 제공한다.
* 외부 템플릿이나 마크업 언어 대신 코틀린 내부 DSL을 사용하면 코드를 추상화하고 재활용할 수 있다.
* 중위 호출 인자로 특별히 이름을 붙인 객체를 사용하면 특수 기호를 사용하지 않는 실제 영어처럼 보이는 DSL을 만들 수 있다.
* 원시 타입에 대한 확장을 정의하면 날짜 등의 여러 종류의 상수를 더 읽기 좋게 만들 수 있다.
* invoke 관례를 사용하면 객체를 함수처럼 다룰 수 있다.
* kotlinx.html 라이브러리는 HTML 페이지를 생성하기 위한 내부 DSL을 제공한다. 그 내부 DSL을 확장하면 여러 프론트엔드 개발 프레임워크를 지원하게 만들수 있다.
* 코틀린테스트 라이브러리는 단위 테스트에서 읽기 쉬운 단언문을 지원하는 내부 DSL을 제공한다.
* 익스포즈드 라이브러리는 데이터베이스를 다루기 위한 내부 DSL을 제공한다.
* 안코 라이브러리는 안드로이드 개발에 필요한 여러 도구를 제공한다. 그런 도구중에는 UI 레이아웃을 정의하기 위한 내부 DSL도 있다.

## 잡담
* html 은 예전에 pug (구 jade) 때도 그렇고 원언어와 형태가 많이 다르면 꺼려지게 되는거 같음. kotlinx.html 도 잘 되기는 어렵지 않을까? IDE 에서 엄청 잘 지원해 준다면 달라질지도?