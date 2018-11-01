# shell 프롬프트에 git branch 표시하기

* https://github.com/git/git/tree/master/contrib/completion 에서 관련 파일을 받을 수 있다.

```bash
cd ~
wget https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh -O .git-prompt.sh
```

~/.bashrc 파일 수정. PS1 보다 위에 아래 내용을 추가

```
source ~/.git-prompt.sh
```

PS1 설정에
```
$(__git_ps1)
```
추가

```bash
junho85@junho85:~/git_branch_test$ (my-branch) git checkout master
Switched to branch 'master'
junho85@junho85:~/git_branch_test$ (master)
```