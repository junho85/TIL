# Upgrading to 2.4 from 2.2
* [Upgrading to 2.4 from 2.2](https://httpd.apache.org/docs/2.4/upgrading.html)

## 기본 denied
2.2
```
Order deny,allow
Deny from all
```

2.4
```
Require all denied
```

## 기본 allowed
2.2
```
Order allow,deny
Allow from all
```

2.4
```
Require all granted
```

## 기본 denied 인데 example.org 도메인의 모든 호스트 허용
A 레코드 기준?

2.2
```
Order Deny,Allow
Deny from all
Allow from example.org
```

2.4
```
Require host example.org
```
