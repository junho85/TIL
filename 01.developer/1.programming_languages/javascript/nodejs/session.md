# session
express-session 을 많이 쓰는 것 같다.

cookie-session 쓰는 프로젝트 몇개 하고 있는데 왜 cookie-session 을 선택했었을까?

express-session 으로 바꿔 두는게 좋을까?

## cookie-session
https://www.npmjs.com/package/cookie-session

simple cookie-based session middleware

```javascript
var cookieSession = require('cookie-session')
```

example
```javascript
var cookieSession = require('cookie-session')
var express = require('01.developer/programming_languages/javascript/nodejs/express')
 
var app = express()
 
app.set('trust proxy', 1) // trust first proxy
 
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
 
app.use(function (req, res, next) {
  var n = req.session.views || 0
  req.session.views = n++
  res.end(n + ' views')
})
 
app.listen(3000)
```


## express-session
https://www.npmjs.com/package/express-session

example
```javascript
var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
 
var app = express()
 
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
 
app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }
 
  // get the url pathname
  var pathname = parseurl(req).pathname
 
  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
 
  next()
})
 
app.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})
 
app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})
```


https://victorydntmd.tistory.com/35

