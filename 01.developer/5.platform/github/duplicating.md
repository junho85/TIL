# github - mirroring. duplicating. copy repository
git repository를 복제 할 때 일반적으로 그냥 fork를 하면 됩니다. 하지만 fork는 아닌데 통째로 복제 하고 싶은 경우가 있습니다. 내용은 그대로 복제 하면서 독립적인 repository를 구성하는 경우 입니다.

github에서는 fork를 하면 검색이 안되는 문제가 있습니다. 검색할 때 fork 옵션 넣는 방법도 있다고 하는데 잘 안되는 경우가 있습니다.
fork 말고 그냥 복제를 해야 되는데 기본 기능으로 제공하고 있지 않습니다. mirroring을 해야됩니다.
방법은 bare clone 하고 mirror push 입니다.

```
$ git clone --bare https://github.com/someuser/old-repository.git
$ cd old-repository.git
$ git push --mirror https://github.com/someuser/new-repository.git
$ cd ..
$ rm -rf old-repository.git
```

## 정리
* [git repository 복제하기. fork 아님. mirror](https://junho85.pe.kr/1543)

## References
* [Duplicating a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository)
