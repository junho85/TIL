# java array

## array 초기화
이게 가장 간결해 보임
```java
String[] array = {"1", "2", "3", "4"};
```

문자열 배열 생성
```java
String[] array = new String[]{"1", "2", "3", "4"};
```

apache commons lang3 이용 방법
```java
String[] array = ArrayUtils.toArray("1", "2", "3", "4");
```

## array to list
### Arrays.asList
* 가장 무난한 방법이다.
```java
String[] array = {"1", "2", "3", "4"};
List<String> strings = Arrays.asList(array);
```

array 초기화 하는 다른 방법
```java
String[] array = new String[]{"1", "2", "3", "4"};
List<String> strings = Arrays.asList(array);
```

## References
* [HOW TO CONVERT ARRAY TO LIST IN JAVA 2017.02.27](https://www.codingeek.com/java/how-to-convert-array-to-list-in-java/)