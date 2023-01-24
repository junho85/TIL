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

## outline. strokeText
```javascript
context.lineWidth = 10;
context.strokeText(text, x, y);
```

* 테두리 색 기본은 black. 만약 바꾸고 싶으면 strokeStyle 값을 바꿔 주면 된다.
```javascript
context.strokeStyle = 'black';
```

> ![image](https://user-images.githubusercontent.com/1219373/50573667-e0353500-0e1b-11e9-8202-767d0f97af53.png)

## strokeText 하고 나서 뾰족하게 튀어나가는거 해결하기
> ![image](https://user-images.githubusercontent.com/1219373/50592611-38317180-0ed8-11e9-8a40-e897e5fc6bf4.png)

이상하게 뾰족하게 튀어 나가는 부분들이 생긴다. 어떻게 해결해야 할까?

```javascript
context.lineJoin = 'round';
```

lineJoin 의 기본값은 miter 인 것 같다. round 로 바꿔주면 매끄럽게 처리 된다.

> ![image](https://user-images.githubusercontent.com/1219373/50593466-c5c29080-0edb-11e9-83a3-2c37cbca465a.png)

## shadow. 그림자 효과
* 그래픽 프로그램에서는 drop shadow 라는 용어를 많이 쓴다.
* shadowColor 를 지정해 주고, shadowBlur 값을 지정해 주면 그림자가 생긴다.
```javascript
context.shadowColor = "black";
context.shadowBlur = 5;
````
> ![image](https://user-images.githubusercontent.com/1219373/50641195-8a42c780-0faa-11e9-8ae4-bb9f4c1d60a5.png)

* 그림자의 위치를 조정해 보자.
```javascript
context.shadowColor = "black";
context.shadowBlur = 5;
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
```
![image](https://user-images.githubusercontent.com/1219373/50641238-ad6d7700-0faa-11e9-8019-478e061dacba.png)

* 그림자를 반투명하게 만들고 싶다면 shadowColor 설정할 때, rgba 를 이용한다.
```javascript
context.shadowColor = "rgba(0,0,0,0.5)";
context.shadowBlur = 5;
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
```
> ![image](https://user-images.githubusercontent.com/1219373/50641133-5798cf00-0faa-11e9-984e-81ec524400e1.png)


## 블로그 포스팅
* [javascript - canvas 에 텍스트 그리기](http://junho85.pe.kr/1174)
* [javascript - canvas 에 텍스트 그리기 응용. outline 만들기.](http://junho85.pe.kr/1175)
* [javascript - canvas 에 strokeText 하니까 삐죽삐죽 가시가 튀어 나올때는?](http://junho85.pe.kr/1176)

## References
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext