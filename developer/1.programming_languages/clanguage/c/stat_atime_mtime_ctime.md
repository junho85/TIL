# stat atime, mtime, ctime
* atime 은 Access Time
* mtime 은 Modification Time
* ctime 은 Change Time
* 의 약자이다.
* 파일을 생성하면 기본적으로 atime, mtime, ctime 모두 같다.
```bash
[junho85@mail-mta ~]$ touch test.txt
[junho85@mail-mta ~]$ stat test.txt
  File: ‘test.txt’
  Size: 0               Blocks: 0          IO Block: 4096   regular empty file
Device: fd01h/64769d    Inode: 167959110   Links: 1
Access: (0644/-rw-r--r--)  Uid: (10000/ junho85)   Gid: (10000/ junho85)
Access: 2018-11-28 17:45:50.316368197 +0900
Modify: 2018-11-28 17:45:50.316368197 +0900
Change: 2018-11-28 17:45:50.316368197 +0900
 Birth: -
```

## atime - access time
* 파일을 액세스 하고 나면 atime 이 바뀐다.
```bash
[junho85@mail-mta ~]$ vi test.txt
[junho85@mail-mta ~]$ stat test.txt
  File: ‘test.txt’
  Size: 0               Blocks: 0          IO Block: 4096   regular empty file
Device: fd01h/64769d    Inode: 167959110   Links: 1
Access: (0644/-rw-r--r--)  Uid: (10000/ junho85)   Gid: (10000/ junho85)
Access: 2018-11-28 17:47:34.998327001 +0900
Modify: 2018-11-28 17:45:50.316368197 +0900
Change: 2018-11-28 17:45:50.316368197 +0900
 Birth: -
```
* 특이한건 한번 더 vi 로 열어도 atime 이 바뀌지는 않는다. cache 에 기록 되고 나면 cache 에 access 하기 때문에 atime 이 변하지 않는 것이다.

## mtime - modification time
* 파일을 수정 하면 mtime 이 바뀐다. atime, ctime 도 바뀐다.
```bash
[junho85@mail-mta ~]$ vi test.txt
[junho85@mail-mta ~]$ stat test.txt
  File: ‘test.txt’
  Size: 12              Blocks: 8          IO Block: 4096   regular file
Device: fd01h/64769d    Inode: 167959073   Links: 1
Access: (0755/-rwxr-xr-x)  Uid: (10000/ junho85)   Gid: (10000/ junho85)
Access: 2018-11-28 17:54:00.910859370 +0900
Modify: 2018-11-28 17:54:00.910859370 +0900
Change: 2018-11-28 17:54:00.911859379 +0900
 Birth: -
```
* atime 은 수정하면서 access 하니까 그렇다 치고, mtime 과 ctime 이 뭐가 다른지 궁금할 수 있다.

## ctime - change time
* ctime 은 파일의 속성이 바꼈을 때 변한다.
* 파일의 권한이 바뀌거나 파일명이 바뀐다거나 하면 ctime 만 바뀐다.
```bash
[junho85@mail-mta ~]$ chmod -x test.txt
[junho85@mail-mta ~]$ stat test.txt
  File: ‘test.txt’
  Size: 12              Blocks: 8          IO Block: 4096   regular file
Device: fd01h/64769d    Inode: 167959073   Links: 1
Access: (0644/-rw-r--r--)  Uid: (10000/ junho85)   Gid: (10000/ junho85)
Access: 2018-11-28 17:54:00.910859370 +0900
Modify: 2018-11-28 17:54:00.910859370 +0900
Change: 2018-11-28 17:55:10.226495215 +0900
 Birth: -
```

## References
* https://www.quora.com/What-is-the-difference-between-mtime-atime-and-ctime
* https://en.wikipedia.org/wiki/Stat_%28system_call%29#Criticism_of_atime