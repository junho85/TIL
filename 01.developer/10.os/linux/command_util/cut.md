# cut

## tab 을 delimiter 로 사용하는 방법
사실 tab 은 기본 delimiter 이기 때문에 별도로 지정 해 줄 필요가 없다.
```
-d delim
         Use delim as the field delimiter character instead of the tab
         character.
```

```bash
cut -f2
```


<kbd>Ctrl + v</kbd> 누르고 <kbd>Tab</kbd> 누르면 tab 이 입력 된다.

```bash
cut -f2 -d'	'
```

$'\t' 를 이용하는 방법도 있다.
```bash
cut -f2 -d$'\t'
```

## References
* [cut(1)](http://www.manpagez.com/man/1/cut/)
* [How to define 'tab' delimiter with 'cut' in BASH?](https://unix.stackexchange.com/questions/35369/how-to-define-tab-delimiter-with-cut-in-bash)