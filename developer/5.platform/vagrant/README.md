# vagrant
* https://www.vagrantup.com/

## installation
* [installation](installation.md)

## vagrant cloud
* [cloud](cloud.md)

## Vagrantfile
```
$ vagrant init
```
실행하면 Vagrantfile 이 생성됨



## references
* [Vagrant](http://sourabhbajaj.com/mac-setup/Vagrant/README.html)
https://atlas.hashicorp.com/boxes/search?utm_source=vagrantcloud.com&vagrantcloud=1
* [Vagrant를 이용한 개발환경 관리(간단한 VM관리) 2013.10.24](http://bcho.tistory.com/806)
* [How to Install VirtualBox on macOS using Homebrew](https://www.code2bits.com/how-to-install-virtualbox-on-macos-using-homebrew/)
```
$ brew update                           # Fetch latest version of homebrew and formula.
$ brew tap caskroom/cask                # Tap the Caskroom/Cask repository from Github using HTTPS.
$ brew search virtualbox                # Searches all known Casks for a partial or exact match.
$ brew cask info virtualbox             # Displays information about the given Cask
$ brew cask install virtualbox          # Install the given cask.
$ brew cleanup                          # Remove any older versions from the cellar.
```
* [Install Virtualbox && Vagrant for MacOSX](https://gist.github.com/tomysmile/0618f1aa16341706940ed36b423b431c)
```
$ brew cask install virtualbox
$ brew cask install vagrant
$ brew cask install vagrant-manager

# 이건 진행이 안됨.
$ vagrant box add precise64 http://files.vagrantup.com/precise64.box

$ vagrant init precise64
$ vagrant up
$ vagrant ssh
$ vagrant halt
```
* [Getting Started -> Boxes](https://www.vagrantup.com/intro/getting-started/boxes.html)
```
$ vagrant box add hashicorp/precise64
```