# osx c environment - openssl


## ld: library not found for -lcrypto



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
