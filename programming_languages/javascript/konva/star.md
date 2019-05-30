# Star
* 별을 만들려면 Konva.Star() 로 만든다.
* numPoints 숫자에 따라 별의 뾰족한 갯수가 달라진다.
```javascript
var star = new Konva.Star({
  x: stage.width() / 2,
  y: stage.height() / 2,
  numPoints: 6,
  innerRadius: 40,
  outerRadius: 70,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4
});
```

## References
* [HTML5 canvas Star Tutorial](https://konvajs.org/docs/shapes/Star.html)
* [Konva.Star](https://konvajs.org/api/Konva.Star.html)
