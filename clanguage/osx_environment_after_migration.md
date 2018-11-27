# OSX C Development Environment After Migration
* 맥북 데이터를 다른 맥북으로 이관 후 C 개발 환경이 깨졌는데 다시 설정하는 과정을 기록하였다.
* 상황은 기존 맥북을 수리 맡기면서 임시 맥북으로 데이터 이전하였다.
* 이후 임시 맥북에서 수리되고 돌아온 기존 맥북으로 데이터 이전하였다.
* 개발툴은 clion 을 사용하고 있다.

## c 컴파일러 찾지 못하는 문제
* clion 에서 기존 프로젝트를 열어 보면 c 컴파일러를 찾지 못한다.. "/Library/Developer/CommandLineTools/usr/bin/cc" 없다고 나온다.
* xcode 실행하면 Install additional required components? 라고 물어 보고 뭔가 설치 하는데 이거로는 해결은 안된다.
* 구글링을 해 보면 보통 `xcode-select --install` 를 해 보라는 말들이 보인다. 터미널을 열고 커맨드를 입력 하면 뭔가 설치 한다.
* `/Library/Developer/CommandLineTools/usr/bin/cc` 가 생긴 것을 확인 할 수 있다.
* Reload CMake Project 해 보면 c 컴파일러를 잘 찾는 것을 확인 할 수 있다.

## c 공용 라이브러리 찾지 못하는 문제
* stdio.h 등의 파일에 빨간 줄이 생긴다.
* Mojave 업그레이드 이후 stdio.h 등 기본 header 를 못찾게 되는 이슈가 있는데 이건 아래 방식으로 패키지를 설치 해 주면 된다.
```
cd /Library/Developer/CommandLineTools/Packages/
open macOS_SDK_headers_for_macOS_10.14.pkg
```
* /usr/include 경로에 공통 header 파일 등이 설치 된다.

* 참고: [osx - Mojave 업그레이드 후 stdio.h 등 기본 header 파일을 찾지 못하게 된 것 해결.](http://junho85.pe.kr/1111)

## 만약 * stdio.h 를 못찾는 건 아닌데 printf 를 못찾는다면 
* 이건 보통 아주 특수한 경우인데 다른 c 개발자가 쓰던 컴퓨터에 데이터를 옮긴 경우에 발생한 적이 있다.
* 프로젝트 문제인가 해서 hello world 프로젝트 만들어봤지만 프로젝트 문제는 아니었다.
* 아래처럼 메시지가 나온다.
```
In file included from /Users/junho85/CLionProjects/hello/main.c:1:
/usr/local/include/stdio.h:27:10: fatal error: 'isc/lang.h' file not found
#include <isc/lang.h>
         ^~~~~~~~~~~~
1 error generated.
```
* /usr/local/include 에 직접 이런 저런 라이브러리를 직접 설치한 경우이다. 직접 설치한 라이브러리에 참조하는 파일들을 찾지 못해서 생긴 문제이다.

* /usr/include 에는 정상적인 라이브러리들이 있지만 /usr/local/include 가 우선순위가 높아서 /usr/include 가 후순위로 밀려 버리기 때문이다.
* /usr/local/include 에 있는 직접 설치된 라이브러리들을 수작업으로 지워 주면 된다. (임시 장비로 옮길 때 완전 초기화를 해주었다면 생기지 않았을 문제이다. 가급적 임시장비로 옮긴다면 깨끗한 장비로 옮기자)
* 다만 /usr/local/include 에는 내가 직접 설치한 라이브러리들도 있는데 필요하다면 그냥 직접 다시 설치 해 주는게 속 편할 수도 있다.
* 나의 경우 보통 brew 로 설치 한 것들이 대부분인데 이것들은 심볼릭 링크로 걸려 있는 방식이다.
* 처음에는 하나하나 직접 옮겨 주다가 (stdio.h, stdlib.h 등등) 결국 심볼릭 링크가 아닌 녀석들을 다 mv 시켰다.

test.sh
```bash
for x in *; do
  if ! [ -L "$x" ]; then mv -- $x bak; fi
done
```

* 일부 라이브러리들은 심볼릭링크가 아닌게 살아 남아 있어서 내가 설치한 라이브러리가 연결이 깨진 경우가 있는데, 그런 경우 링크만 새로 만들기도 귀찮고 하니 지우고 새로 설치 하였다.

기존거
```
lrwxr-xr-x 1 junho85 30 Nov 24  2017 openssl -> ../opt/openssl/include/openssl
```

참고해서 만들어 줄 까 하다가 그냥 새로 설치 하였다.

```
$ brew install openssl
```



### 이동 기록
* 일단 /usr/local/include/bak 폳러에 stdbool.h stdio.h stdlib.h string.h 옮김.
* c++ 에 오류 나서 cstdfloat.hpp cstdint.hpp cstdlib.hpp cstr.h 옮김
* 다른 것들 옮긴 기록
```
type.hpp
algorithm
iterator
assert.hpp static_assert.hpp assertions.h
iostreams
utility utility.hpp
type_traits type_traits.hpp
v1 v2 v3
str*
```

심볼릭 링크가 아닌 파일들을 모두 이동 시킴

기존 컴퓨터 상태를 기록 해 두었다. 모두 심볼릭링크가 걸려 있다. 옮긴 장비에서 심볼릭 링크가 아닌 것들은 일단 다 필요 없다고 보면 되었었다.
```
/usr/local/include $ ll -h
total 0
lrwxr-xr-x 1 junho85 38 Jan 23  2018 GeoIP.h -> ../Cellar/geoip/1.6.12/include/GeoIP.h
lrwxr-xr-x 1 junho85 42 Jan 23  2018 GeoIPCity.h -> ../Cellar/geoip/1.6.12/include/GeoIPCity.h
lrwxr-xr-x 1 junho85 31 Oct  4 17:21 R.h -> ../Cellar/r/3.5.0_1/include/R.h
lrwxr-xr-x 1 junho85 33 Oct  4 17:21 R_ext -> ../Cellar/r/3.5.0_1/include/R_ext
lrwxr-xr-x 1 junho85 37 Oct  4 17:21 Rconfig.h -> ../Cellar/r/3.5.0_1/include/Rconfig.h
lrwxr-xr-x 1 junho85 38 Oct  4 17:21 Rdefines.h -> ../Cellar/r/3.5.0_1/include/Rdefines.h
lrwxr-xr-x 1 junho85 39 Oct  4 17:21 Rembedded.h -> ../Cellar/r/3.5.0_1/include/Rembedded.h
lrwxr-xr-x 1 junho85 40 Oct  4 17:21 Rinterface.h -> ../Cellar/r/3.5.0_1/include/Rinterface.h
lrwxr-xr-x 1 junho85 40 Oct  4 17:21 Rinternals.h -> ../Cellar/r/3.5.0_1/include/Rinternals.h
lrwxr-xr-x 1 junho85 35 Oct  4 17:21 Rmath.h -> ../Cellar/r/3.5.0_1/include/Rmath.h
lrwxr-xr-x 1 junho85 38 Oct  4 17:21 Rversion.h -> ../Cellar/r/3.5.0_1/include/Rversion.h
lrwxr-xr-x 1 junho85 31 Oct  4 17:21 S.h -> ../Cellar/r/3.5.0_1/include/S.h
lrwxr-xr-x 1 junho85 38 Jul  2 18:26 ares.h -> ../Cellar/c-ares/1.14.0/include/ares.h
lrwxr-xr-x 1 junho85 44 Jul  2 18:26 ares_build.h -> ../Cellar/c-ares/1.14.0/include/ares_build.h
lrwxr-xr-x 1 junho85 42 Jul  2 18:26 ares_dns.h -> ../Cellar/c-ares/1.14.0/include/ares_dns.h
lrwxr-xr-x 1 junho85 44 Jul  2 18:26 ares_rules.h -> ../Cellar/c-ares/1.14.0/include/ares_rules.h
lrwxr-xr-x 1 junho85 46 Jul  2 18:26 ares_version.h -> ../Cellar/c-ares/1.14.0/include/ares_version.h
lrwxr-xr-x 1 junho85 42 Mar 29  2018 argon2.h -> ../Cellar/argon2/20171227/include/argon2.h
lrwxr-xr-x 1 junho85 44 Mar 29  2018 aspell.h -> ../Cellar/aspell/0.60.6.1_1/include/aspell.h
lrwxr-xr-x 1 junho85 43 Aug 24 22:00 autotest.h -> ../Cellar/unixodbc/2.3.7/include/autotest.h
lrwxr-xr-x 1 junho85 38 Jul  2 18:31 bind9 -> ../Cellar/bind/9.12.1-P2/include/bind9
lrwxr-xr-x 1 junho85 44 Aug 24 22:00 bkpublic.h -> ../Cellar/freetds/1.00.94/include/bkpublic.h
lrwxr-xr-x 1 junho85 38 Jul  2 18:27 boost -> ../Cellar/boost/1.67.0_1/include/boost
lrwxr-xr-x 1 junho85 37 Jul  2 18:30 brotli -> ../Cellar/brotli/1.0.5/include/brotli
lrwxr-xr-x 1 junho85 31 Oct  4 17:21 c++ -> ../Cellar/gcc/8.1.0/include/c++
lrwxr-xr-x 1 junho85 44 Aug 24 22:00 cspublic.h -> ../Cellar/freetds/1.00.94/include/cspublic.h
lrwxr-xr-x 1 junho85 43 Aug 24 22:00 cstypes.h -> ../Cellar/freetds/1.00.94/include/cstypes.h
lrwxr-xr-x 1 junho85 44 Aug 24 22:00 ctpublic.h -> ../Cellar/freetds/1.00.94/include/ctpublic.h
lrwxr-xr-x 1 junho85 36 Jul  2 18:31 dns -> ../Cellar/bind/9.12.1-P2/include/dns
lrwxr-xr-x 1 junho85 36 Jul  2 18:31 dst -> ../Cellar/bind/9.12.1-P2/include/dst
lrwxr-xr-x 1 junho85 35 Nov 23  2017 ev++.h -> ../Cellar/libev/4.24/include/ev++.h
lrwxr-xr-x 1 junho85 33 Nov 23  2017 ev.h -> ../Cellar/libev/4.24/include/ev.h
lrwxr-xr-x 1 junho85 40 Nov 23  2017 evdns.h -> ../Cellar/libevent/2.1.8/include/evdns.h
lrwxr-xr-x 1 junho85 40 Nov 23  2017 event.h -> ../Cellar/libevent/2.1.8/include/event.h
lrwxr-xr-x 1 junho85 39 Nov 23  2017 event2 -> ../Cellar/libevent/2.1.8/include/event2
lrwxr-xr-x 1 junho85 41 Nov 23  2017 evhttp.h -> ../Cellar/libevent/2.1.8/include/evhttp.h
lrwxr-xr-x 1 junho85 40 Nov 23  2017 evrpc.h -> ../Cellar/libevent/2.1.8/include/evrpc.h
lrwxr-xr-x 1 junho85 41 Nov 23  2017 evutil.h -> ../Cellar/libevent/2.1.8/include/evutil.h
lrwxr-xr-x 1 junho85 46 Jul  4 11:57 fontconfig -> ../Cellar/fontconfig/2.13.0/include/fontconfig
lrwxr-xr-x 1 junho85 42 Jul  2 18:27 freetype2 -> ../Cellar/freetype/2.9.1/include/freetype2
lrwxr-xr-x 1 junho85 38 Sep  2 22:57 ftdi.h -> ../Cellar/libftdi0/0.20/include/ftdi.h
lrwxr-xr-x 1 junho85 42 Jul  2 18:29 gcrypt.h -> ../Cellar/libgcrypt/1.8.3/include/gcrypt.h
lrwxr-xr-x 1 junho85 29 Jul  2 17:52 gdb -> ../Cellar/gdb/8.1/include/gdb
lrwxr-xr-x 1 junho85 34 Aug 24 22:00 gdbm.h -> ../Cellar/gdbm/1.18/include/gdbm.h
lrwxr-xr-x 1 junho85 46 Oct  4 17:21 ghostscript -> ../Cellar/ghostscript/9.24/include/ghostscript
lrwxr-xr-x 1 junho85 44 Oct  4 17:21 gio-unix-2.0 -> ../Cellar/glib/2.58.0_1/include/gio-unix-2.0
lrwxr-xr-x 1 junho85 40 Oct  4 17:21 glib-2.0 -> ../Cellar/glib/2.58.0_1/include/glib-2.0
lrwxr-xr-x 1 junho85 35 Mar 29  2018 gmp.h -> ../Cellar/gmp/6.1.2_2/include/gmp.h
lrwxr-xr-x 1 junho85 37 Mar 29  2018 gmpxx.h -> ../Cellar/gmp/6.1.2_2/include/gmpxx.h
lrwxr-xr-x 1 junho85 38 Apr 12  2018 gnutls -> ../Cellar/gnutls/3.5.18/include/gnutls
lrwxr-xr-x 1 junho85 47 Jul  2 18:29 gpg-error.h -> ../Cellar/libgpg-error/1.31/include/gpg-error.h
lrwxr-xr-x 1 junho85 43 Jul  2 18:29 gpgrt.h -> ../Cellar/libgpg-error/1.31/include/gpgrt.h
lrwxr-xr-x 1 junho85 44 Apr 12  2018 gsasl-compat.h -> ../Cellar/gsasl/1.8.0/include/gsasl-compat.h
lrwxr-xr-x 1 junho85 42 Apr 12  2018 gsasl-mech.h -> ../Cellar/gsasl/1.8.0/include/gsasl-mech.h
lrwxr-xr-x 1 junho85 37 Apr 12  2018 gsasl.h -> ../Cellar/gsasl/1.8.0/include/gsasl.h
lrwxr-xr-x 1 junho85 40 Nov 24  2017 hiredis -> ../Cellar/hiredis/0.13.3/include/hiredis
lrwxr-xr-x 1 junho85 36 Jul  2 18:30 httpd -> ../Cellar/httpd/2.4.33/include/httpd
lrwxr-xr-x 1 junho85 38 Jul  2 18:42 idn2.h -> ../Cellar/libidn2/2.0.5/include/idn2.h
lrwxr-xr-x 1 junho85 36 Jul  2 18:31 irs -> ../Cellar/bind/9.12.1-P2/include/irs
lrwxr-xr-x 1 junho85 36 Jul  2 18:31 isc -> ../Cellar/bind/9.12.1-P2/include/isc
lrwxr-xr-x 1 junho85 38 Jul  2 18:31 isccc -> ../Cellar/bind/9.12.1-P2/include/isccc
lrwxr-xr-x 1 junho85 39 Jul  2 18:31 isccfg -> ../Cellar/bind/9.12.1-P2/include/isccfg
lrwxr-xr-x 1 junho85 30 Aug 30 13:15 isl -> ../Cellar/isl/0.20/include/isl
lrwxr-xr-x 1 junho85 40 Jul  2 18:26 jansson.h -> ../Cellar/jansson/2.11/include/jansson.h
lrwxr-xr-x 1 junho85 47 Jul  2 18:26 jansson_config.h -> ../Cellar/jansson/2.11/include/jansson_config.h
lrwxr-xr-x 1 junho85 35 Jul  2 17:39 jconfig.h -> ../Cellar/jpeg/9c/include/jconfig.h
lrwxr-xr-x 1 junho85 41 Jul  2 18:27 jemalloc -> ../Cellar/jemalloc/5.1.0/include/jemalloc
lrwxr-xr-x 1 junho85 34 Jul  2 17:39 jerror.h -> ../Cellar/jpeg/9c/include/jerror.h
lrwxr-xr-x 1 junho85 36 Jul  2 17:39 jmorecfg.h -> ../Cellar/jpeg/9c/include/jmorecfg.h
lrwxr-xr-x 1 junho85 35 Jul  2 17:39 jpeglib.h -> ../Cellar/jpeg/9c/include/jpeglib.h
lrwxr-xr-x 1 junho85 31 Jul  2 18:31 jq.h -> ../Cellar/jq/1.5_3/include/jq.h
lrwxr-xr-x 1 junho85 31 Jul  2 18:31 jv.h -> ../Cellar/jq/1.5_3/include/jv.h
lrwxr-xr-x 1 junho85 41 Apr 19  2018 lcms2.h -> ../Cellar/little-cms2/2.9/include/lcms2.h
lrwxr-xr-x 1 junho85 48 Apr 19  2018 lcms2_plugin.h -> ../Cellar/little-cms2/2.9/include/lcms2_plugin.h
lrwxr-xr-x 1 junho85 55 Oct  4 19:11 ldap.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ldap.h
lrwxr-xr-x 1 junho85 41 Mar 29  2018 libltdl -> ../Cellar/libtool/2.4.6_1/include/libltdl
lrwxr-xr-x 1 junho85 40 Aug 24 22:00 libpng16 -> ../Cellar/libpng/1.6.35/include/libpng16
lrwxr-xr-x 1 junho85 42 Jan 23  2018 libtasn1.h -> ../Cellar/libtasn1/4.13/include/libtasn1.h
lrwxr-xr-x 1 junho85 42 Sep  2 22:57 libusb-1.0 -> ../Cellar/libusb/1.0.22/include/libusb-1.0
lrwxr-xr-x 1 junho85 40 Mar 29  2018 ltdl.h -> ../Cellar/libtool/2.4.6_1/include/ltdl.h
lrwxr-xr-x 1 junho85 33 Jul  2 18:29 lua -> ../Cellar/lua/5.3.4_4/include/lua
lrwxr-xr-x 1 junho85 41 Oct  4 17:21 lua-5.1 -> ../Cellar/lua@5.1/5.1.5_8/include/lua-5.1
lrwxr-xr-x 1 junho85 40 Oct  4 17:21 lua5.1 -> ../Cellar/lua@5.1/5.1.5_8/include/lua5.1
lrwxr-xr-x 1 junho85 36 Jul  2 18:29 lua5.3 -> ../Cellar/lua/5.3.4_4/include/lua5.3
lrwxr-xr-x 1 junho85 41 Apr 26  2018 luajit-2.0 -> ../Cellar/luajit/2.0.5/include/luajit-2.0
lrwxr-xr-x 1 junho85 31 Jul  2 18:27 lzma -> ../Cellar/xz/5.2.4/include/lzma
lrwxr-xr-x 1 junho85 33 Jul  2 18:27 lzma.h -> ../Cellar/xz/5.2.4/include/lzma.h
lrwxr-xr-x 1 junho85 41 Apr 12  2018 mailutils -> ../Cellar/mailutils/3.4/include/mailutils
lrwxr-xr-x 1 junho85 48 Jul  2 18:31 maxminddb.h -> ../Cellar/libmaxminddb/1.3.2/include/maxminddb.h
lrwxr-xr-x 1 junho85 55 Jul  2 18:31 maxminddb_config.h -> ../Cellar/libmaxminddb/1.3.2/include/maxminddb_config.h
lrwxr-xr-x 1 junho85 36 Jul  2 18:28 mpc.h -> ../Cellar/libmpc/1.1.0/include/mpc.h
lrwxr-xr-x 1 junho85 39 Jul  2 18:27 mpf2mpfr.h -> ../Cellar/mpfr/4.0.1/include/mpf2mpfr.h
lrwxr-xr-x 1 junho85 35 Jul  2 18:27 mpfr.h -> ../Cellar/mpfr/4.0.1/include/mpfr.h
lrwxr-xr-x 1 junho85 39 Jul  2 18:31 msgpack -> ../Cellar/msgpack/3.0.1/include/msgpack
lrwxr-xr-x 1 junho85 41 Jul  2 18:31 msgpack.h -> ../Cellar/msgpack/3.0.1/include/msgpack.h
lrwxr-xr-x 1 junho85 43 Jul  2 18:31 msgpack.hpp -> ../Cellar/msgpack/3.0.1/include/msgpack.hpp
lrwxr-xr-x 1 junho85 35 Nov 27  2017 nettle -> ../Cellar/nettle/3.4/include/nettle
lrwxr-xr-x 1 junho85 40 Oct  4 17:20 nghttp2 -> ../Cellar/nghttp2/1.33.0/include/nghttp2
lrwxr-xr-x 1 junho85 36 Jul  2 17:16 node -> ../Cellar/node/10.5.0_1/include/node
lrwxr-xr-x 1 junho85 35 Jul  2 18:31 ns -> ../Cellar/bind/9.12.1-P2/include/ns
lrwxr-xr-x 1 junho85 58 Oct  4 19:11 nzerror.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/nzerror.h
lrwxr-xr-x 1 junho85 54 Oct  4 19:11 nzt.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/nzt.h
lrwxr-xr-x 1 junho85 55 Oct  4 19:11 occi.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/occi.h
lrwxr-xr-x 1 junho85 57 Oct  4 19:11 occiAQ.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/occiAQ.h
lrwxr-xr-x 1 junho85 61 Oct  4 19:11 occiCommon.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/occiCommon.h
lrwxr-xr-x 1 junho85 62 Oct  4 19:11 occiControl.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/occiControl.h
lrwxr-xr-x 1 junho85 59 Oct  4 19:11 occiData.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/occiData.h
lrwxr-xr-x 1 junho85 62 Oct  4 19:11 occiObjects.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/occiObjects.h
lrwxr-xr-x 1 junho85 54 Oct  4 19:11 oci.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/oci.h
lrwxr-xr-x 1 junho85 55 Oct  4 19:11 oci1.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/oci1.h
lrwxr-xr-x 1 junho85 57 Oct  4 19:11 oci8dp.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/oci8dp.h
lrwxr-xr-x 1 junho85 56 Oct  4 19:11 ociap.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ociap.h
lrwxr-xr-x 1 junho85 57 Oct  4 19:11 ociapr.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ociapr.h
lrwxr-xr-x 1 junho85 57 Oct  4 19:11 ocidef.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ocidef.h
lrwxr-xr-x 1 junho85 57 Oct  4 19:11 ocidem.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ocidem.h
lrwxr-xr-x 1 junho85 57 Oct  4 19:11 ocidfn.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ocidfn.h
lrwxr-xr-x 1 junho85 58 Oct  4 19:11 ociextp.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ociextp.h
lrwxr-xr-x 1 junho85 57 Oct  4 19:11 ocikpr.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ocikpr.h
lrwxr-xr-x 1 junho85 59 Oct  4 19:11 ocixmldb.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ocixmldb.h
lrwxr-xr-x 1 junho85 61 Oct  4 19:11 ocixstream.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ocixstream.h
lrwxr-xr-x 1 junho85 43 Aug 24 22:00 odbcinst.h -> ../Cellar/unixodbc/2.3.7/include/odbcinst.h
lrwxr-xr-x 1 junho85 46 Aug 24 22:00 odbcinstext.h -> ../Cellar/unixodbc/2.3.7/include/odbcinstext.h
lrwxr-xr-x 1 junho85 42 Aug 24 22:00 odbcss.h -> ../Cellar/freetds/1.00.94/include/odbcss.h
lrwxr-xr-x 1 junho85 55 Oct  4 19:11 odci.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/odci.h
lrwxr-xr-x 1 junho85 43 Jul  2 18:30 oniggnu.h -> ../Cellar/oniguruma/6.8.2/include/oniggnu.h
lrwxr-xr-x 1 junho85 45 Jul  2 18:30 onigposix.h -> ../Cellar/oniguruma/6.8.2/include/onigposix.h
lrwxr-xr-x 1 junho85 45 Jul  2 18:30 oniguruma.h -> ../Cellar/oniguruma/6.8.2/include/oniguruma.h
lrwxr-xr-x 1 junho85 30 Nov 24  2017 openssl -> ../opt/openssl/include/openssl
lrwxr-xr-x 1 junho85 59 Oct  4 19:11 oratypes.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/oratypes.h
lrwxr-xr-x 1 junho85 54 Oct  4 19:11 ori.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ori.h
lrwxr-xr-x 1 junho85 55 Oct  4 19:11 orid.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/orid.h
lrwxr-xr-x 1 junho85 54 Oct  4 19:11 orl.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/orl.h
lrwxr-xr-x 1 junho85 54 Oct  4 19:11 oro.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/oro.h
lrwxr-xr-x 1 junho85 54 Oct  4 19:11 ort.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/ort.h
lrwxr-xr-x 1 junho85 43 Jul  2 18:31 p11-kit-1 -> ../Cellar/p11-kit/0.23.12/include/p11-kit-1
lrwxr-xr-x 1 junho85 34 Mar 29  2018 pcre.h -> ../Cellar/pcre/8.42/include/pcre.h
lrwxr-xr-x 1 junho85 42 Mar 29  2018 pcre_scanner.h -> ../Cellar/pcre/8.42/include/pcre_scanner.h
lrwxr-xr-x 1 junho85 46 Mar 29  2018 pcre_stringpiece.h -> ../Cellar/pcre/8.42/include/pcre_stringpiece.h
lrwxr-xr-x 1 junho85 37 Mar 29  2018 pcrecpp.h -> ../Cellar/pcre/8.42/include/pcrecpp.h
lrwxr-xr-x 1 junho85 40 Mar 29  2018 pcrecpparg.h -> ../Cellar/pcre/8.42/include/pcrecpparg.h
lrwxr-xr-x 1 junho85 39 Mar 29  2018 pcreposix.h -> ../Cellar/pcre/8.42/include/pcreposix.h
lrwxr-xr-x 1 junho85 33 Aug 24 22:00 php -> ../Cellar/php/7.2.9_1/include/php
lrwxr-xr-x 1 junho85 37 Jul  2 18:31 pk11 -> ../Cellar/bind/9.12.1-P2/include/pk11
lrwxr-xr-x 1 junho85 39 Jul  2 18:31 pkcs11 -> ../Cellar/bind/9.12.1-P2/include/pkcs11
lrwxr-xr-x 1 junho85 37 Aug 24 22:00 png.h -> ../Cellar/libpng/1.6.35/include/png.h
lrwxr-xr-x 1 junho85 41 Aug 24 22:00 pngconf.h -> ../Cellar/libpng/1.6.35/include/pngconf.h
lrwxr-xr-x 1 junho85 44 Aug 24 22:00 pnglibconf.h -> ../Cellar/libpng/1.6.35/include/pnglibconf.h
lrwxr-xr-x 1 junho85 42 Mar 29  2018 pspell -> ../Cellar/aspell/0.60.6.1_1/include/pspell
lrwxr-xr-x 1 junho85 41 Mar 29  2018 sodium -> ../Cellar/libsodium/1.0.16/include/sodium
lrwxr-xr-x 1 junho85 43 Mar 29  2018 sodium.h -> ../Cellar/libsodium/1.0.16/include/sodium.h
lrwxr-xr-x 1 junho85 41 Nov 23  2017 spdylay -> ../Cellar/spdylay/1.4.0_1/include/spdylay
lrwxr-xr-x 1 junho85 38 Aug 24 22:00 sql.h -> ../Cellar/unixodbc/2.3.7/include/sql.h
lrwxr-xr-x 1 junho85 41 Aug 24 22:00 sqldb.h -> ../Cellar/freetds/1.00.94/include/sqldb.h
lrwxr-xr-x 1 junho85 41 Aug 24 22:00 sqlext.h -> ../Cellar/unixodbc/2.3.7/include/sqlext.h
lrwxr-xr-x 1 junho85 44 Aug 24 22:00 sqlfront.h -> ../Cellar/freetds/1.00.94/include/sqlfront.h
lrwxr-xr-x 1 junho85 41 Aug 24 22:00 sqlspi.h -> ../Cellar/unixodbc/2.3.7/include/sqlspi.h
lrwxr-xr-x 1 junho85 43 Aug 24 22:00 sqltypes.h -> ../Cellar/unixodbc/2.3.7/include/sqltypes.h
lrwxr-xr-x 1 junho85 43 Aug 24 22:00 sqlucode.h -> ../Cellar/unixodbc/2.3.7/include/sqlucode.h
lrwxr-xr-x 1 junho85 41 Aug 24 22:00 sybdb.h -> ../Cellar/freetds/1.00.94/include/sybdb.h
lrwxr-xr-x 1 junho85 44 Aug 24 22:00 syberror.h -> ../Cellar/freetds/1.00.94/include/syberror.h
lrwxr-xr-x 1 junho85 44 Aug 24 22:00 sybfront.h -> ../Cellar/freetds/1.00.94/include/sybfront.h
lrwxr-xr-x 1 junho85 53 Aug 24 22:00 tds_sysdep_public.h -> ../Cellar/freetds/1.00.94/include/tds_sysdep_public.h
lrwxr-xr-x 1 junho85 43 Apr 26  2018 termkey.h -> ../Cellar/libtermkey/0.20/include/termkey.h
lrwxr-xr-x 1 junho85 40 Jul  4 11:57 tiff.h -> ../Cellar/libtiff/4.0.9_4/include/tiff.h
lrwxr-xr-x 1 junho85 44 Jul  4 11:57 tiffconf.h -> ../Cellar/libtiff/4.0.9_4/include/tiffconf.h
lrwxr-xr-x 1 junho85 42 Jul  4 11:57 tiffio.h -> ../Cellar/libtiff/4.0.9_4/include/tiffio.h
lrwxr-xr-x 1 junho85 44 Jul  4 11:57 tiffio.hxx -> ../Cellar/libtiff/4.0.9_4/include/tiffio.hxx
lrwxr-xr-x 1 junho85 44 Jul  4 11:57 tiffvers.h -> ../Cellar/libtiff/4.0.9_4/include/tiffvers.h
lrwxr-xr-x 1 junho85 45 Apr 26  2018 unibilium.h -> ../Cellar/unibilium/2.0.0/include/unibilium.h
lrwxr-xr-x 1 junho85 47 Jul  2 18:28 unicase.h -> ../Cellar/libunistring/0.9.10/include/unicase.h
lrwxr-xr-x 1 junho85 47 Jul  2 18:28 uniconv.h -> ../Cellar/libunistring/0.9.10/include/uniconv.h
lrwxr-xr-x 1 junho85 48 Jul  2 18:28 unictype.h -> ../Cellar/libunistring/0.9.10/include/unictype.h
lrwxr-xr-x 1 junho85 47 Jul  2 18:28 unigbrk.h -> ../Cellar/libunistring/0.9.10/include/unigbrk.h
lrwxr-xr-x 1 junho85 47 Jul  2 18:28 unilbrk.h -> ../Cellar/libunistring/0.9.10/include/unilbrk.h
lrwxr-xr-x 1 junho85 47 Jul  2 18:28 uniname.h -> ../Cellar/libunistring/0.9.10/include/uniname.h
lrwxr-xr-x 1 junho85 47 Jul  2 18:28 uninorm.h -> ../Cellar/libunistring/0.9.10/include/uninorm.h
lrwxr-xr-x 1 junho85 48 Jul  2 18:28 unistdio.h -> ../Cellar/libunistring/0.9.10/include/unistdio.h
lrwxr-xr-x 1 junho85 46 Jul  2 18:28 unistr.h -> ../Cellar/libunistring/0.9.10/include/unistr.h
lrwxr-xr-x 1 junho85 47 Jul  2 18:28 unistring -> ../Cellar/libunistring/0.9.10/include/unistring
lrwxr-xr-x 1 junho85 48 Jul  2 18:28 unitypes.h -> ../Cellar/libunistring/0.9.10/include/unitypes.h
lrwxr-xr-x 1 junho85 47 Jul  2 18:28 uniwbrk.h -> ../Cellar/libunistring/0.9.10/include/uniwbrk.h
lrwxr-xr-x 1 junho85 48 Jul  2 18:28 uniwidth.h -> ../Cellar/libunistring/0.9.10/include/uniwidth.h
lrwxr-xr-x 1 junho85 48 Aug 24 22:00 unixodbc_conf.h -> ../Cellar/unixodbc/2.3.7/include/unixodbc_conf.h
lrwxr-xr-x 1 junho85 47 Aug 24 22:00 uodbc_extras.h -> ../Cellar/unixodbc/2.3.7/include/uodbc_extras.h
lrwxr-xr-x 1 junho85 46 Aug 24 22:00 uodbc_stats.h -> ../Cellar/unixodbc/2.3.7/include/uodbc_stats.h
lrwxr-xr-x 1 junho85 45 Sep  2 22:57 usb.h -> ../Cellar/libusb-compat/0.1.5_1/include/usb.h
lrwxr-xr-x 1 junho85 33 Oct  4 17:21 uv -> ../Cellar/libuv/1.23.0/include/uv
lrwxr-xr-x 1 junho85 35 Oct  4 17:21 uv.h -> ../Cellar/libuv/1.23.0/include/uv.h
lrwxr-xr-x 1 junho85 38 Apr 26  2018 vterm.h -> ../Cellar/libvterm/681/include/vterm.h
lrwxr-xr-x 1 junho85 47 Apr 26  2018 vterm_keycodes.h -> ../Cellar/libvterm/681/include/vterm_keycodes.h
lrwxr-xr-x 1 junho85 33 Jul  2 18:28 webp -> ../Cellar/webp/1.0.0/include/webp
lrwxr-xr-x 1 junho85 43 Jul  2 18:42 wireshark -> ../Cellar/wireshark/2.6.1/include/wireshark
lrwxr-xr-x 1 junho85 53 Oct  4 19:11 xa.h -> ../Cellar/instantclient-sdk/12.2.0.1.0-2/include/xa.h
lrwxr-xr-x 1 junho85 36 Jul  2 18:29 zip.h -> ../Cellar/libzip/1.5.1/include/zip.h
lrwxr-xr-x 1 junho85 40 Jul  2 18:29 zipconf.h -> ../Cellar/libzip/1.5.1/include/zipconf.h
```