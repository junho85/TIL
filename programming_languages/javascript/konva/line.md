# Line - Simple Line
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
* [](https://konvajs.org/api/Konva.Line.html)