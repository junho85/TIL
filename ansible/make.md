# ansible - make
* 2.1 버전에서 생긴 기능이다.
* file 파라미터는 2.5 부터 추가 되었다.

## Examples
```
- name: Build the default target
  make:
    chdir: /home/ubuntu/cool-project

- name: Run 'install' target as root
  make:
    chdir: /home/ubuntu/cool-project
    target: install
  become: yes

- name: Build 'all' target with extra arguments
  make:
    chdir: /home/ubuntu/cool-project
    target: all
    params:
      NUM_THREADS: 4
      BACKEND: lapack

- name: Build 'all' target with a custom Makefile
  make:
    chdir: /home/ubuntu/cool-project
    target: all
    file: /some-project/Makefile
```

## 2.1 미만 버전에서는
* shell 로 처리 한다.


## References
* [make – Run targets in a Makefile](https://docs.ansible.com/ansible/latest/modules/make_module.html