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
* immutable 하기 때문에 add 등의 조작은 할 수 없다.
```java
String[] array = {"1", "2", "3", "4"};
List<String> strings = Arrays.asList(array);
```

### new ArrayList<>(Arrays.asList(array))
* immutable 하지 않아서 add 등의 조작을 할 수 있다.
```java
String[] array = {"1", "2", "3", "4"};
List<String> strings = new ArrayList<>(Arrays.asList(array));
strings.add("5");
```

### Collections.addAll
* 빈 리스트 만들고 Collections 의 addAll 함수로 추가 하는 방법
```java
String[] array = {"1", "2", "3", "4"};
List<String> strings = new ArrayList<>();

Collections.addAll(strings, array);
strings.add("5");
```

추가된 값들은 뒤에 붙는다.
```java
List<String> strings = new ArrayList<String>() {{
    add("1");
}};

String[] array = {"2", "3", "4"};

Collections.addAll(strings, array);
```

## stream
* java 8 의 stream 이용방법
```java
String[] array = {"1", "2", "3", "4"};
List<String> strings = Arrays.stream(array).collect(Collectors.toList());
```

## References
* [HOW TO CONVERT ARRAY TO LIST IN JAVA 2017.02.27](https://www.codingeek.com/java/how-to-convert-array-to-list-in-java/)