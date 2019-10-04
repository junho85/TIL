# ansible installation

## osx
```
$ brew install ansible
```

## python version

리모트 서버에는 ssh 로 접근이 가능 해야 하며 python 2.4 이상이 설치 되어 있어야 한다. 가급적 2.5 이상이 좋다. 2.4 를 사용한다면 python-simplejson 을 먼저 설치 해 주어야 한다.

### centos
```
ansible -i hosts prod --sudo -m raw -a "yum install -y python-simplejson"
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

## references
http://docs.ansible.com/ansible/intro_installation.html