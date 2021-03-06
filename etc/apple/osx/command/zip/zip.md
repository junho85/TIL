# osx - zip
OSX에서는 Finder에서 바로 파일들을 압축할 수 있는 기능을 제공합니다. 하지만 단점도 있는데요. 분할 압축도 안되고 윈도우에서 압축을 풀면 __MACOSX어쩌구 폴더가 생기는 등의 문제가 있습니다. 그럴 때는 zip 커맨드를 이용할 수 있습니다.

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

## __MACOSX 폴더 제거
```
zip -d 압축파일명.zip "__MACOSX*"
```

### References
* [[Tip] Mac 에서 압축파일에 __MACOSX 폴더 없애는 방법 2015.09.02](https://lhh3520.tistory.com/305)

## 그냥 압축 예제
확장자가 JPG 인 파일들을 A6400_사진.zip 파일로 압축하는 방법입니다.
```
$ zip A6400_사진.zip *.JPG
```

## password
```bash
$ zip --encrypt archive.zip 1.txt 2.txt 3.txt
```

### 정리
* [OSX - zip 커맨드로 암호가 걸어서 압축하기 2019.09.28](https://junho85.pe.kr/1443)


### References
* [HowTo: Create a Password Protected ZIP File in Linux 2016.12.27](https://www.shellhacks.com/create-password-protected-zip-file-linux/)

## 분할압축
3500MB 단위로 자르기
```
$ zip -s 3500m archive.zip *
```

C0044.MP4 파일을 3500MB 단위로 잘라서 압축. 파일명의 기준은 archive.zip. 분할된 파일명은 archive.z01, archive.zip 입니다.
```
$ zip -s 3500m archive.zip C0044.MP4
```

분할압축된 파일을 해제 하는 방법은 좀 복잡합니다. 우선 압축 파일을 하나로 다시 합쳐 줍니다.
```
$ zip -s 0 archive.zip --out unsplit-archive.zip
```

그러고 나서 unzip 커맨드로 압축을 해제합니다.
```
$ unzip unsplit-archive.zip
```

### 정리
* [OSX - zip 커맨드로 파일 분할압축하기 2019.09.28](https://junho85.pe.kr/1442)

### References
* [맥에서 ZIP으로 압축 혹은 분할 압축하는 방법 2018.09.21](https://macinjune.com/all-posts/mac/tip/맥에서-zip으로-압축-혹은-분할-압축하는-방법/)
* [How to unzip split files on OS X 2011.12.07](https://superuser.com/questions/365643/how-to-unzip-split-files-on-os-x)


## 디렉토리 각각 압축하기
```
for i in */; do zip -r "${i%/}.zip" "$i"; done
```

### References
* [command to zip multiple directories into individual zip files](https://unix.stackexchange.com/questions/68489/command-to-zip-multiple-directories-into-individual-zip-files)
