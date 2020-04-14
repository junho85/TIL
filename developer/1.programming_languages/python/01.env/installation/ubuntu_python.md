# python installation - ubuntu

## apt 로 설치
되면 apt 로 설치 하는게 가장 편하다.
```
sudo apt install python3.7
```

```
$ python3.7 -V
Python 3.7.5
```

### 정리
* [정원사들 시즌5 python3.6 -> python3.7 업그레이드 2020.04.12](https://junho85.pe.kr/1504)

## source build ubuntu - 아직 미완성
openssl 먼저 설치? 그런데 openssl-dev 가 아니고 libssl-dev
```
$ sudo apt-get install libssl-dev
```

```
wget https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tgz
tar xvfz Python-3.7.6.tgz
cd Python-3.7.6
```

그냥 빌드 하면 pip 사용시 TLS/SSL 오류 발생한다.
```
pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.
```

configure 할 때 openssl 경로를 지정해준다.
```
./configure --prefix=/home/junho85/program/python/3.7.6 --with-openssl=/usr/bin/openssl
make && sudo make install
```

--with-openssl 옵션은 별 도움이 안된다.
```
$ ./pip3 install virtualenv
WARNING: pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.
Collecting virtualenv
  WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/virtualenv/
  WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/virtualenv/
  WARNING: Retrying (Retry(total=2, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/virtualenv/
  WARNING: Retrying (Retry(total=1, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/virtualenv/
  WARNING: Retrying (Retry(total=0, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/virtualenv/
  Could not fetch URL https://pypi.org/simple/virtualenv/: There was a problem confirming the ssl certificate: HTTPSConnectionPool(host='pypi.org', port=443): Max retries exceeded with url: /simple/virtualenv/ (Caused by SSLError("Can't connect to HTTPS URL because the SSL module is not available.")) - skipping
  ERROR: Could not find a version that satisfies the requirement virtualenv (from versions: none)
ERROR: No matching distribution found for virtualenv
WARNING: pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.
Could not fetch URL https://pypi.org/simple/pip/: There was a problem confirming the ssl certificate: HTTPSConnectionPool(host='pypi.org', port=443): Max retries exceeded with url: /simple/pip/ (Caused by SSLError("Can't connect to HTTPS URL because the SSL module is not available.")) - skipping
```


Modules/Setup.dist 파일을 먼저 수정 한다.
```
vi Modules/Setup.dist
```

다음과 같이 주석 해제
```
# Socket module helper for socket(2)
_socket socketmodule.c

# Socket module helper for SSL support; you must comment out the other
# socket line above, and possibly edit the SSL variable:
SSL=/usr/local/ssl
_ssl _ssl.c \
    -DUSE_SSL -I$(SSL)/include -I$(SSL)/include/openssl \
    -L$(SSL)/lib -lssl -lcrypto
```

/usr/local/ssl 경로가 존재 하지 않는다면 좀 신경을 써야 한다. 경로가 안맞으면 이렇게 빌드 해도 소용없다.

```
_socket socketmodule.c

# Socket module helper for SSL support; you must comment out the other
# socket line above, and possibly edit the SSL variable:
SSL=/usr/local/openssl
_ssl _ssl.c \
-DUSE_SSL -I$(SSL)/include -I$(SSL)/include/openssl \
-L$(SSL)/lib -lssl -lcrypto
```

## 기타 - enable shared 하면 LD_LIBRARY_PATH 설정 없이는 사용하기 불편해진다
```
./configure --prefix=/home/junho85/program/python/3.7.6 --with-openssl=/usr/bin/openssl --enable-shared
make && sudo make install
```

LD_LIBRARY_PATH 설정 필요함. --enable-shared

안하면
```
$ ./python3 -v
./python3: error while loading shared libraries: libpython3.7m.so.1.0: cannot open shared object file: No such file or directory
```

```
/home/junho85/program/python/3.7.6/lib
```


## References
* [[Python] python3 설치 (소스 빌드하기)](https://oboki.net/workspace/programming/language/python/python-python3-%EC%84%A4%EC%B9%98-%EC%86%8C%EC%8A%A4-%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B0/)
* [Python 3.7 on CentOS 6](https://benad.me/blog/2018/07/17/python-3.7-on-centos-6/)
