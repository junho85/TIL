# ansible - unarchive
```
- name: unarchive logstash
  unarchive: src=logstash-all-plugins-2.3.1.tar.gz dest=/program/
```

## 정리
* [ansible 로 hiredis 라이브러리 설치 하기](https://junho85.pe.kr/1410)
  * hiredis 설치하는 글인데 unarchive 도 함.