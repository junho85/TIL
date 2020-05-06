# split

## 라인으로 나누기
```
split -l 28000 idlist_random idlist_random_
```

## 퍼센티지로 나누기
```
split -l $[ $(wc -l filename|cut -d" " -f1) * 25 / 100 ] filename filename_
```

```
split -l $[ $(wc -l filename|cut -d" " -f1) * 70 / 100 ] filename
```