# c - osx environment

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

## References
* [Resolving missing link to libcrypto/openssl on OSX](https://gist.github.com/aklap/e885721ef15c8668ed0a1dd64d2ea1a7)
* [Homebrew refusing to link OpenSSL](https://stackoverflow.com/questions/38670295/homebrew-refusing-to-link-openssl)