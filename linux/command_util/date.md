# date
## 어제 날짜 구하기
```bash
$ date --date="1 days ago"
Sun Dec 23 13:52:22 KST 2018

# yyyy-mm-dd
$ date --date="1 days ago" +%F
2018-12-23

# yyyymmdd
$ date --date="1 days ago" +%Y%m%d
20181223

# yymmdd
$ date --date="1 days ago" +%y%m%d
181223
```

## 내일 날짜 구하기
```bash
$ date --date="1 days" +%Y%m%d
20181225
```

## blog posting
* [shell date 커맨드로 어제, 내일 날짜 구하기](http://junho85.pe.kr/529)