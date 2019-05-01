# Telegram Bot

* BotFather 봇에서 새 봇 만든다고 요청해서 만들면 된다.

/start
```
They call me the Botfather, I can help you create and set up Telegram bots. Please read this manual before we begin:
https://core.telegram.org/bots

You can control me by sending these commands:

/newbot - create a new bot
/token - generate authorization token
/revoke - revoke bot access token
/setname - change a bot's name
/setdescription - change bot description
/setabouttext - change bot about info
/setuserpic - change bot profile photo
/setinline - change inline settings
/setinlinegeo - toggle inline location requests
/setinlinefeedback - change inline feedback settings
/setcommands - change bot commands list
/setjoingroups - can your bot be added to groups?
/setprivacy - what messages does your bot see in groups?
/deletebot - delete a bot
/cancel - cancel the current operation
```

/newbot
```
Alright, a new bot. How are we going to call it? Please choose a name for your bot.
```

이름을 정한다. e.g. 준호봇
```
Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot.
```

username 을 정한다. bot 으로 끝나야 한다. e.g. JunHoBot
```
Done! Congratulations on your new bot. You will find it at telegram.me/JunHoBot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
{token 이 발행된다.}

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
```

To be continued...

## References

* [나만의 웹 크롤러 만들기(5): 웹페이지 업데이트를 알려주는 Telegram 봇](https://beomi.github.io/2017/04/20/HowToMakeWebCrawler-Notice-with-Telegram/)
* [TELEGRAM BOT 만들기 2017.08.26](https://kimdoky.github.io/diary/2017/08/26/Telegram_bot.html)
* [[챗봇 만들기] 30분 만에 텔레그램 봇 만들기 2018.02.20](https://steemit.com/kr-dev/@maanya/30)
* [python으로 telegram bot 활용하기 - 1 기본 설정편 2016.12.08](https://blog.psangwoo.com/coding/2016/12/08/python-telegram-bot-1.html)