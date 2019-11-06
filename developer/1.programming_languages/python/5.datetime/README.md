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