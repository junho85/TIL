# javascript - line by line
```javascript
const sample = `hello world
nice to meet you
who are you
good morning`;

const lines = sample.split("\n");

// for loop
for (let i=0; i<lines.length; i++) {
    console.log("line[" + i + "]: " + lines[i]);
}

// forEach
lines.forEach(function (str, idx) {
    console.log("line[" + idx + "]: " + str);
});
```

```
line[0]: hello world
line[1]: nice to meet you
line[2]: who are you
line[3]: good morning
```