# Java7

## Permanent 영역

### 저장되는 정보
* Methods of a class (including the bytecodes)
  * 클래스의 메소드들 (바이트코드 포함)
* Names of the classes (in the form of an object that points to a string also in the permanent generation)
  * 클래스들의 이름들
* Constant pool information (data read from the class file, see chapter 4 of the JVM specification for all the details).
* Object arrays and type arrays associated with a class (e.g., an object array containing references to methods).
* Internal objects created by the JVM (java/lang/Object or java/lang/exception for instance)
* Information used for optimization by the compilers (JITs)
  * JVM 내부적인 객체들과 최적화컴파일러(JIT)의 최적화 정보

* Method 의 Meta 정보
* Class 의 Meta 정보 (pkg path 정보. text)
* Static Object
* 상수화된 String Object
* Class 와 관련된 배열 객체 Meta 정보

참고
* [JAVA8 Permanent 영역은 어디로 가는가 2015.03.18](https://yckwon2nd.blogspot.com/2015/03/java8-permanent.html)