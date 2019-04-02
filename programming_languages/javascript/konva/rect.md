# Rect
Konva.Rect() 로 사각형 객체를 만들 수 있다.

다음은 50,50 위치에 가로 100, 세로 50 녹색 사각형을 만드는 예제이다. 검은색 테두리도 그려진다.

```javascript
...
var rect = new Konva.Rect({
  x: 50,
  y: 50,
  width: 100,
  height: 50,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 4
});

// add the shape to the layer
layer.add(rect);

// add the layer to the stage
stage.add(layer);
```

cornerRadius 설정을 추가하면 둥근 모서리 처리 할 수 있다.

* [HTML5 canvas Rect Tutorial](https://konvajs.org/docs/shapes/Rect.html)
* [Konva.Rect](https://konvajs.org/api/Konva.Rect.html)