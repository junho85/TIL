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
  * [Legacy tokens](https://api.slack.com/custom-integrations/legacy-tokens)

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

## 채널의 유저리스트 가져오기
* [users.list](https://api.slack.com/methods/users.list)
```
response = client.users_list()
print(response)
```

결과 예제. 참고로 메시지 보낼때 link_names 걸어 줄 때 'name' 의 값을 이용해야 한다. slack 채팅창에 직접 적을 때는 표시되는 이름 (display_name) 을 이용하면 되지만 API 로 메시지 보낼 때는 name 을 이용해야 한다.
```
{
	'ok': True,
	'members': [{
...
	}, {
		'id': 'UNLS6MQPN',
		'team_id': 'TNMAF3TT2',
		'name': 'junho85',
		'deleted': False,
		'color': 'e96699',
		'real_name': 'June Kim',
		'tz': 'Asia/Seoul',
		'tz_label': 'Korea Standard Time',
		'tz_offset': 32400,
		'profile': {
			'title': '',
			'phone': '',
			'skype': '',
			'real_name': 'June Kim',
			'real_name_normalized': 'June Kim',
			'display_name': 'June Kim - junho85',
			'display_name_normalized': 'June Kim - junho85',
			'status_text': '',
			'status_emoji': '',
			'status_expiration': 0,
			'avatar_hash': 'gfe5d9eafefd',
			'email': 'junho85@gmail.com',
			'first_name': 'June',
			'last_name': 'Kim',
			'image_24': 'https://secure.gravatar.com/avatar/fe5d9eafefdaf688a12c37173f938399.jpg?s=24&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-24.png',
			'image_32': 'https://secure.gravatar.com/avatar/fe5d9eafefdaf688a12c37173f938399.jpg?s=32&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-32.png',
			'image_48': 'https://secure.gravatar.com/avatar/fe5d9eafefdaf688a12c37173f938399.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-48.png',
			'image_72': 'https://secure.gravatar.com/avatar/fe5d9eafefdaf688a12c37173f938399.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-72.png',
			'image_192': 'https://secure.gravatar.com/avatar/fe5d9eafefdaf688a12c37173f938399.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-192.png',
			'image_512': 'https://secure.gravatar.com/avatar/fe5d9eafefdaf688a12c37173f938399.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2Fdf10d%2Fimg%2Favatars%2Fava_0003-512.png',
			'status_text_canonical': '',
			'team': 'TNMAF3TT2'
		},
		'is_admin': False,
		'is_owner': False,
		'is_primary_owner': False,
		'is_restricted': False,
		'is_ultra_restricted': False,
		'is_bot': False,
		'is_app_user': False,
		'updated': 1569988885,
		'has_2fa': False
	}, {
...
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