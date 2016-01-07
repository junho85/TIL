# ansible

## 발음
앤서블. 국가나 지역에 따라 발음을 조금씩 달리하기도 하는 듯. (2015년 기준으로 한국에서는 앤시블 이라고 많이 하는 편)

## 초시공간통신
SF 용어 중 ansible 이라는 단어가 사용됨 초시공간통신이라는 의미
참고: http://sfblog.tistory.com/199

실제로 그 ansible 과의 관련성이 있는지는 모르겠음


## installation
osx brew
```
brew install ansible
```

## command
```
ansible dev -i hosts -m command -a "uptime" -u root
^dev^prod
ansible prod -i hosts -m command -a "uptime" -u root
^prod^all
ansible all -i hosts -m command -a "uptime" -u root
```

foo.sh 작성
```
ansible all -i hosts -m script -a foo.sh -u root
```

## group_vars
hosts 에 digital_ocean 추가

```
[digital_ocean]
...
```

group_vars/digital_ocen 에 설정을 추가 해 두면 기본 설정으로 인식함
```
mkdir group_vars
vi group_vars/digital_ocean
```

```
---
ansible_ssh_user: root
```

```
ansible all -i hosts -m script -a foo.sh -u root
```

에서 -u root 를 빼도 같음

```
ansible all -i hosts -m script -a foo.sh
```

## 참고자료
http://deview.kr/2014/session?seq=15

http://www.ansible.com/

* Super-basic introduction to Ansible
https://www.youtube.com/watch?v=xew7CMkL7jY