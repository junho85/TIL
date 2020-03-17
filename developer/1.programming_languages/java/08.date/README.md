# java - date

## 남은 달, 일 확인하기
2020년 3월 17일은 2030년 3월 1일과 0개월 15일 차이납니다. java8 에서는 이를 쉽게 구할 수 있는 기능을 제공합니다.
```java
LocalDate startDate = LocalDate.of(2020, 3, 17);
LocalDate endDate = LocalDate.of(2030, 4, 1);

Period period = startDate.until(endDate);

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
