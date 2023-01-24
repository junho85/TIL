# javascript - image

## get image size
```
var img = new Image();
img.onload = function() {
  alert(this.width + 'x' + this.height);
}
img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
```

### References
* [How to get image size (height & width) using JavaScript?](https://stackoverflow.com/questions/623172/how-to-get-image-size-height-width-using-javascript)