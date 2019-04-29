## Sprite
* https://konvajs.org/assets/blob-sprite.png 에 여러개의 이미지가 하나의 이미지에 들어 있는 이미지 파일이 있다.
* animations 에 x,y, width, height 순서대로 반복해서 넣으면 각 영역이 의미지가 돌아가면서 나온다.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/konva@3.2.4/konva.min.js"></script>
    <meta charset="utf-8" />
    <title>Konva Sprite Demo</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #f0f0f0;
      }
      #punch {
        position: absolute;
        top: 0;
        left: 0;
      }
    </style>
  </head>
  <body>
    <div id="container"></div>
    <button id="punch">Punch</button>
    <script>
      var width = window.innerWidth;
      var height = window.innerHeight;

      var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
      });

      var layer = new Konva.Layer();
      var animations = {
        idle: [2, 2, 70, 119, 71, 2, 74, 119, 146, 2, 81, 119, 226, 2, 76, 119],
        punch: [2, 138, 74, 122, 76, 138, 84, 122, 346, 138, 120, 122]
      };

      var imageObj = new Image();
      imageObj.onload = function() {
        var blob = new Konva.Sprite({
          x: 50,
          y: 50,
          image: imageObj,
          animation: 'idle',
          animations: animations,
          frameRate: 7,
          frameIndex: 0
        });

        // add the shape to the layer
        layer.add(blob);

        // add the layer to the stage
        stage.add(layer);

        // start sprite animation
        blob.start();

        // resume transition
        document.getElementById('punch').addEventListener(
          'click',
          function() {
            blob.animation('punch');
            blob.on('frameIndexChange.button', function() {
              if (this.frameIndex() === 2) {
                setTimeout(function() {
                  blob.animation('idle');
                  blob.off('.button');
                }, 1000 / blob.frameRate());
              }
            });
          },
          false
        );
      };
      imageObj.src = '/assets/blob-sprite.png';
    </script>
  </body>
</html>
```
* [HTML5 canvas Sprite Tutorial](https://konvajs.org/docs/shapes/Sprite.html)
* https://konvajs.org/api/Konva.Sprite.html