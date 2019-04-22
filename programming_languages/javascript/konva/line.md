# Line
## Line - Simple Line
* Konva.Line() 객체로 선을 그릴 수 있음.
* points 설정으로 path 를 설정함.
* 배열로 되어 있고 [x1, y1, x2, y2, x3, y3] 처럼 x,y x,y 들을 연속으로 적어 준다.
* tension 높을 수록 커브진다. 기본은 0
* closed (boolean) - 라인이 닫히는지 여부.
* bezier (boolean) - bezier 이용해서 선을 그린다

```javascript
var redLine = new Konva.Line({
    points: [5, 70, 140, 23, 250, 60, 300, 20],
    stroke: 'red',
    strokeWidth: 15,
    lineCap: 'round',
    lineJoin: 'round'
});

// dashed line
var greenLine = new Konva.Line({
    points: [5, 70, 140, 23, 250, 60, 300, 20],
    stroke: 'green',
    strokeWidth: 2,
    lineJoin: 'round',
    /*
     * line segments with a length of 33px
     * with a gap of 10px
     */
    dash: [33, 10]
});

// complex dashed and dotted line
var blueLine = new Konva.Line({
    points: [5, 70, 140, 23, 250, 60, 300, 20],
    stroke: 'blue',
    strokeWidth: 10,
    lineCap: 'round',
    lineJoin: 'round',
    /*
     * line segments with a length of 29px with a gap
     * of 20px followed by a line segment of 0.001px (a dot)
     * followed by a gap of 20px
     */
    dash: [29, 20, 0.001, 20]
});

/*
 * since each line has the same point array, we can
 * adjust the position of each one using the
 * move() method
 */
redLine.move({
    x: 0,
    y: 5
});
greenLine.move({
    x: 0,
    y: 55
});
blueLine.move({
    x: 0,
    y: 105
});
```

```javascript
var line = new Konva.Line({
  x: 100,
  y: 50,
  points: [73, 70, 340, 23, 450, 60, 500, 20],
  stroke: 'red',
  tension: 1
});
```

* [HTML5 canvas Line Tutorial](https://konvajs.org/docs/shapes/Line_-_Simple_Line.html)
* [Konva.Line](https://konvajs.org/api/Konva.Line.html)

## Line - Polygon
* closed 를 true 로 해서 닫힌 (closed) 객체를 만든다.

```javascript
var poly = new Konva.Line({
    points: [23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 5,
    closed: true
});
```
* [HTML5 canvas Polygon Tutorial](https://konvajs.org/docs/shapes/Line_-_Polygon.html)

## Line - Spline
* tension 속성을 주면 spline 을 만들수 있다.
* path 는 points 값들을 이용한다.

```javascript
var redLine = new Konva.Line({
    points: [5, 70, 140, 23, 250, 60, 300, 20],
    stroke: 'red',
    strokeWidth: 15,
    lineCap: 'round',
    lineJoin: 'round',
    tension: 1
});

// dashed line
var greenLine = new Konva.Line({
    points: [5, 70, 140, 23, 250, 60, 300, 20],
    stroke: 'green',
    strokeWidth: 2,
    lineJoin: 'round',
    /*
     * line segments with a length of 33px
     * with a gap of 10px
     */
    dash: [33, 10],
    lineCap: 'round',
    tension: 0.5
});

// complex dashed and dotted line
var blueLine = new Konva.Line({
    points: [5, 70, 140, 23, 250, 60, 300, 20],
    stroke: 'blue',
    strokeWidth: 10,
    lineCap: 'round',
    lineJoin: 'round',
    /*
     * line segments with a length of 29px with a gap
     * of 20px followed by a line segment of 0.001px (a dot)
     * followed by a gap of 20px
     */
    dash: [29, 20, 0.001, 20],
    tension: 0.7
});

/*
 * since each line has the same point array, we can
 * adjust the position of each one using the
 * move() method
 */
redLine.move({
    x: 20,
    y: 5
});
greenLine.move({
    x: 20,
    y: 55
});
blueLine.move({
    x: 20,
    y: 105
});

layer.add(redLine);
layer.add(greenLine);
layer.add(blueLine);
```

* [HTML5 canvas Spline Tutorial](https://konvajs.org/docs/shapes/Line_-_Spline.html)

## Line - Blob
* blob 는 덩어리, 뭉치, 방울 등의 의미를 가짐
* 닫혀 있는 도형을 만들어야 되기 때문에 closed 는 true 로 한다.

```javascript
var blob = new Konva.Line({
  points: [23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
  fill: '#00D2FF',
  stroke: 'black',
  strokeWidth: 5,
  closed: true,
  tension: 0.3
});
```

* [HTML5 canvas Blob Tutorial](https://konvajs.org/docs/shapes/Line_-_Blob.html)