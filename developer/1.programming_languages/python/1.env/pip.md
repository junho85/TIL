# pip

## ubuntu 에서 pip 설치 방법
https://askubuntu.com/questions/778052/installing-pip3-for-python3-on-ubuntu-16-04-lts-using-a-proxy

python3-pip 설치

아래 처럼 안 될 수도 있음.
```bash
$ sudo apt install python3-pip
Reading package lists... Done
Building dependency tree
Reading state information... Done
E: Unable to locate package python3-pip
```

get-pip.py 스크립트를 이용해서 설치 하는 방법은 아래 (get-pip.py 스크립트로 설치 방법) 내용을 참고 한다.

## get-pip.py 스크립트로 설치 방법
https://pip.pypa.io/en/stable/installing/

```bash
$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
$ python3 get-pip.py --user
```