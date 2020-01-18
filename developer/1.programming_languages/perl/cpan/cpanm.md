# App::cpanminus
* cpanm
* 그냥 cpan 과 무슨 차이?

## installation
```
cpan App::cpanminus
```

## 여러 perl modules 리스트 파일로 설치 하기
* install
```
cpanm < perlmodules
```

* 강제 설치
```
cpanm --force < perlmodules
```

* 시스템 perl 에 모듈 강제 설치
```
sudo cpanm --force < perlmodules
``` 