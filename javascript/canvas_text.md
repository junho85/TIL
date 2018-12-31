# canvas
* ```<canvas>``` 태그로 canvas 를 만든다.
* javascript 로 canvas 를 그린다.
* canvas 의 drawing context 를 통해서 그리게 된다.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <style>
        #my_canvas {
            border: 1px solid grey;
        }
    </style>

</head>
<body>
<canvas id="my_canvas" width="600" height="80"></canvas><br>
<input id="draw_text" value="안녕하세요. 반갑습니다.">
</body>

<script>
    document.getElementById("draw_text").addEventListener("keyup", function() {
        var canvas = document.getElementById("my_canvas");
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        var text = document.getElementById("draw_text").value;
        var x = 20;
        var y = 50;

        context.font = "40pt BM YEONSUNG OTF";
        context.fillStyle = 'black';
        context.fillText(text, x, y);
    });

    document.getElementById("draw_text").dispatchEvent(new Event('keyup'));
</script>

</html>
```