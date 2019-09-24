# clojure

* lisp 언어를 jvm 에서 돌아가도록 개량한 버전
* 그냥 lisp 하고 다른점은 괄호가 좀 더 적다. 괄호 대신 다른 기호를 사용.
* clojure 언어를 사용하는 분야 중에서 현업에서는 웹개발에서 분야에서 많이 사용
* jvm 에서 돌아기가 때문에 java 1.6 이상

* 들여 쓰기 제한 없음 (python 은 있음)
* 개행 제한 없음

## 프로젝트 관리 도구
* Leiningen (http://leiningen.org/)

* brew 로 설치
```
brew install leiningen
```

## hello world
* 프로젝트 생성
```
lein new hello
```

* core.clj 수정

```
(ns hello.core)

(defn -main [& args])
  (println "Hello World"))
```

* 실행


```
lein run -m hello.core
```

```
java -cp target/hello-0.1.0-SNAPSHOT-standalone.jar hello.core
```
```
lein repl
```
* 1
* 0.1
* "hello" 홑 따옴표를 지원하지 않음. 홑 따옴표는 평가 방지 기호
* \a 캐릭터 하나
* true/false
* (1 2 3) 순서가 있는 리스트
* #(+ 1 %) 함수
* limit 아무 단어나 쓰면 symbol

주석
(comment hello)

클로저는 값을 계산

숫자는 기본적으로 java의 long 타입

## 평가
* 기본적으로 값을 평가 하면 값
```
user=> 1
1
```
1을 입력하면 1로 평가한다.

* 심볼 값은 심볼 값과 연결된 실제 값으로 치환 됨
```
user=> +
#object[clojure.core$_PLUS_ 0x75e196db "clojure.core$_PLUS_@75e196db"]
```

```
user=> (+ 1 2)
3
```

```
user=> (type 1)
java.lang.Long
```

' 를 앞에 붙이면 평가를 하지 않음
```
user=> 'aaa
aaa
```

* 주석
```
user=> (comment hello)
nil
```

* map
```
user=> {1 2 3 4}
{1 2, 3 4}
user=> {:id 1 :name "aaaa"}
{:id 1, :name "aaaa"}
```
: 는 키워드 타입


```
user=> [1 2 3]
[1 2 3]
```

```
user=> (first [1 2 3 4])
1
user=> (second [1 2 3 4])
2
user=> (map + [1 2 3 4 5])
(1 2 3 4 5)
user=> (map inc [1 2 3 4 5])
(2 3 4 5 6)
user=> (map inc [1 2 3 4 5])
(2 3 4 5 6)
user=> (reduce + [1 2 3 4 5])
15
user=> (filter true? [true false false])
(true)
```

http://clojure.org/reference/special_forms

## 매크로
* 클로저 코드를 평가하기 전에 매크로들은 모두 실제 코드로 치환된다.
```
(defmacro when [test & body]
  (list 'if test (cons 'do body)))
(when true
  1)
;; (if true (do 1))
```

## 심볼에 값을 연결하기
```
user=> (def one 1)
#'user/one
user=> one
1
```

```
user=> (def add (fn [x y] (+ x y)))
#'user/add
user=> (add 1 2)
3
```

```

```

## Ring + Compojure 라이브러리를 사용해 간단한 웹 띄어보기
* lein compojure 템플릿으로 프로젝트 만들기
```
lein new compojure webapp
```

```
cd webapp
lein ring server
```

## hiccup 라이브러리를 추가하고 샘플에 마크업 적용해보기
* project.clj 에 디펜던시 추가
```
[hiccup "1.0.5"]
```

* handler.clj 수정
require 에 [hiccup.core :refer [html]]

"Hello World" 를
(html [:h2 "Hello World"]))

(html [:idv
  [:h1 (:remote-addr req)]]))

## template engine
selmer
https://github.com/yogthos/Selmer

## 장점
* 언어를 만들 수 있는 능력. 다른 언어의 장점을 흡수 할 수 있음.

## 단점
* 느림
* 스크립트로 쓰기도 좀


java -cp clojure-1.8.0.jar clojure.main

## 조건문
```
user=> (if (= 1 1) "true" "false")
"true"
```

## references

* https://eunmin.gitbooks.io/clojure-for-beginners/content/1_hello_world.html
* [Why Clojure? 2019.08.22](https://blog.cleancoder.com/uncle-bob/2019/08/22/WhyClojure.html)
* [Why Clojure? 2010.08.18](http://thecleancoder.blogspot.com/2010/08/why-clojure.html)
* [The Last Programming Language 2011.04](https://cleancoders.com/video-details/clean-code-episode-0)
* [왜 클로져인가?
](http://clojure.or.kr/wiki/doku.php?id=lecture:clojure:why_clojure)