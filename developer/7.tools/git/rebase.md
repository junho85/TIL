# git rebase
로컬 브랜치에서 작업할 때 히스토리를 정리하기 위해 rebase 를 사용한다.

## 주의
```
Push로 리모트에든 밖으로 내보낸 커밋에 대해서는 절대 Rebase 하지 말아야 한다.
```
from http://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0

## references
* http://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0
* http://dogfeet.github.io/articles/2012/git-merge-rebase.html
* https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history
* http://jeffkreeftmeijer.com/2010/the-magical-and-not-harmful-rebase/
* https://help.github.com/articles/about-git-rebase/
```
* Edit previous commit messages
* Combine multiple commits into one
* Delete or revert commits that are no longer necessary
```