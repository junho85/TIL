# javascript - loop

## for, forEach
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