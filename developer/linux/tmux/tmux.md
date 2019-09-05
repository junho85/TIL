# tmux
* terminal multiplexer
* 터미널 환경을 좀 더 편리하게 만들어 주는 유틸리티
* 원격서버에 tmux 세션을 만들어 두면 인터넷이 끊기더라도 tmux 세션에 접속하면 기존 작업을 이어 나갈 수 있다.
* 이러한 방식은 screen 이라는 유틸에서도 가능한데 tmux 는 훨씬더 강력한 기능들을 많이 제공한다.
* window - 윈도우를 여러개 띄워두고 서로 바꿔 가며 사용 할 수 있다. 요즘은 탭이라고 부르는게 더 적절해 보인다.
* pane - 윈도우 안에서 화면을 분할 할 수 있는데 각각의 화면을 pane 이라고 한다.

## tmux config 위치
```
~/.tmux.conf
```

## tmux 설정 reload
```
ctrl + b, :
:source-file ~/.tmux.conf
```

또는 쉘커맨드
```bash
$ tmux source-file ~/.tmux.conf
```

## 내가 사용 하는 설정
* 최신 설정은 https://gist.github.com/junho85/6313bed5c35dd0ad354701bcdff8ae5b#file-tmux-conf 를 참고 한다.
```
set -g mouse on

setw -g mode-keys vi

# Use Alt-arrow keys without prefix key to switch panes
bind -n M-Left select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up select-pane -U
bind -n M-Down select-pane -D

# Shift arrow to switch windows
bind -n S-Left  previous-window
bind -n S-Right next-window

# scrollback buffer size increase
set -g history-limit 100000

# change window order
bind-key -n C-S-Left swap-window -t -1
bind-key -n C-S-Right swap-window -t +1

# disable window name auto change
set-option -g allow-rename off

# bar color
set -g status-bg black
set -g status-fg white

# toggle pane title visibility
bind T run 'zsh -c "arr=( off top ) && tmux setw pane-border-status \${arr[\$(( \${arr[(I)#{pane-border-status}]} % 2 + 1 ))]}"'
# rename pane
bind t command-prompt -p "(rename-pane)" -I "#T" "select-pane -T '%%'"
```

## 설정 커맨드 의미
* set 는 set-option 의 줄임명령어이다. 각종 설정을 할 때 사용한다.
  * e.g. mouse, history-limit 등 설정 
* set -g 는 global 설정이다. -ga 를 하면 기존 설정에 추가 (append)
* setw 는 set-window-option 의 줄임명령어이다. window 설정과 관련된 설정을 할 때 사용한다.
  * e.g. mode-keys 등
* bind 는 ctrl + b 후 누르는 키와 명령을 연결할 때 사용한다.

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

## 설정 파일 직접 지정하기
tmux_june.conf 파일을 만들고 -f 옵션을 이용하면 다른 설정파일을 선택할 수 있다. (기본 설정 파일은 ~/.tmux.conf)
```bash
$ tmux -f tmux_june.conf
```

## 블로깅
* [tmux 설정, 사용법](http://junho85.pe.kr/320)

## References
* https://linux.die.net/man/1/tmux