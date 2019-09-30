# github 과 slack 연동
## slack 의 github 봇으로 연동
* https://slack.github.com/ 에서 연동 한다.
* Apps 에 GitHub 이 나타나면 `/github subscribe junho85/TIL` 하고 순서대로 따라하면 연동 된다.
* 이제 GitHub 봇이 push 등의 이벤트가 생길때 마다 메시지를 보내준다. 

## python slackclient
### installation
```
$ pip3 install slackclient
```

개인 서버에서 세팅
```
python3 -m virtualenv env
source env/bin/activate
pip install slackclient
```

### get token
* [Create and regenerate API tokens](https://the-gardeners-season4.slack.com/help/articles/215770388)
  * https://api.slack.com/custom-integrations/legacy-tokens

### example
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