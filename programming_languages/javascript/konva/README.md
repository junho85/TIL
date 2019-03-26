# konva
* Konva.js - HTML5 2d canvas library for desktop and mobile applications.
* https://konvajs.org
* https://github.com/konvajs/konva
* 2019.03 24K 해커톤에서 만든 툴도 konva 를 이용해서 만들었음.
  * http://labs.junho85.pe.kr/24k-gold/

## konva 사용하기
package manager 사용하면
```bash
$ npm install konva
```

온라인 상태이면 그냥 CDN 에 있는거 땡겨 써도 큰 무리 없음.
```html
<script src="https://unpkg.com/konva@3.2.3/konva.min.js"></script>
```

참고: https://konvajs.org/docs/

## konva 구조
Konva.Stage 로 부터 시작한다. Stage 는 여러개의 Konva.Layer 를 갖게 된다. 각각의 Layer 는 두개의 canvas 렌더러를 가지게 된다. scene 렌더러와 hit graph 렌더러 이다. scene 렌더러는 눈으로 보고 있는 것이고 hit graph 렌더러는 성능개선과 이벤트 감지를 위해 숨겨져 있는 캔버스이다.

각각의 레이어는 shapes, groups of shapes, groups of other groups 를 가질수 있다.
stage, layers, groups, shapes 는 가상의 노드들이고 HTML 의 DOM 노드와 비슷하다.

참고: https://konvajs.org/docs/overview.html

## 빨간 동그라미에 까만 테두리 예제
```javascript
// first we need to create a stage
var stage = new Konva.Stage({
  container: 'container',   // id of container <div>
  width: 500,
  height: 500
});

// then create layer
var layer = new Konva.Layer();

// create our shape
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();
```

## 기본 모양들 - Basic shapes
* Rect, Circle, Ellipse, Line, Polygon, Spline, Blob, Image, Text, TextPath, Star, Label, SVG Path, RegularPolygon 지원.
* custom shape 도 가능
```javascript
var triangle = new Konva.Shape({
      sceneFunc: function(context) {
        context.beginPath();
        context.moveTo(20, 50);
        context.lineTo(220, 80);
        context.quadraticCurveTo(150, 100, 260, 170);
        context.closePath();

        // special Konva.js method
        context.fillStrokeShape(this);
      },
      fill: '#00D2FF',
      stroke: 'black',
      strokeWidth: 4
});
```

## Styles
* Fill - 체우기. gradients 나 images 도 가능
* Stroke - 테두리 선
* Shadow - 그림자
* Opacity - 투명도

```javascript
var pentagon = new Konva.RegularPolygon({
    x: stage.width() / 2,
    y: stage.height() / 2,
    sides: 5,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX : 20,
    shadowOffsetY : 25,
    shadowBlur : 40,
    opacity : 0.5
});
```

## Events
* click, dblclick, mouseover, tap, dbltap, touchstart 등의 이벤트를 처리 할 수 있다.
* 속성 변경 이벤트 (scaleXChange, fillChange)
* drag&drop 이벤트 (dragstart, dragmove, dragend)

```javascript
circle.on('mouseout touchend', function() {
    console.log('user input');
});

circle.on('xChange', function() {
    console.log('position change');
});

circle.on('dragend', function() {
    console.log('drag stopped');
});
```
example: https://konvajs.org/docs/events/Binding_Events.html


## animation
* [HTML5 Canvas Animate Position Tutorial](https://konvajs.org/docs/animations/Moving.html)

## download
* [HTML5 Canvas Stage Data URL Tutorial](https://konvajs.org/docs/data_and_serialization/Stage_Data_URL.html)