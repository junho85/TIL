# python - excel

## installation
```bash
pip install xlrd
```

## sample
excel_file.xlsx
```
순번	닉네임
1	june
2	test
3	hello
4	world
5	joe
6	max
7	michel
8	tom
9	baby
10	abc
11	wood
12	
13	
14	
```

```python
import xlrd


def load_applies():
    wb = xlrd.open_workbook("응모리스트샘플.xlsx")
    sheet = wb.sheet_by_index(0)

    result = []

    for i in range(1, sheet.nrows):
        (num, nickname) = sheet.row_values(i)
        result.append({num: nickname})
    return result


applies = load_applies()
print(applies)
```

```
[{1.0: 'june'}, {2.0: 'test'}, {3.0: 'hello'}, {4.0: 'world'}, {5.0: 'joe'}, {6.0: 'max'}, {7.0: 'michel'}, {8.0: 'tom'}, {9.0: 'baby'}, {10.0: 'abc'}, {11.0: 'wood'}, {12.0: ''}, {13.0: ''}, {14.0: ''}]
```

## References
* [Reading an excel file using Python](https://www.geeksforgeeks.org/reading-excel-file-using-python/)