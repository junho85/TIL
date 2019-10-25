# zsh
* linux 뿐 아니라 osx 등도 해당 되는 내용 입니다.

## zsh 설치
* osx catalina 부터는 기본 zsh (이전에는 bash)
* 하지만 바꿔줄 수 있음. chsh

## antigen
* zsh 관련 설정 설치에 antigen 이 유용함.
```
brew install antigen
```

## oh my zsh 설치

## theme
### bullet-train
* https://github.com/caiogondim/bullet-train.zsh




## zsh-autosuggestions
* tab 누르지 않아도 자동으로 명령어를 추천해 준다. 선택은 화살표 위 키를 누른다.
* https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md

```
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

플러그인에 추가
```
plugins=(zsh-autosuggestions)
```

터미널을 새로 연다.

## zsh-syntax-highlighting
* 커맨드에 syntax 색상을 먹여 줍니다.
* https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md

```
brew install zsh-syntax-highlighting
```

or

```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
echo "source ${(q-)PWD}/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
```

## autojump
* https://github.com/wting/autojump

```
brew install autojump
```

## iterm
https://draculatheme.com/iterm/


## References
* [나의 커맨드라인 인터페이스 2017.02.05](https://hyunseob.github.io/2017/02/05/my-command-line-interface/)