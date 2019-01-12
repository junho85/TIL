# tmux

## how to change window number. change order
* window number 순으로 정렬이 되기 때문에 종종 순서를 바꿨으면 할 때가 있다.
* 예를 들어 0, 1, 2 window 가 생성 되어 있는데 0 번 윈도우를 제거 하면 1, 2 윈도우가 있는 상태이다.
* 이 때, 윈도우를 새로 생성하면 0 번으로 생성 된다.
* 2번 뒤에 만들고 싶었을 경우가 종종 있다. 이 때, 직접 window 번호를 바꿔주어야 한다.
* 커맨드 모드로 가서 move-window 기능을 이용해 주면 된다.
```
ctrl + b, :
:move-window -t 99
```