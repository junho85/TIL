# zip
## password
```javascript
$ zip --encrypt test.zip 1.txt 2.txt 3.txt
```

## 분할압축
3500MB 단위로 자르기
```
zip -s 3500m 20190927.zip *
```

## 7zip
installation
```
brew install p7zip
```

compress
```
7z a 20190927.zip 20190927.mp4
```
extract
```
7z x 20190927.zip 20190927.mp4
```

분할
```
7z a 20190927.zip 20190927.mp4 -v3500m
```


## References
* [HowTo: Create a Password Protected ZIP File in Linux 2016.12.27](https://www.shellhacks.com/create-password-protected-zip-file-linux/)
* [맥에서 ZIP으로 압축 혹은 분할 압축하는 방법 2018.09.21](https://macinjune.com/all-posts/mac/tip/맥에서-zip으로-압축-혹은-분할-압축하는-방법/)
* [mac OS에서 분할 압축 2018.10.18](https://knight76.tistory.com/entry/mac-OS%EC%97%90%EC%84%9C-%EB%B6%84%ED%95%A0-%EC%95%95%EC%B6%95)