# Image
* 이미지를 불러올 때 사용한다.
* Konva.Image() 로 초기화. image 속성 사용.

```javascript
var imageObj = new Image();
imageObj.onload = function() {
  var yoda = new Konva.Image({
    x: 50,
    y: 50,
    image: imageObj,
    width: 106,
    height: 118
  });
  // add the shape to the layer
  layer.add(yoda);

  // add the layer to the stage
  stage.add(layer);
};
imageObj.src = '/assets/yoda.jpg';
```
## References
* [HTML5 canvas Image Tutorial](https://konvajs.org/docs/shapes/Image.html)
* [Konva.Image](https://konvajs.org/api/Konva.Image.html)