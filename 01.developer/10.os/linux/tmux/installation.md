# tmux installation

## mac os x
```bash
$ brew install tmux
```

## linux
```bash
$ yum install tmux
```

## source code build
[tmux](https://github.com/tmux/tmux)

[Releases](https://github.com/tmux/tmux/releases) 에서 다운 받습니다.

### Download
```
wget https://github.com/tmux/tmux/releases/download/3.1b/tmux-3.1b.tar.gz
tar xvfz tmux-3.1b.tar.gz
cd tmux-3.1b/
```

전체 사용시
```bash
$ ./configure && make
$ sudo make install
```

나만 사용시
```
./configure --prefix=$HOME/tmux/
make
make install
```

### Dependencies
libevent, ncurses

configure를 할 때 의존관계인 라이브러리들이 없으면 오류가 발생합니다.
 
```
configure: error: "libevent not found"
```

```
sudo yum install libevent-devel
```

```
configure: error: "curses not found"
```
```
sudo yum install ncurses-devel
```

### path 설정
~/.bash_profile

```
$HOME/tmux/bin
```

## References
* [tmux 로컬에서 빌드하기 2012.03.07](https://blog.outsider.ne.kr/756)
