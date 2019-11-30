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


## SSL 오류 날 경우
```
$ pip3 install ansible
WARNING: pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.
Collecting ansible
  WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/ansible/
  WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'SSLError("Can't connect to HTTPS URL because the SSL module is not available.")': /simple/ansible/
...
  Could not fetch URL https://pypi.org/simple/ansible/: There was a problem confirming the ssl certificate: HTTPSConnectionPool(host='pypi.org', port=443): Max retries exceeded with url: /simple/ansible/ (Caused by SSLError("Can't connect to HTTPS URL because the SSL module is not available.")) - skipping
  ERROR: Could not find a version that satisfies the requirement ansible (from versions: none)
ERROR: No matching distribution found for ansible
WARNING: pip is configured with locations that require TLS/SSL, however the ssl module in Python is not available.
Could not fetch URL https://pypi.org/simple/pip/: There was a problem confirming the ssl certificate: HTTPSConnectionPool(host='pypi.org', port=443): Max retries exceeded with url: /simple/pip/ (Caused by SSLError("Can't connect to HTTPS URL because the SSL module is not available.")) - skipping
```

openssl 설치
```
sudo yum install openssl openssl-devel
```
해결 안됨.

소스코드의 Modules/Setup.dist 수정후 빌드? 해봤는데 안됨. 좀 더 알아 봐야 겠음.
```

```