# yum

## 설치된 특정 패키지 확인 하는 방법
yum list installed 하면 설치 된 패키지 리스트가 나타난다. 여기서 내가 찾으려고 하는 패키지명을 grep 하면 된다.
```bash
$ sudo yum list installed | grep exim
exim.i686                          4.89-1.el6                           @EPEL6
```

rpm 으로 확인 하고 싶다면
```bash
$ rpm -qa | grep exim
exim-4.63-10.el5
```

## References
* [Yum, yum 사용법](https://zetawiki.com/wiki/Yum,_yum_%EC%82%AC%EC%9A%A9%EB%B2%95)