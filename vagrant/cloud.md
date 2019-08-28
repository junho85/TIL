# vagrant cloud
## ubuntu 12.04 precise 세팅 요약
```
$ vagrant init hashicorp/precise64
$ vagrant up
$ vagrant ssh
$ vagrant halt
```

hashicorp/precise64 에 관란 자세한 정보는 다음 링크에서 확인 할 수 있습니다.

https://app.vagrantup.com/hashicorp/boxes/precise64

Vagrantfile 내용이 다음과 같이 되어 있다고 하네요.
```
Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise64"
end
```

## 더 많은 vagrant box 들을 찾아 보려면
https://app.vagrantup.com/boxes/search 에서 찾아 볼 수 있습니다.

hashicorp 에서 올린 박스들은 https://app.vagrantup.com/hashicorp 에 있습니다.

## 정리
