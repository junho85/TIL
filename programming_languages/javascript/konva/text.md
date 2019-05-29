# Text
* text 를 생성하고 싶다면 Konva.Text() 를 이용한다.
* 간단한 텍스트 만들기 예제
```javascript
var simpleText = new Konva.Text({
  x: stage.width() / 2,
  y: 15,
  text: 'Simple Text',
  fontSize: 30,
  fontFamily: 'Calibri',
  fill: 'green'
});
// to align text in the middle of the screen, we can set the
// shape offset to the center of the text shape after instantiating it
simpleText.offsetX(simpleText.width() / 2);
```

* 사각형 안에 글자 넣기. complexText 를 만들고 이미 지정된 width 로 만든다. 사각형을 만들때 complexText.height() 를 이용해서 사각형을 만든다.
```javascript
// since this text is inside of a defined area, we can center it using
// align: 'center'
var complexText = new Konva.Text({
  x: 20,
  y: 60,
  text:
    "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
  fontSize: 18,
  fontFamily: 'Calibri',
  fill: '#555',
  width: 300,
  padding: 20,
  align: 'center'
});

var rect = new Konva.Rect({
  x: 20,
  y: 60,
  stroke: '#555',
  strokeWidth: 5,
  fill: '#ddd',
  width: 300,
  height: complexText.height(),
  shadowColor: 'black',
  shadowBlur: 10,
  shadowOffset: [10, 10],
  shadowOpacity: 0.2,
  cornerRadius: 10
});
```

## References
* [HTML5 canvas Text Tutorial](https://konvajs.org/docs/shapes/Text.html)
* [Konva.Text](https://konvajs.org/api/Konva.Text.html)

