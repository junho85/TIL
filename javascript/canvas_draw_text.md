# canvas - 텍스트 그리기
* ```<canvas>``` 태그로 canvas 를 만든다.
* javascript 로 canvas 를 그린다.
* canvas 의 drawing context 를 통해서 그리게 된다.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Canvas Example</title>

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

## outline
```javascript
context.lineWidth = 10;
context.strokeText(text, x, y);
```

* 테두리 색 기본은 black. 만약 바꾸고 싶으면 strokeStyle 값을 바꿔 주면 된다.
```javascript
context.strokeStyle = 'black';
```

![image](https://user-images.githubusercontent.com/1219373/50573667-e0353500-0e1b-11e9-8202-767d0f97af53.png)


## 블로그 포스팅
* [javascript - canvas 에 텍스트 그리기](http://junho85.pe.kr/1174)
* [javascript - canvas 에 텍스트 그리기 응용. outline 만들기.](http://junho85.pe.kr/1175)

## References
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext