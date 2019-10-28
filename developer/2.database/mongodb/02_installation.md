# mongodb - installation

## docker
```
docker run --name some-mongo -d mongo:tag
```

```
$ docker run --name mymongo -p 27017:27017 -d mongo
```

```
docker start mymongo
```

## mac os x - brew
```
brew tap mongodb/brew
brew install mongodb-community@4.2
```
2019.10.28 기준 4.2.0 이 설치 된다.

## References
* [mongo](https://hub.docker.com/_/mongo)
* [Docker에서 MongoDB 설치하기 2019.02.11](https://elfinlas.github.io/2019/02/11/docker-on-mongo/)
* [Install MongoDB Community Edition on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
```
brew tap mongodb/brew
brew install mongodb-community@4.2
```