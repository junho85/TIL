# github - fork

## fork
* github 우측 상단 fork 버튼을 눌러서 fork 한다.

## original repo 는 upstream, fork 딴 나의 repo 는 origin 으로
```
git remote add upstream <original repo>
```

origin 지우려면
```
git remote remove origin
```

나의 repo 를 origin 으로 등록
```
git remote add origin <my repo>
```

## sync
### fetch upstream
```
git fetch upstream
```

### merge upstream/master to local master
```
git merge upstream/master
```

## mirroring. duplicating. copy repository
* fork 를 하면 검색이 안되는 문제가 있음. 검색할 때 fork 옵션 넣는 방법도 있다고 하는데 잘 안되는 경우가 있음.
* fork 말고 그냥 복제를 해야 되는데 기본 기능으로 제공하고 있지 않음. mirroring 을 해야됨.
* bare clone 하고 mirror push
```
$ git clone --bare https://github.com/exampleuser/old-repository.git
$ cd old-repository.git
$ git push --mirror https://github.com/exampleuser/new-repository.git
$ cd ..
$ rm -rf old-repository.git
```

## References
* [Fork a repo](https://help.github.com/en/articles/fork-a-repo)
* [Syncing a fork](https://help.github.com/en/articles/syncing-a-fork)
* [Duplicating a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository)