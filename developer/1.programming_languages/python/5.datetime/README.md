# python - date

## yyyy-mm-dd to timestamp
* slack api 등 이용할 때 timestamp 값으로 바꿔줘야 될 때가 있다.
* yyyy-mm-dd 포멧의 날짜를 timestamp 로 바꾸는 방법이다.
```python
from datetime import datetime
oldest = datetime.strptime('2019-10-27', "%Y-%m-%d").timestamp()
latest = datetime.strptime('2019-11-01', "%Y-%m-%d").timestamp()
print(oldest, latest)
```

```
1572102000.0 1572534000.0
```

## daterange
```
import calendar
from datetime import timedelta, date


def daterange(start_date, end_date):
    for n in range(int((end_date - start_date).days)):
        yield start_date + timedelta(n)


start = date(2019, 10, 1)

c = calendar.HTMLCalendar(calendar.SUNDAY)
first = next(c.itermonthdates(start.year, start.month))

for idx, date in enumerate(daterange(first, date.today())):
    print(date, end=' ')
    if idx % 7 == 6:
        print()
```

```
2019-09-29 2019-09-30 2019-10-01 2019-10-02 2019-10-03 2019-10-04 2019-10-05 
2019-10-06 2019-10-07 2019-10-08 2019-10-09 2019-10-10 2019-10-11 2019-10-12 
2019-10-13 2019-10-14 2019-10-15 2019-10-16 2019-10-17 2019-10-18 2019-10-19 
2019-10-20 2019-10-21 2019-10-22 2019-10-23 2019-10-24 2019-10-25 2019-10-26 
2019-10-27 2019-10-28 2019-10-29 2019-10-30 2019-10-31 2019-11-01 2019-11-02 
2019-11-03 2019-11-04 2019-11-05 2019-11-06 2019-11-07 2019-11-08 2019-11-09 
2019-11-10 2019-11-11 2019-11-12 
```