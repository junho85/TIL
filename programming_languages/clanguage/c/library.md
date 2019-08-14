# 라이브러리 library

## 정적라이브러리 Static Library
* 목적파일(object file)의 모음
* .a 확장자
* ar(archiver) 프로그램으로 만든다
* 다시 컴파일 하지 않아도 링크시킬 수 있어서 컴파일 시간을 줄여줌. (요즘은 컴파일이 옛날 만큼 느린편은 아니라 크게 신경 쓸 요소는 아님)
* 프로그램들에게 라이브러리 링크는 할 수 있게 해 주되, 소스코드를 공개 하지 않을때 유용
* 정적 라이브러리를 만들고나, 이미 존재하는 동적라이브러리에 오브젝트 파일츨 추가 하려면
```
$ ar rcs my_library.a file1.o file2.o
```
my_library.a 에 file1.o, file2.o 를 추가한다. my_library.a 가 없으면 만든다.

## 동적라이브러리 Shared Library (공유라이브러리 라고도 함)
* 프로그램이 시작할 때 적재되는 라이브러리
* 접두사 lib (저 수준의 C라이브러리는 lib 로 시작하지 않음.)
* 확장자 .so
* RedHat 계절은 라이브러리 탐색시에 /usr/local/lib 를 기본으로 포함하지 않는다



## References
* [2. 정적 라이브러리](https://wiki.kldp.org/HOWTO/html/Program-Library-HOWTO/static-libraries.html)
* [2. Static Libraries](http://tldp.org/HOWTO/Program-Library-HOWTO/static-libraries.html)