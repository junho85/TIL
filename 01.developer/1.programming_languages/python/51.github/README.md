# python  - github api
* [PyGithub](https://pygithub.readthedocs.io/en/latest/index.html)

## access token 얻기


## 기본 코드
```
from github import Github

access_token = "..."
g = Github(base_url="https://github.com/api/v3", login_or_token=access_token)

repo = g.get_repo("junho85/TIL")
```

## Releases
* [pygithub create_git_release](https://pygithub.readthedocs.io/en/latest/github_objects/Repository.html#github.Repository.Repository.create_git_release)

```
tag = "v1.3.3"
name = "v1.3.3"
message = "이것저것 수정"
master = "master"
repo.create_git_release(tag=tag, name=name, message=message, target_commitish=master)
```

## Pull Requests
* [pygithub create_pull](https://pygithub.readthedocs.io/en/latest/github_objects/Repository.html#github.Repository.Repository.create_pull)

```python
title = 'PR 타이틀'
body = 'PR 내용'
base = 'master'
head = 'develop'
repo.create_pull(title=title, body=body, base=base, head=head)
```