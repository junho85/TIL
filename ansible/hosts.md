# ansible hosts
* hosts 구분은 어떻게 하는 것이 좋을까?

## hosts 파일의 분리
* 파일로 구분한다

filename: dev
```
[hosts]
host-dev
```

filename: real
```
[hosts]
host-1
host-2
```

실행
```
ansible-playbook -i [dev|real]
```

## --extra-vars 의 사용
* 장점
  * hosts 파일 하나를 사용할 수 있음
* 단점
  * --extra-vars 옵션 사용 불편. yml 파일에 파라미터를 받는 방식을 사용 해야 함

hosts 내용은 다음과 같이 구성
```
[dev]
host-dev

[real]
host-1
host-2
```

main.yml
```
- hosts: '{{ hosts }}'
  ...
```

--extra-vars 로 구분
```
ansible-playbook ... --extra-vars=dev
```
