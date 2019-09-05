# TextPath
* path 를 따라가는 text 를 그릴 때 사용한다.
* data 속성에 SVG data string 을 넣어 준다.
  * SVG path 에 대해서는 https://www.w3.org/TR/SVG/paths.html 를 참고 한다.
  * 아래 예제에서는 M, C, S 가 사용 되었는데 각 의미는 다음과 같다.
  * M 은 move to
  * C 는 curve to
  * S 는 smooth curve to
  
```javascript
var textpath = new Konva.TextPath({
  x: 0,
  y: 50,
  fill: '#333',
  fontSize: 16,
  fontFamily: 'Arial',
  text:
    "All the world's a stage, and all the men and women merely players.",
  data: 'M10,10 C0,0 10,150 100,100 S300,150 400,50'
});
```

## References
* [HTML5 canvas TextPath Tutorial. Text follows path](https://konvajs.org/docs/shapes/TextPath.html)
* [Konva.TextPath](https://konvajs.org/api/Konva.TextPath.html)