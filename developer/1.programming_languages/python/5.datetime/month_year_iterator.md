# python - month year iterator
month year iterator
```
def month_year_iter(start_month, start_year, end_month, end_year):
    ym_start = 12 * start_year + start_month - 1
    ym_end = 12 * end_year + end_month - 1
    for ym in range(ym_start, ym_end):
        y, m = divmod(ym, 12)
        yield y, m + 1


for year_month in month_year_iter(10, 2019, 11+1, 2019):
    print(year_month)
```

```
(2019, 10)
(2019, 11)
```

## References
* [How to create a month iterator](https://stackoverflow.com/questions/5734438/how-to-create-a-month-iterator)