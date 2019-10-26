# ansible

* https://www.ansible.com/
* https://github.com/ansible/ansible


* ansible 에 대해
  * 기본 설명
  * 멱등성
* ansible 기본 사용법
  * installation
  * command
  * hosts (inventory)
* ansible playbook 활용법
  * yml 파일을 이용한 설정
  * variables
  * tags
* ansible 을 이용하여 배포해 보기
  * git clone
  * 배포
  * 재시작
* 심화
  * playbooks best practices
  * staging, production 등 구분
  * groups of groups
  * handlers
  * patterns
* tips
  * file 에 내용 추가
  * diff


## 발음
앤서블. 국가나 지역에 따라 발음을 조금씩 달리하기도 하는 듯. (2015년 기준으로 한국에서는 앤시블 이라고 많이 하는 편. 심지어 번역서에도 앤시블이라고 되어 있다.)

## 초시공간통신
SF 용어 중 ansible 이라는 단어가 사용됨 초시공간통신이라는 의미
참고: http://sfblog.tistory.com/199

실제로 그 ansible 과의 관련성이 있는지는 모르겠음


## group variables
* group_vars 디렉토리를 만들고 group_name 으로 된 파일을 만드는 방법
* hosts 에 [group_name:vars] 를 만드는 방법이 있음 (TODO 같은건지 확인 필요)

hosts 에 digital_ocean 추가

```
[digital_ocean]
...
```

group_vars/digital_ocean 에 설정을 추가 해 두면 기본 설정으로 인식함
```
mkdir group_vars
vi group_vars/digital_ocean
```

```
ansible_ssh_user: root
```

```
ansible all -i hosts -m script -a foo.sh -u root
```

에서 -u root 를 빼도 같음

```
ansible all -i hosts -m script -a foo.sh
```

hosts 에 다음과 같이 지정해 줄 수 있음 (TODO 같은건지 확인 필요)
```
[digital_ocean:vars]
ansible_ssh_user: root
```

## 원격 파일 복사

## with_items 활용

## 주의사항
* 권한 설정은 별도로 해 주어야 됨. 파일에 설정된 정보를 활용하지 않음.
* 날짜 정보가 바뀜. 하지만 알아서 비교 해 주기 때문에 신경 쓰지 않아도 됨

## 원격 디렉토리 생성
여기서도 with_items 를 활용하면 편리함

## 본격 배포

## git clone 및 build

## 참고자료
* [Ansible의 이해와 활용 - 김용환 카카오 2014.09.29](http://deview.kr/2014/session?seq=15)

http://www.ansible.com/

* Super-basic introduction to Ansible
https://www.youtube.com/watch?v=xew7CMkL7jY

* [Ansible 강대명님 2019.10.23](https://www.slideshare.net/charsyam2/ansible-185655090?fbclid=IwAR2kVN_miqWQutZC0o9ioGhEyRX0siM65Y3WgTkavUQ00i0eNEGhYnLDM88)