# python slack client


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