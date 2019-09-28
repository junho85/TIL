# zip

## usage
```
$ zip
Copyright (c) 1990-2008 Info-ZIP - Type 'zip "-L"' for software license.
Zip 3.0 (July 5th 2008). Usage:
zip [-options] [-b path] [-t mmddyyyy] [-n suffixes] [zipfile list] [-xi list]
  The default action is to add or replace zipfile entries from list, which
  can include the special name - to compress standard input.
  If zipfile and list are omitted, zip compresses stdin to stdout.
  -f   freshen: only changed files  -u   update: only changed or new files
  -d   delete entries in zipfile    -m   move into zipfile (delete OS files)
  -r   recurse into directories     -j   junk (don't record) directory names
  -0   store only                   -l   convert LF to CR LF (-ll CR LF to LF)
  -1   compress faster              -9   compress better
  -q   quiet operation              -v   verbose operation/print version info
  -c   add one-line comments        -z   add zipfile comment
  -@   read names from stdin        -o   make zipfile as old as latest entry
  -x   exclude the following names  -i   include only the following names
  -F   fix zipfile (-FF try harder) -D   do not add directory entries
  -A   adjust self-extracting exe   -J   junk zipfile prefix (unzipsfx)
  -T   test zipfile integrity       -X   eXclude eXtra file attributes
  -y   store symbolic links as the link instead of the referenced file
  -e   encrypt                      -n   don't compress these suffixes
  -h2  show more help
```
이상한점은 분할압축 할 때 사용하는 -s 옵션이 설명에는 나오지 않습니다.

## password
```javascript
$ zip --encrypt archive.zip 1.txt 2.txt 3.txt
```

* 정리: [OSX - zip 커맨드로 암호가 걸어서 압축하기 2019.09.28](https://junho85.pe.kr/1443)

## 분할압축
3500MB 단위로 자르기
```
$ zip -s 3500m 20190927.zip *
```

* 정리: [OSX - zip 커맨드로 파일 분할압축하기 2019.09.28](https://junho85.pe.kr/1442)

## References
* [HowTo: Create a Password Protected ZIP File in Linux 2016.12.27](https://www.shellhacks.com/create-password-protected-zip-file-linux/)
* [맥에서 ZIP으로 압축 혹은 분할 압축하는 방법 2018.09.21](https://macinjune.com/all-posts/mac/tip/맥에서-zip으로-압축-혹은-분할-압축하는-방법/)
