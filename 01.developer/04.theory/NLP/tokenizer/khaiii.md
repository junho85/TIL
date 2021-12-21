# khaiii

https://github.com/kakao/khaiii

## installation
https://github.com/kakao/khaiii/wiki/%EB%B9%8C%EB%93%9C-%EB%B0%8F-%EC%84%A4%EC%B9%98

```
git clone https://github.com/kakao/khaiii.git
cd khaiii
mkdir build
cd build
cmake ..
make all
make resource
```

## 테스트
```
./bin/khaiii --rsc-dir=./share/khaiii
[2019-08-19 14:29:34.752] [Resource] [info] NN model loaded
[2019-08-19 14:29:34.753] [Preanal] [info] preanal dictionary opened
[2019-08-19 14:29:34.754] [ErrPatch] [info] errpatch dictionary opened
[2019-08-19 14:29:34.754] [Restore] [info] restore dictionary opened
[2019-08-19 14:29:34.754] [Resource] [info] PoS tagger opened
오늘은 또 무슨 일이 있을까?
오늘은	오늘/NNG + 은/JX
또	또/MAG
무슨	무슨/MM
일이	일/NNG + 이/JKS
있을까?	있/VV + 을까/EF + ?/SF
```

```
ctest
```

```
make package_python
```

```
cd package_python
pip install  . 
```
pip 가 python2 를 바라보면 pip3

```
cd ..
cd ..
python
```
역시 python 이 python2 이면 python3 로 한다.

```python
from khaiii import KhaiiiApi
api = KhaiiiApi()
for word in api.analyze('오늘은 또 무슨 일이 있을까?'):
    print(word)
```

```
$ python3
Python 3.7.3 (default, Mar 27 2019, 09:23:15)
[Clang 10.0.1 (clang-1001.0.46.3)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> from khaiii import KhaiiiApi
>>> api = KhaiiiApi()
>>> for word in api.analyze('오늘은 또 무슨 일이 있을까?'):
...     print(word)
...
오늘은	오늘/NNG + 은/JX
또	또/MAG
무슨	무슨/MM
일이	일/NNG + 이/JKS
있을까?	있/VV + 을까/EF + ?/SF
```

## References
* [카카오 형태소 분석기 Khaiii 설치방법 2019.05.08](https://provia.tistory.com/56)