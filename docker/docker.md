# docker

## installation
docker toolbox 설치

## iterm 에서 docker 이용하기
```
eval "$(docker-machine env default)"
```
Docker Quickstart Terminal 한번 실행 시켜 준 후 해야 함. Docker Quickstart Terminal 실행 시 virtualbox 등을 실행 시켜 줌.
TODO virtualbox 만 실행시켜 주면 되는 거라면 Docker Quickstart Terminal 실행 없이도 가능 할 것 같음.

## docker image
### pull - 가져오기
```
docker pull ubuntu
docker pull perl
```

### images - 받은 이미지 확인 하기
```
docker images
```

### rmi - 받은 이미지 지우기
```
docker rmi image
```

### run - 실행 시키기
```
docker run -i -t --name test123 perl
docker run -i -t --name test123 perl /bin/bash
```

### exec - 실행중인 도커의 명령어 실행
```
docker exec -i -t test123 /bin/bash
```

### ps - 실행중인 도커 프로세스 확인
```
docker ps -a
```

### rm - 지우기
```
docker rm test123
```


## references
https://gist.github.com/junho85/ba9302eaee5a76b91aa3910cd73a8078