# javascript - array

```
[...Array(5).keys()];
 => [0, 1, 2, 3, 4]
```

## empty array
```javascript
var arr = ['a','b','c','d','e','f'];
arr = [];
```

```javascript
arr.length = 0;
```

```javascript
arr.splice(0, arr.length)
```

```javascript
while (arr.length > 0) {
    arr.pop();
}
```

## References
* [Does JavaScript have a method like “range()” to generate a range within the supplied bounds?](https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp)
* [How do I empty an array in JavaScript?](https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript)
* [empty an array (length, pop, splice, shift)](http://jsben.ch/hyj65)