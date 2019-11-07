# python slack client


## installation
```
$ pip3 install slackclient
```

개인 서버에서 세팅
```
python3 -m virtualenv env
source env/bin/activate
pip install slackclient
```

## get token
* token 이 있어야 api 를 사용할 수 있습니다.
* [Create and regenerate API tokens](https://the-gardeners-season4.slack.com/help/articles/215770388)
  * https://api.slack.com/custom-integrations/legacy-tokens

## 채널에 메시지 보내기
* [python-slackclient](https://github.com/slackapi/python-slackclient)

```python
import os
import slack

client = slack.WebClient(token=os.environ['SLACK_API_TOKEN'])

response = client.chat_postMessage(
    channel='#random',
    text="Hello world!")
assert response["ok"]
assert response["message"]["text"] == "Hello world!"
```

유저이름에 링크를 걸려면 link_names=1 을 해 주면 된다.
```
client.chat_postMessage(
    channel='#junekim', # temp
    text='@junho85 test',
    link_names=1
)
```

## 채널의 메시지 가져오기
* [channels.history](https://api.slack.com/methods/channels.history)

```
channels_history
```


## 메시지의 댓글 가져오기
* [channels.replies](https://api.slack.com/methods/channels.replies)

## 채널 정보 가져오기
* [channels.info](https://api.slack.com/methods/channels.info)

## 채널 리스트
* [channels.list](https://api.slack.com/methods/channels.list)

## References
* [python-slackclient](https://github.com/slackapi/python-slackclient)
* [Slack Developer Kit for Python](https://slack.dev/python-slackclient/)