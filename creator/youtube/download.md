# youtube download

## ssyoutube
youtube 앞에 ss

## youtube-dl
* [](https://github.com/ytdl-org/youtube-dl)

mp4 로 받기
```
youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4' url
```

```
youtube-dl -f137+250 https://www.youtube.com/watch?v=... 
```

```
youtube-dl https://www.youtube.com/watch?v=...
```

image not found
```
--prefer-avconv
```

## mp3 만 받기
```
youtube-dl -x --audio-format mp3 https://www.youtube.com/watch?v=0FB2EoKTK_Q
```

```
ERROR: ffprobe/avprobe and ffmpeg/avconv not found. Please install one.
```
오류가 뜨면
```
brew install ffmpeg
```

## image not found 오류. ffmpeg 에서 libffi 라이브러리 오류
```
brew reinstall ffmpeg
```

```
brew remove libffi
brew install libffi
```
