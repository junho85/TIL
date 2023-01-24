# Arc
* arc (호, 아치 모양)을 만들려면 Konva.Arc() 로 만든다.
* 반지름 값은 두가지가 있다. innerRadius (내경), outerRadius (외경)

```javascript
var arc = new Konva.Arc({
  x: stage.width() / 2,
  y: stage.height() / 2,
  innerRadius: 40,
  outerRadius: 70,
  angle: 60,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4
});
```

## References
* [HTML5 canvas Arc Tutorial](https://konvajs.org/docs/shapes/Arc.html)
* [Konva.Arc](https://konvajs.org/api/Konva.Arc.html)
