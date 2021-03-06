# openssl installation old version
요즘 (2020년 기준) openssl 을 brew 로 설치 하면 1.1.x 가 설치 됩니다. 레거시 시스템 개발시 1.0.x 를 사용해야 되는 경우가 종종 있는데 그럴때를 위해 1.0.x 설치 방법을 정리합니다.

## 1.0.2t brew 로 설치하기
```
brew install https://raw.githubusercontent.com/Homebrew/homebrew-core/8b9d6d688f483a0f33fcfc93d433de501b9c3513/Formula/openssl.rb
```

설치경로는
```
/usr/local/Cellar/openssl/1.0.2t
```

/usr/local/opt/openssl 에 심볼릭 링크 걸리는데 이건 다른 openssl 설치 하면 덮어 써 버린다.
```
/usr/local/opt/openssl -> ../Cellar/openssl/1.0.2t
```

덮어 써 져서 문제가 되는 경우 switch 로 바꿔가며 쓸 수 있다.
```
brew switch openssl 1.0.2t
```

2020.02.07
clion 에서 CMake 설정에 OPENSSL_ROOT_DIR 설정 해 주면 되는거 같더니 어느순간 안되어서 switch 해서 쓰고 있음.
그런데 이렇게 하면 또 python 개발 할 때 openssl 문제 생길거 같은데...


lib 심볼릭 링크. /usr/local/lib/ 에 심볼릭 링크를 걸어서 
```
ln -s /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib /usr/local/lib/
ln -s /usr/local/opt/openssl/lib/libcrypto.dylib /usr/local/lib/
ln -s /usr/local/opt/openssl/lib/libssl.1.0.0.dylib /usr/local/lib/
ln -s /usr/local/opt/openssl/lib/libssl.dylib /usr/local/lib/
```

include 심볼릭 링크
```
ln -s /usr/local/opt/openssl/include/openssl /usr/local/include/
```


## 1.0.x 직접 빌드
* [Old 1.0.2 Releases](https://www.openssl.org/source/old/1.0.2/)

* [OS X](https://wiki.openssl.org/index.php/Compilation_and_Installation#OS_X)

```
./Configure darwin64-x86_64-cc shared enable-ec_nistp_64_gcc_128 no-ssl2 no-ssl3 no-comp --openssldir=/usr/local/ssl/macos-x86_64
make depend
sudo make install
```

설치 경로
```
/usr/local/ssl/macos-x86_64
/usr/local/ssl/macos-x86_64/bin
/usr/local/ssl/macos-x86_64/lib
/usr/local/ssl/macos-x86_64/include/openssl
```

lib 심볼릭 링크
```
ln -s /usr/local/ssl/macos-x86_64/lib/libcrypto.1.0.0.dylib /usr/local/lib/
ln -s /usr/local/ssl/macos-x86_64/lib/libssl.1.0.0.dylib /usr/local/lib/

```

include 심볼릭 링크
```
ln -s /usr/local/ssl/macos-x86_64/include/openssl /usr/local/include/
```

## 정리
* [osx - openssl 개발환경 세팅 2017.12.13](https://junho85.pe.kr/731)