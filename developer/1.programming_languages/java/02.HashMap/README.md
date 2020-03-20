# Java - HashMap
HashMap은 Key와 Value로 구성된 데이터의 집합을 다루는 자료구조입니다. 

## Loop
다음과 같은 HashMap이 있을 때 전체 데이터를 출력하는 방법입니다.
```java
HashMap<String, Integer> map = new HashMap<>();
map.put("june", 12);
map.put("hello", 22);
map.put("world", 33);
```
참고로 Guava를 이용한 초기화는 다음과 같습니다.
```java
HashMap<String, Integer> map = Maps.newHashMap(); // Guava
```

### keySet
key 리스트를 이용해서 loop를 도는 방법입니다. 이 방법은 대부분의 언어들이 제공하기 때문에 알아두면 좋습니다.
```java
for (String key : map.keySet()) {
    System.out.println(key + ":" + map.get(key));
}
```

### entrySet
python의 .items() 처럼 key, value 쌍을 꺼내면서 loop를 돕니다.
```java
for (Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ":" + entry.getValue());
}
```

### iterator
```java
Iterator<Entry<String, Integer>> iterator = map.entrySet().iterator();
while (iterator.hasNext()) {
    Entry<String, Integer> entry = iterator.next();
    System.out.println(entry.getKey() + ":" + entry.getValue());
}
```

### forEach
```
map.forEach((key, value) -> System.out.println(key + ":" + value));
```
