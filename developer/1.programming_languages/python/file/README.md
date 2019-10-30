# python - file
* open 함수로 파일을 열고 끝나면 close 함수로 닫습니다.
```
f = open('file.txt', 'r')
# file read code
f.close()
```

* open 함수는 파일명과 파일 모드를 지정할 수 있습니다.
* 파일모드는 rt (읽기모드. 텍스트) 가 기본입니다. 다음의 모드들을 조합해서 사용 할 수 있습니다.

* r - 읽기모드
* w - 쓰기모드. 기존에 파일이 있으면 내용 삭제
* x - 쓰기모드. 기존에 파일이 있으면 오류
* a - 쓰기모드. append. 뒤에 추가
* + - 읽기 쓰기 모드
* t - 텍스트 모드
* b - 바이너리 모드

## read

## readline

## readlines

## write
```
f = open('file.txt', 'w')
f.write("something")
f.close()
```

## References
* [파이썬 파일 열기(open), 파일 닫기(close)](https://withcoding.com/86)
* [04-3 파일 읽고 쓰기](https://wikidocs.net/26)