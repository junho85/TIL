# youtube thumbnail


## API
* [YouTube > Data API](https://developers.google.com/youtube/v3/)

* [Thumbnails](https://developers.google.com/youtube/v3/docs/thumbnails)


```
POST https://www.googleapis.com/youtube/v3/thumbnails/set
```
* https://developers.google.com/youtube/v3/docs/thumbnails/set

## 썸네일 파일 추출
* Maximum Resolution
 * https://img.youtube.com/vi/<videoId>/maxresdefault.jpg
 * 이게 최고 화질이라고 보면 된다. 썸네일 추출 하고 싶으면 이거 이용하면 무난함.
 * jpg 말고 webp 도 있다.
   * https://img.youtube.com/vi_webp/${videoId}/maxresdefault.webp
* Original
  * https://img.youtube.com/vi/${videoId}/original.jpg
  * Maximum Resolution 과 차이점은?
* 첫번째는 풀사이즈. 나머지는 작은 사이즈.
  * https://img.youtube.com/vi/<videoId>/0.jpg
  * https://img.youtube.com/vi/<videoId>/1.jpg
  * https://img.youtube.com/vi/<videoId>/2.jpg
  * https://img.youtube.com/vi/<videoId>/3.jpg
* 기본
  * https://img.youtube.com/vi/<videoId>/default.jpg
* HQ (High Quality)
  * https://img.youtube.com/vi/<videoId>/hqdefault.jpg
* MQ (Medium Quality)
  * https://img.youtube.com/vi/<videoId>/mqdefault.jpg
* SD (Standard Definition)
  * https://img.youtube.com/vi/<videoId>/sddefault.jpg
  
### 유튜브 썸네일 추출기
* [Youtube Thumbnail Extractor](http://labs.junho85.pe.kr/creator/)

### References
* [How do I get a YouTube video thumbnail from the YouTube API?](https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api)
* [YouTube Thumbnail Grabber](https://boingboing.net/features/getthumbs)
* [](http://www.get-youtube-thumbnail.com/)