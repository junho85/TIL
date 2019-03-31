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


## drag and drop
* 내장된 drag 를 지원한다.
* drop 이벤트 (drop, dragenter, dragleave, dragover) 는 없지만 쉽게 구현할 수 있다.
  * 참고: https://konvajs.org/docs/drag_and_drop/Drop_Events.html
* drag&drop 을 활성화 하려면 draggable 속성을 true 로 바꿔주면 된다.
```javascript
shape.draggable('true');
```
* [HTML5 Canvas Complex Drag and Drop Bounds](https://konvajs.org/docs/drag_and_drop/Complex_Drag_and_Drop.html)

## Filters
* 여러 필터가 있다. blur, invert, noise 등
* https://konvajs.org/api/Konva.Filters.html 에서 모든 필터를 확인 할 수 있다.
* blurRadius
* brightness
* contrast
* emboss
* enhance
* grayscale
* HSL - Hue, Saturation, Luminance (or lighness)
  * luminance
* HSV - Hue, Saturation, Value
* invert
* mask
* noise
* posterize
* rgb
* rgba
* sepia
* solarize
* threshold

## Animation
* 두 가지 방식으로 애니메이션을 만들 수 있다.

### 1. Konva.Animation
```javascript
var anim = new Konva.Animation(function(frame) {
    var time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;
    // update stuff
}, layer);
anim.start();
```
* [HTML5 Canvas Animate Position Tutorial](https://konvajs.org/docs/animations/Moving.html)

### 2. Konva.Tween
```javascript
var tween = new Konva.Tween({
        node: rect,
        duration: 1,
        x: 140,
        rotation: Math.PI * 2,
        opacity: 1,
        strokeWidth: 6
});
tween.play();

// or new shorter method:
circle.to({
    duration : 1,
    fill : 'green'
});
```
https://konvajs.org/docs/tweens/Linear_Easing.html

## Selectors
* 큰 애플리케이션을 구성할 때 요소들에서 검색을 이용하면 유용하다. Konva 는 셀렉터로 요소를 찾는데 도움을 준다. find() 나 findOne() 메서드를 사용할 수 있다.
* 뭔가 번역투라 이상하다.
* javascript 에서 dom 내부를 검색 할 때 getElement 어쩌구나 jquery 에서 find 를 이용해서 dom 내부를 검색 할 수 있는데, 그런것과 비슷한 걸 제공하고 있다고 보면 된다.

```javascript
var circle = new Konva.Circle({
        radius: 10,
        fill: 'red',
        id : 'face',
        name : 'red circle'
});
layer.add(circle);

// then try to search

// find by type
layer.find('Circle'); // all circles

// find by id
layer.findOne('#face');

// find by name (like css class)
layer.find('.red')
```
layer 에 Circle 을 추가 하고 layer.find 로 모든 Circle 을 검색한다. # 은 id, . 은 name 이다. jquery 에서 그냥 find 는 html tag, # 은 아이디, . 은 class 를 검색하는 것과 비슷한다.

## Serialisation and Deserialization
* 생성된 모든 객체들은 json 으로 저장 할 수 있다. 서버나 로컬 스토리지에 저장 해 두면 유용할 것 같다.
```javascript
var json = stage.toJSON();
```

그리고 다시 불러 올 수도 있다.
```javascript
var json = '{"attrs":{"width":578,"height":200},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]}';

var stage = Konva.Node.create(json, 'container');
```


## download
* [HTML5 Canvas Stage Data URL Tutorial](https://konvajs.org/docs/data_and_serialization/Stage_Data_URL.html)
