# whois

## installation
```
sudo yum install jwhois
```

## usage
```
$ whois junho85.pe.kr
[Querying whois.krnic.net]
[whois.krnic.net]
query : junho85.pe.kr


# KOREAN(UTF8)

도메인이름                  : junho85.pe.kr
등록인                      : 김준호
책임자                      : 김준호
책임자 전자우편             : junho85@gmail.com
등록일                      : 2008. 12. 11.
최근 정보 변경일            : 2018. 02. 27.
사용 종료일                 : 2022. 12. 11.
정보공개여부                : N
등록대행자                  : (주)가비아(http://www.gabia.co.kr)
DNSSEC                      : 미서명

1차 네임서버 정보
   호스트이름               : ns.gabia.co.kr
   IP 주소                  : 211.234.118.50

2차 네임서버 정보
   호스트이름               : ns1.gabia.co.kr
   IP 주소                  : 121.78.117.39
   호스트이름               : ns.gabia.net

네임서버 이름이 .kr이 아닌 경우는 IP주소가 보이지 않습니다.


# ENGLISH

Domain Name                 : junho85.pe.kr
Registrant                  : Kim Jun Ho
Administrative Contact(AC)  : Kim Jun Ho
AC E-Mail                   : junho85@gmail.com
Registered Date             : 2008. 12. 11.
Last Updated Date           : 2018. 02. 27.
Expiration Date             : 2022. 12. 11.
Publishes                   : N
Authorized Agency           : Gabia, Inc.(http://www.gabia.co.kr)
DNSSEC                      : unsigned

Primary Name Server
   Host Name                : ns.gabia.co.kr
   IP Address               : 211.234.118.50

Secondary Name Server
   Host Name                : ns1.gabia.co.kr
   IP Address               : 121.78.117.39
   Host Name                : ns.gabia.net

'19.11월 KISA의 인터넷주소센터 나주 이전으로 WHOIS 검색 서비스의 IP주소가 변경될 예정입니다. 동 서비스 이용시 도메인(whois.kisa.or.kr)을 이용하여 접속하시기 바랍니다.

- KISA/KRNIC WHOIS Service -
```

## References
* [Install whois On CentOS Linux Using Yum Package Manager](https://www.question-defense.com/2011/02/07/install-whois-on-centos-linux-using-yum-package-manager)
* [jwhois, Whois client](https://www.gnu.org/software/jwhois/manual/jwhois.html)