# zsh
* linux 뿐 아니라 osx 등도 해당 되는 내용 입니다.

## zsh 설치
* [01.zsh_installation.md](01.zsh_installation.md)

## antigen
* zsh 관련 설정 설치에 antigen 이 유용함.

### installation
* [Installation](https://github.com/zsh-users/antigen/wiki/Installation)
```
brew install antigen
```

ubuntu
```
curl -L git.io/antigen > antigen.zsh
```
```
source ~/th-to-antigen/antigen.zsh
```

## oh my zsh 설치
* [02.oh-my-zsh](02.oh-my-zsh.md)

## theme
### bullet-train
* [bullet-train](21.bullet-train.md)


## zsh-autosuggestions
* [zsh-autosuggestions](zsh-autosuggestions.md)

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
* [autojump](https://github.com/wting/autojump)

osx
```
brew install autojump
```

```
git clone git://github.com/wting/autojump.git
cd autojump
./install.py
```

## iterm
https://draculatheme.com/iterm/


## References
* [나의 커맨드라인 인터페이스 2017.02.05](https://hyunseob.github.io/2017/02/05/my-command-line-interface/)