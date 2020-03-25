# Installation
## OSX
[Tomcat Connectors (mod_jk) Downloads](http://tomcat.apache.org/download-connectors.cgi) 에서 mod_jk소스를 받습니다.

```
$ wget http://mirror.apache-kr.org/tomcat/tomcat-connectors/jk/tomcat-connectors-1.2.48-src.tar.gz
$ tar xvfz tomcat-connectors-1.2.48-src.tar.gz
$ cd tomcat-connectors-1.2.48-src/native
```

configure 할 때는 apxs 경로를 지정해 주어야 합니다. apxs는 httpd가 설치된 경로에 있습니다. 경로가 생각나지 않으면 brew info httpd 로 확인해 봅니다.
```
$ ./configure --with-apxs=/usr/local/Cellar/httpd/2.4.41_1/bin/apxs
$ make
$ make install
```

make install 하면 mod_jk.so 경로가 나옵니다. 이 경로를 복사 해서 httpd.conf 에 넣어 주어야 합니다.
```
$ make install
Making install in common
make[1]: Nothing to be done for `install'.
Making install in apache-2.0

Installing files to Apache Modules Directory...
/usr/local/Cellar/httpd/2.4.41_1/bin/apxs -i mod_jk.la
/usr/local/opt/httpd/lib/httpd/build/instdso.sh SH_LIBTOOL='/usr/local/opt/apr/libexec/build-1/libtool' mod_jk.la /usr/local/lib/httpd/modules
/usr/local/opt/apr/libexec/build-1/libtool --mode=install install mod_jk.la /usr/local/lib/httpd/modules/
libtool: install: install .libs/mod_jk.so /usr/local/lib/httpd/modules/mod_jk.so
libtool: install: install .libs/mod_jk.lai /usr/local/lib/httpd/modules/mod_jk.la
libtool: install: install .libs/mod_jk.a /usr/local/lib/httpd/modules/mod_jk.a
libtool: install: chmod 644 /usr/local/lib/httpd/modules/mod_jk.a
libtool: install: ranlib /usr/local/lib/httpd/modules/mod_jk.a
chmod 755 /usr/local/lib/httpd/modules/mod_jk.so

Please be sure to arrange /usr/local/opt/httpd/conf/httpd.conf...

make[2]: Nothing to be done for `install-exec-am'.
make[2]: Nothing to be done for `install-data-am'.
```

### 설정
httpd.conf 에 바로 설정을 넣어도 되지만 설정 파일을 분리해서 설정하겠습니다.

mod_jk.conf
```
LoadModule jk_module /usr/local/lib/httpd/modules/mod_jk.so

JkLogLevel error
JkWorkersFile /usr/local/etc/httpd/mod_jk/workers.properties
JkLogFile     /usr/local/var/log/httpd/mod_jk.log
JkShmFile     /usr/local/var/log/httpd/jk-runtime-status
```
LoadModule 에는 아까 빌드한 mod_jk.so 경로를 넣어 줍니다.
workers.properties 파일은 httpd.conf 가 있는 위치에 mod_jk/workers.properties 를 만들어 주겠습니다.

workers.properties
```
worker.jkstatus.type=status

worker.list=local_worker
worker.local_worker.port=8009
worker.local_worker.host=localhost
worker.local_worker.type=ajp13
```

port는 8009로 했는데 tomcat 의 conf/server.xml 설정에서 AJP 프로토콜이 설정된 부분과 맞춰 주면 됩니다. 기본이 8009인데 포트가 충돌되면 바꿔주면 됩니다.
```
<Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />
```
