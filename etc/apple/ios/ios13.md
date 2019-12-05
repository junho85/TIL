# ios 13

## private email

```
$ dig mx privaterelay.appleid.com +short
10 smtp1.privaterelay.appleid.com.
10 smtp3.privaterelay.appleid.com.
10 smtp2.privaterelay.appleid.com.
10 smtp4.privaterelay.appleid.com.
```

```
$ dig txt privaterelay.appleid.com +short
"v=spf1 ip4:17.58.36.86 ip4:17.58.36.87 ip4:17.58.38.0/24  ip4:17.58.23.0/24 -all"
```

icloud.com
```
$ dig mx icloud.com +short
10 mx4.mail.icloud.com.
10 mx5.mail.icloud.com.
10 mx3.mail.icloud.com.
10 mx6.mail.icloud.com.
10 mx2.mail.icloud.com.
10 mx1.mail.icloud.com.
```

```
$ dig txt icloud.com +short
"google-site-verification=knAEOH4QxR29I4gjRkpkvmUmP2AA7WrDk8Kq0wu9g9o"
"v=spf1 ip4:17.36.0.0/16 ip4:17.41.0.0/16 ip4:17.58.0.0/16 ip4:17.110.0.0/15 ip4:17.111.110.0/23 ip4:17.120.0.0/16 ip4:17.133.0.0/16 ip4:17.139.0.0/16 ip4:17.142.0.0/15 ip4:17.151.1.0/24" " ip4:17.158.0.0/15 ip4:17.162.0.0/15 ip4:17.164.0.0/16 ip4:17.171.37.0/24 ip4:17.172.0.0/16 ip4:17.179.168.0/23 ~all"
```

## Apple 로그인

* [Apple로 로그인 기능을 사용하는 방법](https://support.apple.com/ko-kr/HT210318)
* [Manage the apps you use with Sign in with Apple](https://support.apple.com/en-us/HT210426)
* [Apple로 로그인 사용 시 나의 이메일 가리기](https://support.apple.com/ko-kr/HT210425)
```
사용자와 개발자 모두에게 고유한 임의 이메일 주소가 제공되며 <unique-alphanumeric-string>@privaterelay.appleid.com과 같은 형식을 따릅니다.

예를 들어 j.appleseed@icloud.com이 Apple ID라면 특정 앱에 사용되는 고유의 임의 이메일 주소는 dpdcnf87nu@privaterelay.appleid.com과 같은 형태가 됩니다.
```
* [Communicating Using the Private Email Relay Service](https://developer.apple.com/documentation/signinwithapplejs/communicating_using_the_private_email_relay_service)