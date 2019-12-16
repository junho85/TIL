# file

## mode
설정 디렉토리 접근을 막기 위해 실행권한을 제거 하는 예제. (root 계정으로만 접근 가능해짐)
```
- name: mode conf directory
  file:
    path: /some/conf
    mode: 0600
```

## delete
state 를 absent 로 하면 삭제 됩니다. 파일이나 디렉토리 모두 가능합니다.
```
- name: delete /some/directory
  file:
    state: absent
    path: /some/directory
```

여러 파일을 지우고 싶을때는 with_items 를 사용합니다.
```
- name: delete some files in /some/directory
  file:
    state: absent
    path: /some/directory/{{ item }}
  with_items:
    - del1
    - del2
    - del3
```