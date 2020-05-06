# ssh

## known_hosts 관련
* 정리: [ssh known_hosts 등록. 처음 접속하는 호스트 yes/no 이슈 해결 2017.10.01](https://junho85.pe.kr/667)

### ssh known_hosts 등록

```
ssh-keyscan -t rsa -f hostlistfile >> ~/.ssh/known_hosts
```

### ssh 의 StrictHostKeyChecking=no
```
ssh -o StrictHostKeyChecking=no junho85.pe.kr
```

```
ssh -o StrictHostKeyChecking=no junho85.pe.kr whoami
```

### bash 스크립트로 여러 호스트 등록
```
#!/bin/bash
hosts=("junho85_1" "junho85_2" ... "junho85_99" )

for host in ${hosts[*]}; do
        ssh -o StrictHostKeyChecking=no $host echo $host
done
```

### ssh 설정 바꾸기. ~/.ssh/config
```
Host *
    StrictHostKeyChecking no
```

config 파일을 처음 만든경우 파일의 권한을 400 으로 바꾸어 주어야 한다.
```
sudo chmod 400 ~/.ssh/config
```


### References
* [How to disable strict host key checking in ssh?](https://askubuntu.com/questions/87449/how-to-disable-strict-host-key-checking-in-ssh)