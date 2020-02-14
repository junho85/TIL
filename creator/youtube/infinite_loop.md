# youtube infinite loop. youtube 무한재생 만드는 방법
* 아래 코드에서 videoId 값만 바꿔 주면 된다.
* 영상의 재생이 끝나면 onPlayerStateChange 가 호출 되는데 이때 다시 playVideo() 함수 호출해서 다시 재생해 주는 방식이다.
* onPlayerReady 이벤트를 이용해서 플레이어가 준비 되면 자동 재생 되도록 해 두면 페이지가 열리면서 무한재생을 시작하게 만들 수 있다.
```html
<div id="player"></div>
<script type="text/javascript">
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'aPiQKENFWss',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}
		  
function onPlayerError(event) {
}
</script>
```
* [아이유(IU)- 너의의미(Feat.김창완) 자동재생/무한반복/무한재생](https://junho85.pe.kr/1280) 에서 아이유 너의의미 노래를 무한 감상해 보도록 하자.
* [벚꽃엔딩 (벚꽃연금? 벚꽃좀비?) 자동재생/무한반복/무한재생](https://junho85.pe.kr/437) 에서 벚꽃엔딩을 무한 감상해 보도록 하자.
* 블로그 정리: [유튜브 무한재생 만들기 2019.03.20](https://junho85.pe.kr/1281)

## References
* [](https://developers.google.com/youtube/iframe_api_reference)