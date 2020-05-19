# github - fork

## fork
* github 우측 상단 fork 버튼을 눌러서 fork 한다.

## original repo는 upstream, fork 딴 나의 repo 는 origin 으로
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


## References
* [Fork a repo](https://help.github.com/en/articles/fork-a-repo)
* [Syncing a fork](https://help.github.com/en/articles/syncing-a-fork)
