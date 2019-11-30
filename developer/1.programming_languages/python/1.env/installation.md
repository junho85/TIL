# python installation

## source build

### 3.7.5
```
wget https://www.python.org/ftp/python/3.7.5/Python-3.7.5.tgz
tar xvfz Python-3.7.5.tgz
cd Python-3.7.5
./configure && make && sudo make install
```
그런데 openssl 문제로 pip 가 제대로 동작하지 않는다. --with-openssl 옵션을 넣어봤는데도 잘 안되는거 같음. 방법을 좀 찾아 봐야 겠음.


## References
* [[Python] python3 설치 (소스 빌드하기)](https://oboki.net/workspace/programming/language/python/python-python3-%EC%84%A4%EC%B9%98-%EC%86%8C%EC%8A%A4-%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B0/)
* [Python 3.7 on CentOS 6](https://benad.me/blog/2018/07/17/python-3.7-on-centos-6/)