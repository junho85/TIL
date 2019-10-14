# chown

## 심볼릭 링크 소유자 변경
```
chown -h 사용자:그룹 심볼릭링크파일
```

chown 을 해도 심볼릭 링크 파일 자체의 소유자가 변경 되지는 않는데 이럴 때 -h 옵션을 사용합니다.

```
$ chown --help
...
  -h, --no-dereference   affect symbolic links instead of any referenced file
                         (useful only on systems that can change the
                         ownership of a symlink)
```

## References
* [리눅스 심볼릭링크 소유자 변경](https://zetawiki.com/wiki/%EB%A6%AC%EB%88%85%EC%8A%A4_%EC%8B%AC%EB%B3%BC%EB%A6%AD%EB%A7%81%ED%81%AC_%EC%86%8C%EC%9C%A0%EC%9E%90_%EB%B3%80%EA%B2%BD)