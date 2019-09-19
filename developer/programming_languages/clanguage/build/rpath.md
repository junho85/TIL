# rpath - runtime library path
* 빌드할 때 동적라이브러리의 경로를 지정해 주는 것입니다.
```javascript
-Wl,-rpath,<dir>
```
Wl 은 뭐지?

## 참고
* /etc/ld.so.conf 수정하고 ldconfig 실행해서 전역적으로 지정하는 방법이 있음
* LD_LIBRARY_PATH 설정으로 유저별로 지정하는 방법이 있음

## References
* [What's the difference between -rpath and -L?](https://stackoverflow.com/questions/8482152/whats-the-difference-between-rpath-and-l)
* [–rpath 와 동적라이브러리 링킹 2010.11.14](https://charsyam.wordpress.com/2010/11/14/rpath-%EC%99%80-%EB%8F%99%EC%A0%81%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%A7%81%ED%82%B9/)