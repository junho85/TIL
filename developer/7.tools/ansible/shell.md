# shell

```
$ ansible dev -i hosts -m shell -a 'whoami'
```

## .bashrc 에 alias 등록해서 좀 더 간단하게 사용하기
전체 서버들에 명령 날리기
```
alias ash="ansible -i hosts -m shell -a"
```

```bash
$ ash "whoami"
```

만약 sandbox 그룹으로만 명령을 날리고 싶다면 아래와 같은 커맨드를 만들 수 있다.
```
alias ash-sandbox="ansible sandbox -i hosts -m shell -a"
```

```bash
$ ash-sandbox "whoami"
```
하지만 서버 그룹명을 제한해서 사용하는 경우에는 편리하지만 서버 그룹명이 여러가지로 늘어나면 한계가 생긴다.

그럴때는 아래와 같이 함수를 만들어서 사용하면 좋다. 이 역시 .bashrc 에 등록해서 사용하면 된다.
```
ash-hosts() {
  ansible $1 -i hosts -m shell -a "$2"
}
```

"abc" 라는 서버그룹에 "whoami" 라는 커맨드를 실행하는 명령이다.
```bash
$ ash-hosts abc "whoami"
```

