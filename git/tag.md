# git tag

## 태그 추가
```bash
$ git tag v0.1.0
$ git tag v0.1.1
$ git tag v0.1.2
$ git tag v0.1.3
$ git tag v0.2.0
$ git tag v0.2.1
```

## 태그 조회
```bash
$ git tag
v0.1.0
v0.1.1
v0.1.2
v0.1.3
v0.2.0
v0.2.1
```

패턴에 맞는 태그 조회
```bash
$ git tag -l v0.1.*
v0.1.0
v0.1.1
v0.1.2
v0.1.3
```



## References
* [Tag 추가, 변경 및 삭제하기](http://minsone.github.io/git/git-addtion-and-modified-delete-tag)