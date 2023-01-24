# GCD - Greatest Common Divisor. 최대공약수
GCM - Greatest Common Measure라고도 합니다.

공약수는 두 개 이상의 자연수가 공통으로 갖는 약수입니다.

예를 들어 4의 약수는 1,2,4, 6의 약수는 1,2,3,6입니다. 공약수는 1,2입니다. 최대공약수는 공약수들 중 가장 큰 수인 2입니다.

참고로 서로소란 최대공약수가 1인 두 자연수를 서로소라고 합니다. 3과 4는 최대공약수가 1입니다. 그러므로 3과 4는 서로소입니다.

python에서 최대공약수를 구할 때 gcd함수를 이용할 수 있습니다.

```
>>> from math import gcd
>>> gcd(4, 6)
2
```

유클리드 호제법을 이용하여 gcd를 직접 구현할 수 있습니다.

```
def gcd_my(a, b):
    if b == 0:
        return a
    else:
        return gcd_my(b, a % b)
```

배열의 숫자들의 최대공약수를 구하고 싶다면 다음과 같은 함수를 구현해 볼 수 있습니다.

```
def gcd_array(arr):
    gcd_arr = None
    for i in range(len(arr)):
        if i == 0:
            gcd_arr = arr[i]
        else:
            gcd_arr = gcd(gcd_arr, arr[i])
    return gcd_arr

```

첫 번째 두 번째 숫자의 최대공약수를 구하고, 최대공약수와 세 번째 숫자의 최대공약수를 구하고, 최대공약수와 n번째 숫자의 최대공약수를 구하는 방식으로 반복문을 돌리면 됩니다.


## 정리
* [python - 최대공약수 구하기 2020.05.10](https://junho85.pe.kr/1535)

## References
* [Greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor)
* [[파이썬/수학] 파이썬으로 최대공약수 구하기 2018.06.25](https://okkam76.blog.me/221306562506)
* 필수 알고리즘 with 파이썬
```
유클리드 호제법은 컴퓨터 알고리즘 분야에서 최대공약수를 구할 때 거의 대부분 사용하는 알고리즘이다. 여기서 호제법이라는 용어로 인해 이 알고리즘이 어렵다고 생각할 수 있는데 호제법이란 2개의 수가 "서로 상대방을 나누어"구한다는 의미로 호제(서로 호, 나눌 제)라는 이름이 붙여졌다. 이 유클리드 호제법에 대한 알고리즘을 작성해보자. 
```
* [공약수와 최대공약수](http://study.zum.com/book/11525)
