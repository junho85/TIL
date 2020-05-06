# reverse

## slicing
```python
>>> print("Python"[::-1])
nohtyP
```

## reversed and join
그냥 reversed 하면 reversed object 가 나온다. 문서에는 reverser iterator 를 리턴한다고 되어 있다.
```
>>> reversed("Python")
<reversed object at 0x103a21910>
```

```
>>> print(''.join(reversed("Python")))
nohtyP
```

## References
* [Python Reverse String](https://www.journaldev.com/23647/python-reverse-string)
* [How to Reverse a String in Python](https://www.w3schools.com/python/python_howto_reverse_string.asp)
* [How do you reverse a string in Python?](https://www.educative.io/edpresso/how-do-you-reverse-a-string-in-python)
* [reversed(seq)](https://docs.python.org/3/library/functions.html#reversed)
  * reverse iterator 를 리턴한다. 