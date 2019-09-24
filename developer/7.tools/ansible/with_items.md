# ansible with_items
with_items 를 이용하면 반복되는 여러 작업을 손쉽게 처리 가능 함

```
- name: Make log directory
  file: path=/program/logs state=directory

- name: Make lib directory
  file: path=/program/lib state=directory

- name: Make bin directory
  file: path=/program/bin state=directory
```

```
- name: Make directories
  file: path=/program/{{ item }} state=directory
  with_items:
    - logs
    - lib
    - bin
```