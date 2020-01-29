# openssl installation

```
brew install openssl
```

lib 심볼릭 링크
```
ln -s /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib /usr/local/lib/
ln -s /usr/local/opt/openssl/lib/libssl.1.0.0.dylib /usr/local/lib/
```

include 심볼릭 링크
```
ln -s /usr/local/opt/openssl/include/openssl /usr/local/include/
```
