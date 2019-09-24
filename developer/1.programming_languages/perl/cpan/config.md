# cpan config
```
perl -MCPAN -eshell
o conf init
```

/Users/junho85/.cpan/CPAN/MyConfig.pm

## mirror
* http://mirror.kakao.com/CPAN/

## References
* [How to change the perl cpan repository location 2013.08.22](https://stackoverflow.com/questions/18389824/how-to-change-the-perl-cpan-repository-location)
* [perl cpan mirror site 변경 2009.10.23](https://rasskang.tistory.com/13)
  * /usr/lib/perl5/5.8.8/CPAN/Config.pm 의 urllist 수정 하라고 함.
  * 그런데 이 방식은 예전에 5.8.8 을 기본으로 설치 해주던 때의 기준이고 요즘은 안맞을 수 있음.