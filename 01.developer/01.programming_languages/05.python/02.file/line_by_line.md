# python - file - read line by line

## read line by line
```
f = open("list.txt", "r")
for line in f:
  print(line)
f.close()
```

개행을 제거 하려면 line.rstrip()

## References
* [Python File Open](https://www.w3schools.com/python/python_file_open.asp)