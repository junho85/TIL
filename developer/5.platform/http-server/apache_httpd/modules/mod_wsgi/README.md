# mod_wsgi
* [](https://github.com/GrahamDumpleton/mod_wsgi)

## WSGI(Web Server Gateway Interface)
2003년 [PEP-333](https://www.python.org/dev/peps/pep-0333/)에서 규정되었다.

## module build
```
$ wget https://github.com/GrahamDumpleton/mod_wsgi/archive/4.7.1.tar.gz
$ tar xvfz 4.7.1.tar.gz
$ ./configure --with-python=/usr/bin/python3.7
$ make
$ sudo make install
```

## References
* [Web Server Gateway Interface](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface)
* [웹 서버 게이트웨이 인터페이스](https://ko.wikipedia.org/wiki/%EC%9B%B9_%EC%84%9C%EB%B2%84_%EA%B2%8C%EC%9D%B4%ED%8A%B8%EC%9B%A8%EC%9D%B4_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4)
