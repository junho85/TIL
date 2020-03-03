# time

## sleep
```python
import time

time.sleep(1)  # wait 1 second
```
* 소수점 가능


## 시간 측정
```python
import time

start = time.time()

# do something
time.sleep(1)  # wait 1 second

print(time.time() - start)  # end - start
```

result
```
5.00463080406189
```

### References
* [코드 실행시간 측정](https://www.opentutorials.org/module/2980/17436)
* [Python time sleep() Method](https://www.tutorialspoint.com/python/time_sleep.htm)