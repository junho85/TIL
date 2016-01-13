# shell script

## $?
이전에 실행 했던 결과값. 보통 성공하면 0 이다
```
ls
echo $?
0

asdf
command not found: asdf
echo $?
127
```

## conditions

```
if [ $? == 1 ]
    then exit -1;
fi
```