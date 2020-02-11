# NodeJS Installation
먼저 nvm (Node Version Manager) 설치 하고 nvm 으로 nodejs 설치하는게 편하다.

## nvm 설치
* [nvm](https://github.com/nvm-sh/nvm)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

osx 에서는 brew 를 이용해서 설치 할 수도 있다.
```
brew install nvm
```
* [](https://formulae.brew.sh/formula/nvm)

nvm 설치 하고 나면 ~/.zshrc 등 파일을 수정해 주라고 나오는데 따라 수정해준다.

## nodejs 설치
```
nvm install node # 최신 버전
```

```
nvm install 8.0.0 # 8.0.0 버전 설치
```