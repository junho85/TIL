# Wedge
* 이걸 뭐라 해야 되지.
* 피자 조각?
* 원을 중심을 기준으로 잘라낸모양.
* 삼각형과 원이 합쳐진 모양 같은거
* 원그래프(Pie chart)를 그릴때 사용할 것 같다.

```javascript
var wedge = new Konva.Wedge({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    angle: 60,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    rotation: -120
  });
```

```javascript
// draw a wedge that's pointing downwards
var wedge = new Konva.Wedge({
  radius: 40,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 5,
  angleDeg: 60,
  rotationDeg: -120
});
```

* angle
* radius
* clockwise - Boolean

## References
* [HTML5 canvas Wedge Tutorial](https://konvajs.org/docs/shapes/Wedge.html)
* [Konva.Wedge](https://konvajs.org/api/Konva.Wedge.html)