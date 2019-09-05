# iterator

## next() 값이 없는 경우
### RuntimeException 이 발생한다
```java
String[] array = {};
List<String> strings = Arrays.asList(array);

System.out.println("test");
Iterator<String> iterator = strings.iterator();
System.out.println("test2");
System.out.println(iterator.next());
// java.util.NoSuchElementException - RuntimeException
System.out.println("test3"); // not executed
```

next() 에 값이 없는 경우 java.util.NoSuchElementException 라는 RuntimeException 이 발생한다.

### catch NoSuchElementException
살리고 싶다면 다음과 같이 try catch 로 NoSuchElementException 을 잡는다.
```java
Iterator<String> emptyIterator = getEmptyIterator();
try {
    // java.util.NoSuchElementException - RuntimeException
    System.out.println(emptyIterator.next());
} catch (NoSuchElementException e) {
    System.out.println(e.getMessage()); // null
    System.out.println(e.getCause()); // null
}
```

### hasNext
일반적으로 hasNext() 로 다음 값이 있는지 검사 하면서 loop 를 돌린다.
```java
Iterator<String> emptyIterator = getEmptyIterator();
while (emptyIterator.hasNext()) {
    String str = emptyIterator.next();
    System.out.println(str);
}

// 1,2,3
Iterator<String> notEmptyIterator = getNotEmptyIterator();
while (notEmptyIterator.hasNext()) {
    String str = notEmptyIterator.next();
    System.out.println(str);
}
```

### References
* https://airbrake.io/blog/java-exception-handling/nosuchelementexception