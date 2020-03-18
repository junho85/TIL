# java - date

## 남은 년, 개월, 일 확인하기
2020년 3월 17일은 2030년 3월 1일과 0개월 15일 차이납니다. java8 에서는 이를 쉽게 구할 수 있는 기능을 제공합니다.
```java
LocalDate startDate = LocalDate.of(2020, 3, 17);
LocalDate endDate = LocalDate.of(2030, 4, 1);

Period period = startDate.until(endDate);

assertThat(period.getYears()).isEqualTo(10);
assertThat(period.getMonths()).isEqualTo(0);
assertThat(period.getDays()).isEqualTo(15);
```

만약 yyyymmdd 포멧의 날짜를 이용하고 싶다면 DateTimeFormatter 를 함께 사용합니다.
```java
DateTimeFormatter someFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
LocalDate startDate = LocalDate.of(2020, 3, 17);
LocalDate endDate = LocalDate.parse("20300401", someFormatter);

Period period = startDate.until(endDate);

assertThat(period.getMonths()).isEqualTo(0);
assertThat(period.getDays()).isEqualTo(15);
```

## 남은 개월, 일 확인하기
오늘부터 특정일이 몇개월 며칠 남았는지 확인하는 방법니다. Java8의 LocalDate와 Period를 이용해서 코드를 작성하였습니다.
```java
LocalDate theDate = LocalDate.of(2030, 4, 1);
Period period = LocalDate.now().until(theDate);

System.out.println(period.getYears() * 12 + period.getMonths() + "개월");
System.out.println(period.getDays() + "일");
```

아래는 약간 응용해서 지정한 날을 기준으로 몇개월 며칠 남았는지 확인하는 코드입니다.
```java
LocalDate startDate = LocalDate.of(2020, 3, 17);
LocalDate endDate = LocalDate.of(2030, 4, 1);

Period period = startDate.until(endDate);

assertThat(period.getYears() * 12 + period.getMonths()).isEqualTo(120);
assertThat(period.getDays()).isEqualTo(15);
```

### 정리
* [Java - "x개월 x일 남았습니다" 구하기 2020.03.17](https://junho85.pe.kr/1476)

## D-Day 구하기
```
LocalDate startDate = LocalDate.of(2020, 3, 17);
LocalDate endDate = LocalDate.of(2020, 3, 18);

assertThat(Duration.between(startDate.atStartOfDay(), endDate.atStartOfDay()).toDays()).isEqualTo(1);
```

### References
* [Class LocalDate](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html)
