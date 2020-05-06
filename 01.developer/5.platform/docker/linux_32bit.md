# 32bit linux

## centos

### toopher/centos-i386:centos6
```
docker run -i -t --name test32 toopher/centos-i386:centos6 /bin/bash
```

### i386/centos
* 2019.11.26 이건 내부에서 yum 으로 패키지 설치 같은데 잘 안됨
* [i386/centos](https://hub.docker.com/r/i386/centos/)

```
docker pull i386/centos:6
docker pull i386/centos:7
```

```
docker run -i -t --name test32 i386/centos:6 /bin/bash
```

삭제
```
docker rm test32
```

