# osx c environment - openssl

## openssl 1.0.x 설치 방법
어느순간 부터 brew install openssl 하면 1.1.x 가 설치 되고 있다. openssl@1.0 해도 안된다.

직접 빌드 해야 하나.

### 1.0.x 직접 빌드
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




## openssl
linking 과정에서 다음 오류 발생시
```
ld: cannot link directly with dylib/framework, your binary is not an allowed client of /usr/lib/libcrypto.dylib for architecture x86_64
```

```
brew update
brew remove openssl
brew install openssl
ln -s /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib /usr/local/lib/
ln -s /usr/local/opt/openssl/lib/libssl.1.0.0.dylib /usr/local/lib/
```

clion 사용시 프로젝트도 지우고 다시 불러 온다.


## 기타

openssl 1.1 이면
```
ln -s /usr/local/opt/openssl/lib/libcrypto.1.1.dylib /usr/local/lib/
ln -s /usr/local/opt/openssl/lib/libssl.1.1.dylib /usr/local/lib/
```


```
error: unknown type name 'des_key_schedule'; did you mean 'DES_key_schedule'
```
