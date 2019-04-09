# Ellipse
* 타원
* radius x, y 두개로 나눠진다.

```javascript
var oval = new Konva.Ellipse({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radiusX: 100,
    radiusY: 50,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4
  });
```

```javascript
var ellipse = new Konva.Ellipse({
  radius : {
    x : 50,
    y : 50
  },
  fill: 'red'
});
```

## References
* [HTML5 canvas Ellipse Tutorial](https://konvajs.org/docs/shapes/Ellipse.html)
* [Konva.Ellipse](https://konvajs.org/api/Konva.Ellipse.html)