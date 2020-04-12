# python - date - str to timestamp

## YYYY-MM-DD to timestamp
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

## YYYY-MM-DDTHH:MM:SS+timezone e.g. 2020-04-08T14:18:39Z
```
strptime = datetime.strptime("2020-04-08T11:18:39+0900", "%Y-%m-%dT%H:%M:%S%z")
print(strptime.timetz()) # 11:18:39+09:00
print(strptime.tzname()) # UTC+09:00
print(strptime.timestamp()) # 1586312319.0
```

## strptime python 3.6, python 3.7 차이
3.7 에서는 YYYY-MM-DDTHH:MM:SSZ (e.g. 2020-04-12T23:04:51Z)를 파싱 할 수 있는데
```
$ python             
Python 3.7.6 (default, Dec 30 2019, 19:38:26) 
[Clang 11.0.0 (clang-1100.0.33.16)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> from datetime import datetime
>>> datetime.strptime("2020-04-12T23:04:51Z", "%Y-%m-%dT%H:%M:%S%z")
datetime.datetime(2020, 4, 12, 23, 4, 51, tzinfo=datetime.timezone.utc)
```

3.6 에서는 되지 않음.
```
$ python3
Python 3.6.8 (default, Oct  7 2019, 12:59:55)
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from datetime import datetime
>>> datetime.strptime("2020-04-12T23:04:51Z", "%Y-%m-%dT%H:%M:%S%z")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/_strptime.py", line 565, in _strptime_datetime
    tt, fraction = _strptime(data_string, format)
  File "/usr/lib/python3.6/_strptime.py", line 362, in _strptime
    (data_string, format))
ValueError: time data '2020-04-12T23:04:51Z' does not match format '%Y-%m-%dT%H:%M:%S%z'
```
