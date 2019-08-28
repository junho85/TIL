# vagrant installation
virtualbox 가 필요 하기 때문에 virtualbox 를 먼저 설치 해 준다.
```
$ brew cask install virtualbox
```

설치가 잘 안되는 경우 기존에 설치된 virtualbox 관련 파일들 제거 해 본다.
```
$ brew cask zap virtualbox --force
```

설치 도중 System Extension Blocked 창이 뜨면

```
System Preferences → Security & Privacy → General
```
에서 아래쪽에 System software from developer "..." was blocked from loading 오른쪽에 "Allow" 눌러서 허용 해준다.

그렇지 않으면 다음과 같은 오류가 발생하면서 설치가 진행이 안된다. 
```
Error: Failure while executing; `/usr/bin/sudo -E -- env LOGNAME=junho85 USER=junho85 USERNAME=junho85 /usr/sbin/installer -pkg /usr/local/Caskroom/virtualbox/6.0.10,132072/VirtualBox.pkg -target /` exited with 1. Here's the output:
```

```
$ brew cask install vagrant
$ brew cask install vagrant-manager
```

## 정리
* [vagrant 설치 in OSX 2019.08.25](https://junho85.pe.kr/1426)
