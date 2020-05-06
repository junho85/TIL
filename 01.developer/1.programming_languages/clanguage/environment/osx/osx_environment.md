# c - osx environment

## image not found
```
/Users/junho85/CLionProjects/some-project/cmake-build-debug/libs/test/test_something
dyld: Library not loaded: libsomething.1.dylib
  Referenced from: /Users/junho85/CLionProjects/some-project/cmake-build-debug/libs/test/test_something
  Reason: image not found
```
DYLD_LIBRARY_PATH 에 라이브러리 경로를 적어주면 될 거 같은데 안되는 경우는 그냥 /usr/local/lib 에 심볼릭 링크를 걸어준다.
```
cd /usr/local/lib
ln -s /mylib/lib/libsomething.1.dylib .
```

## References
* [Resolving missing link to libcrypto/openssl on OSX](https://gist.github.com/aklap/e885721ef15c8668ed0a1dd64d2ea1a7)
* [Homebrew refusing to link OpenSSL](https://stackoverflow.com/questions/38670295/homebrew-refusing-to-link-openssl)
