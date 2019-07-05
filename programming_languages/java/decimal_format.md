# DecimalFormat 숫자에 콤마 찍기

```
DecimalFormat formatter = new DecimalFormat("###,###");
        assertThat(formatter.format(123456789)).isEqualTo("123,456,789");
```

## References
* [자바 코딩 숫자 콤마 찍기 (금액 표기) 2018.07.06](https://jamesdreaming.tistory.com/203)
* https://docs.oracle.com/javase/tutorial/i18n/format/decimalFormat.html#numberpattern