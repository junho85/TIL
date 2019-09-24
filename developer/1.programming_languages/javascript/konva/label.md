# Label
* Konva 로 text label 을 만들려면 Konva.Label() 로 만든다. 배경이 있는 텍스트, 간단한 툴팁, 포인터가 있는 툴팁 같은 것을 만들수 있다.
* pointerDirection 으로 툴팁 포인팅 방향 조정. down 이면 아래쪽으로 뾰족하게 나온다.

```javascript
// tooltip
var tooltip = new Konva.Label({
  x: 170,
  y: 75,
  opacity: 0.75
});

tooltip.add(
  new Konva.Tag({
    fill: 'black',
    pointerDirection: 'down',
    pointerWidth: 10,
    pointerHeight: 10,
    lineJoin: 'round',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: 10,
    shadowOpacity: 0.5
  })
);

tooltip.add(
  new Konva.Text({
    text: 'Tooltip pointing down',
    fontFamily: 'Calibri',
    fontSize: 18,
    padding: 5,
    fill: 'white'
  })
);

// label with left pointer
var labelLeft = new Konva.Label({
  x: 20,
  y: 130,
  opacity: 0.75
});

labelLeft.add(
  new Konva.Tag({
    fill: 'green',
    pointerDirection: 'left',
    pointerWidth: 20,
    pointerHeight: 28,
    lineJoin: 'round'
  })
);

labelLeft.add(
  new Konva.Text({
    text: 'Label pointing left',
    fontFamily: 'Calibri',
    fontSize: 18,
    padding: 5,
    fill: 'white'
  })
);

// simple label
var simpleLabel = new Konva.Label({
  x: 180,
  y: 150,
  opacity: 0.75
});

simpleLabel.add(
  new Konva.Tag({
    fill: 'yellow'
  })
);

simpleLabel.add(
  new Konva.Text({
    text: 'Simple label',
    fontFamily: 'Calibri',
    fontSize: 18,
    padding: 5,
    fill: 'black'
  })
);
```

## References
* [HTML5 canvas Label Tutorial](https://konvajs.org/docs/shapes/Label.html)
* [Konva.Label](https://konvajs.org/api/Konva.Label.html)
