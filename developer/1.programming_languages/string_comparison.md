# string comparison

## javascript
```
"aaa" === "aa" + "a" # true
"aaa" == "aa" + "a" # true
```

## python
```
>>> "aaa" == "aa" + "a"
True
```

## kotlin
```
"aaa" == "aa" + "a" // true
```

## java
```java
System.out.println("aaa" == "aa" + "a"); // true
```
java 는 String 객체가 따로 만들어 져서 false 가 나올 줄 알았는데 의외로 true

```
String a = "aaa";
String b = "aaa";
System.out.println(a == b); // true
```
이거도 true 라니... 자바 상수풀을 이용하기 떄문

```
public static void main(String[] args) {
    String a = "aaa";
    String b = "aaa";
}
```
를 ASM Byte Viewer 플러그인으로 보면 다음과 같이 나옴
```
  // access flags 0x9
  public static main([Ljava/lang/String;)V
   L0
    LINENUMBER 5 L0
    LDC "aaa"
    ASTORE 1
   L1
    LINENUMBER 6 L1
    LDC "aaa"
    ASTORE 2
```


```
String aa = new String("aaa");
String bb = new String("aaa");
System.out.println(aa == bb); // false
```
이건 false




## perl
```perl
print "aaa" eq "aa" . "a"; # 1
```
perl 에서 true 는 1 이다.
