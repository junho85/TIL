# encoding

## MIME::Base64
* 이메일을 작성 할 때 MIME Base64 로 인코딩 해 주는게 가장 무난하다.
* 그냥 보내면 이메일 서비스나 클라이언트에서 제대로 표시를 못해줄수 있다.
  * 예를 들면 euc-kr 이 기본인 시스템에 utf-8 로 메일을 보내면 제대로 표현을 못해주곤 한다.
* Base64 인코딩을 하려면 기본적으로 MIME::Base64::encode 함수로 인코딩 하면 된다.
* 이메일에서 사용 할 때는 인코딩 결과에 `=?UTF-8?B?{인코딩된값}?=` 형식으로 만들어야 되는데 `encode("MIME-B", $content)` 이런식으로 하면 편리하다.  
* 인코딩 된 값을 디코딩 하려면 반대로 하면 된다.
* `MIME::Base64::decode("{인코딩된값"});`
* `decode("MIME-B", "{인코딩된값}");`

```perl
#!/usr/bin/perl

use strict;
use warnings;
use utf8;

use MIME::Base64;

use Encode qw(decode encode encode_utf8);

my $content = "안녕하세요. 반갑습니다. 오늘은 또 무슨일이 생길까?";

print encode_utf8(qq{=== MIME::Base64::encode(encode_utf8("$content"))\n});
print MIME::Base64::encode(encode_utf8($content));
print "\n";
# 7JWI64WV7ZWY7IS47JqULiDrsJjqsJHsirXri4jri6QuIOyYpOuKmOydgCDrmJAg66y07Iqo7J28
# 7J20IOyDneq4uOq5jD8=

print "=== encode MIME-B name\n";
print encode("MIME-B", $content);
print "\n\n";
# =?UTF-8?B?7JWI64WV7ZWY7IS47JqULiDrsJjqsJHsirXri4jri6QuIOyYpOuKmOydgCA=?=
#  =?UTF-8?B?65iQIOustOyKqOydvOydtCDsg53quLjquYw/?=

print "=== decode\n";
print encode_utf8(decode("MIME-B", "=?UTF-8?B?7JWI64WV7ZWY7IS47JqULiDrsJjqsJHsirXri4jri6QuIOyYpOuKmOydgCA=?=
 =?UTF-8?B?65iQIOustOyKqOydvOydtCDsg53quLjquYw/?="));
print "\n\n";
# 안녕하세요. 반갑습니다. 오늘은 또 무슨일이 생길까?

print "=== MIME::Base64::decode\n";
print MIME::Base64::decode("7JWI64WV7ZWY7IS47JqULiDrsJjqsJHsirXri4jri6QuIOyYpOuKmOydgCDrmJAg66y07Iqo7J28
7J20IOyDneq4uOq5jD8=");
print "\n\n";
# 안녕하세요. 반갑습니다. 오늘은 또 무슨일이 생길까?
```