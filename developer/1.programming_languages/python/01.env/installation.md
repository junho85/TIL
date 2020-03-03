# python installation

## source build

### 3.7.5
```
wget https://www.python.org/ftp/python/3.7.5/Python-3.7.5.tgz
tar xvfz Python-3.7.5.tgz
cd Python-3.7.5
./configure && make && sudo make install
```
그런데 openssl 문제로 pip 가 제대로 동작하지 않는다. --with-openssl 옵션을 넣어봤는데도 잘 안되는거 같음. 방법을 좀 찾아 봐야 겠음.

### 3.6.4
```
wget https://www.python.org/ftp/python/3.6.4/Python-3.6.4.tar.xz
tar -xJf Python-3.6.4.tar.xz
cd Python-3.6.4
```
그냥 빌드 하면 pip 사용시 TLS/SSL 오류 발생한다.
```
pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.
```

파일을 먼저 수정 한다.
```
vi Modules/Setup.dist
```

다음과 같이 주석 해제
```
_socket socketmodule.c

# Socket module helper for SSL support; you must comment out the other
# socket line above, and possibly edit the SSL variable:
SSL=/usr/local/openssl
_ssl _ssl.c \
-DUSE_SSL -I$(SSL)/include -I$(SSL)/include/openssl \
-L$(SSL)/lib -lssl -lcrypto
```

환경에 따라 openssl 경로가 좀 달라질 수 있으니 상황에 맞게 수정이 필요 할 수도 있다.
```
-I/usr/local/include/openssl/
-L/usr/local/lib64
```

```
./configure
make
sudo make install
```

## References
* [[Python] python3 설치 (소스 빌드하기)](https://oboki.net/workspace/programming/language/python/python-python3-%EC%84%A4%EC%B9%98-%EC%86%8C%EC%8A%A4-%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B0/)
* [Python 3.7 on CentOS 6](https://benad.me/blog/2018/07/17/python-3.7-on-centos-6/)