# 정원사들 시즌5 python3.6 -> python3.7 업그레이드

## github commit 내역 확인 api
* [](https://api.github.com/repos/junho85/garden5/commits/7fc90ca7f2c923d90321523314ff877312113f64)

## python 3.7과 python 3.6의 strptime 동작 차이
3.7 YYYY-MM-DDTHH:MM:SSZ 파싱 가능
```
$ python             
Python 3.7.6 (default, Dec 30 2019, 19:38:26) 
[Clang 11.0.0 (clang-1100.0.33.16)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> from datetime import datetime
>>> datetime.strptime("2020-04-12T23:04:51Z", "%Y-%m-%dT%H:%M:%S%z")
datetime.datetime(2020, 4, 12, 23, 4, 51, tzinfo=datetime.timezone.utc)
```

3.6 YYYY-MM-DDTHH:MM:SSZ 파싱 안됨
```
$ python3
Python 3.6.8 (default, Oct  7 2019, 12:59:55)
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from datetime import datetime
>>> datetime.strptime("2020-04-12T23:04:51Z", "%Y-%m-%dT%H:%M:%S%z")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/_strptime.py", line 565, in _strptime_datetime
    tt, fraction = _strptime(data_string, format)
  File "/usr/lib/python3.6/_strptime.py", line 362, in _strptime
    (data_string, format))
ValueError: time data '2020-04-12T23:04:51Z' does not match format '%Y-%m-%dT%H:%M:%S%z'
```

## python 3.7
```
sudo apt install python3.7
```

## mod_wsgi
```
$ wget https://github.com/GrahamDumpleton/mod_wsgi/archive/4.7.1.tar.gz
$ tar xvfz 4.7.1.tar.gz
$ ./configure --with-python=/usr/bin/python3.7
$ make
$ sudo make install
```

```
$ sudo make install
/usr/bin/apxs2 -i -S LIBEXECDIR=/usr/lib/apache2/modules -n 'mod_wsgi' src/server/mod_wsgi.la
/usr/share/apache2/build/instdso.sh SH_LIBTOOL='/usr/share/apr-1.0/build/libtool' src/server/mod_wsgi.la /usr/lib/apache2/modules
/usr/share/apr-1.0/build/libtool --mode=install install src/server/mod_wsgi.la /usr/lib/apache2/modules/
libtool: install: install src/server/.libs/mod_wsgi.so /usr/lib/apache2/modules/mod_wsgi.so
libtool: install: install src/server/.libs/mod_wsgi.lai /usr/lib/apache2/modules/mod_wsgi.la
libtool: finish: PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin:/sbin" ldconfig -n /usr/lib/apache2/modules
----------------------------------------------------------------------
Libraries have been installed in:
   /usr/lib/apache2/modules

If you ever happen to want to link against installed libraries
in a given directory, LIBDIR, you must either use libtool, and
specify the full pathname of the library, or use the '-LLIBDIR'
flag during linking and do at least one of the following:
   - add LIBDIR to the 'LD_LIBRARY_PATH' environment variable
     during execution
   - add LIBDIR to the 'LD_RUN_PATH' environment variable
     during linking
   - use the '-Wl,-rpath -Wl,LIBDIR' linker flag
   - have your system administrator add LIBDIR to '/etc/ld.so.conf'

See any operating system documentation about shared libraries for
more information, such as the ld(1) and ld.so(8) manual pages.
----------------------------------------------------------------------
chmod 644 /usr/lib/apache2/modules/mod_wsgi.so
```

```
LoadModule wsgi_module "/usr/lib/apache2/modules/mod_wsgi.so"
```


## 정리
* [정원사들 시즌5 python3.6 -> python3.7 업그레이드 2020.04.12](https://junho85.pe.kr/1504)
