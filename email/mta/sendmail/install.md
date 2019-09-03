# sendmail installation

* https://ftp.sendmail.org/

8.15.2
```
wget https://ftp.sendmail.org/sendmail.8.15.2.tar.gz
tar xvfz sendmail.8.15.2.tar.gz
cd sendmail-8.15.2
./Build

```

2019.09.02 OSX 에서 빌드 하려니 버전 어쩌구 하면서 실패함.
```
/usr/include/AvailabilityInternal.h:50464:10: error: unterminated conditional directive
        #if __MAC_OS_X_VERSION_MIN_REQUIRED >= __MAC_10_10_3
         ^
```

## sendmail.cf 만들기
```
cd cf/cf
cp generic-linux.mc sendmail.mc
./Build sendmail.cf
```

## References
* [Ubuntu Sendmail 소스패키지 빌드하여 설치하기 2017.12.06](https://hit-it-sum.tistory.com/19)