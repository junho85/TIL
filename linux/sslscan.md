# sslscan?

Command line util for Gathering TLS (previously SSL) information from specific host using openssl. Protocol and ciphers, vulnerability and so on.

## Installation

### OSX
```
brew install sslscan
```

## starttls SMTP Test

```
$ sslscan --starttls-smtp mx1.hanmail.net:25
Version: 1.11.11-static
OpenSSL 1.0.2f  28 Jan 2016

Connected to 211.231.108.46

Testing SSL server mx1.hanmail.net on port 25 using SNI name mx1.hanmail.net

  TLS Fallback SCSV:
Server does not support TLS Fallback SCSV

  TLS renegotiation:
Secure session renegotiation supported

  TLS Compression:
Compression disabled

  Heartbleed:
TLS 1.2 not vulnerable to heartbleed
TLS 1.1 not vulnerable to heartbleed
TLS 1.0 not vulnerable to heartbleed

  Supported Server Cipher(s):
Preferred TLSv1.2  128 bits  ECDHE-RSA-AES128-GCM-SHA256   Curve P-256 DHE 256
Accepted  TLSv1.2  128 bits  ECDHE-RSA-AES128-SHA256       Curve P-256 DHE 256
Accepted  TLSv1.2  128 bits  ECDHE-RSA-AES128-SHA          Curve P-256 DHE 256
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-GCM-SHA256     DHE 1024 bits
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-SHA256         DHE 1024 bits
Accepted  TLSv1.2  128 bits  DHE-RSA-AES128-SHA            DHE 1024 bits
Accepted  TLSv1.2  128 bits  AES128-GCM-SHA256
Accepted  TLSv1.2  128 bits  AES128-SHA256
Accepted  TLSv1.2  128 bits  AES128-SHA
Accepted  TLSv1.2  112 bits  DES-CBC3-SHA
Preferred TLSv1.1  128 bits  ECDHE-RSA-AES128-SHA          Curve P-256 DHE 256
Accepted  TLSv1.1  128 bits  DHE-RSA-AES128-SHA            DHE 1024 bits
Accepted  TLSv1.1  128 bits  AES128-SHA
Accepted  TLSv1.1  112 bits  DES-CBC3-SHA
Preferred TLSv1.0  128 bits  ECDHE-RSA-AES128-SHA          Curve P-256 DHE 256
Accepted  TLSv1.0  128 bits  DHE-RSA-AES128-SHA            DHE 1024 bits
Accepted  TLSv1.0  128 bits  AES128-SHA
Accepted  TLSv1.0  112 bits  DES-CBC3-SHA
Preferred SSLv3    128 bits  ECDHE-RSA-AES128-SHA          Curve P-256 DHE 256
Accepted  SSLv3    128 bits  DHE-RSA-AES128-SHA            DHE 1024 bits
Accepted  SSLv3    128 bits  AES128-SHA
Accepted  SSLv3    112 bits  DES-CBC3-SHA

  SSL Certificate:
Signature Algorithm: sha256WithRSAEncryption
RSA Key Strength:    2048

Subject:  mx1.hanmail.net
Altnames: DNS:mx1.daumkakao.com, DNS:alt.aspmx.daum.net, DNS:aspmx.daum.net, DNS:mx1.kakaocorp.com, DNS:mx2.hanmail.net, DNS:mx3.hanmail.net, DNS:mx4.hanmail.net, DNS:mx1.hanmail.net
Issuer:   Symantec Class 3 Secure Server CA - G4

Not valid before: Feb 29 00:00:00 2016 GMT
Not valid after:  Feb 28 23:59:59 2018 GMT
```

## options
```
$ sslscan --help
                   _
           ___ ___| |___  ___ __ _ _ __
          / __/ __| / __|/ __/ _` | '_ \
          \__ \__ \ \__ \ (_| (_| | | | |
          |___/___/_|___/\___\__,_|_| |_|


        1.11.11-static
        OpenSSL 1.0.2f  28 Jan 2016
Command:
  sslscan [Options] [host:port | host]

Options:
  --targets=<file>     A file containing a list of hosts to check.
                       Hosts can  be supplied  with ports (host:port)
  --sni-name=<name>    Hostname for SNI
  --ipv4, -4           Only use IPv4
  --ipv6, -6           Only use IPv6
  --show-certificate   Show full certificate information
  --no-check-certificate  Don't warn about weak certificate algorithm or keys
  --show-client-cas    Show trusted CAs for TLS client auth
  --show-ciphers       Show supported client ciphers
  --show-cipher-ids    Show cipher ids
  --show-times         Show handhake times in milliseconds
  --ssl2               Only check SSLv2 ciphers
  --ssl3               Only check SSLv3 ciphers
  --tls10              Only check TLSv1.0 ciphers
  --tls11              Only check TLSv1.1 ciphers
  --tls12              Only check TLSv1.2 ciphers
  --tlsall             Only check TLS ciphers (all versions)
  --ocsp               Request OCSP response from server
  --pk=<file>          A file containing the private key or a PKCS#12 file
                       containing a private key/certificate pair
  --pkpass=<password>  The password for the private  key or PKCS#12 file
  --certs=<file>       A file containing PEM/ASN1 formatted client certificates
  --no-ciphersuites    Do not check for supported ciphersuites
  --no-fallback        Do not check for TLS Fallback SCSV
  --no-renegotiation   Do not check for TLS renegotiation
  --no-compression     Do not check for TLS compression (CRIME)
  --no-heartbleed      Do not check for OpenSSL Heartbleed (CVE-2014-0160)
  --starttls-ftp       STARTTLS setup for FTP
  --starttls-imap      STARTTLS setup for IMAP
  --starttls-irc       STARTTLS setup for IRC
  --starttls-ldap      STARTTLS setup for LDAP
  --starttls-pop3      STARTTLS setup for POP3
  --starttls-smtp      STARTTLS setup for SMTP
  --starttls-mysql     STARTTLS setup for MYSQL
  --starttls-xmpp      STARTTLS setup for XMPP
  --starttls-psql      STARTTLS setup for PostgreSQL
  --xmpp-server        Use a server-to-server XMPP handshake
  --http               Test a HTTP connection
  --rdp                Send RDP preamble before starting scan
  --bugs               Enable SSL implementation bug work-arounds
  --timeout=<sec>      Set socket timeout. Default is 3s
  --sleep=<msec>       Pause between connection request. Default is disabled
  --xml=<file>         Output results to an XML file
                       <file> can be -, which means stdout
  --version            Display the program version
  --verbose            Display verbose output
  --no-cipher-details  Disable EC curve names and EDH/RSA key lengths output
  --no-colour          Disable coloured output
  --help               Display the  help text  you are  now reading

Example:
  sslscan 127.0.0.1
  sslscan [::1]

```

## timeout
```--timeout=<sec>```

```bash
$ sslscan --timeout=10000 --starttls-smtp mailfirewalls.pcci.edu:25
```

## TLS Fallback SCSV
* TODO

## TLS renegotiation
* TODO
* ```Secure session renegotiation supported``` ?
* [Transport Layer Security (TLS) Renegotiation Indication Extension](https://tools.ietf.org/html/rfc5746)


## TLS Compression
* TODO
* ```Compression disabled```

## 블로그 포스팅
* [sslscan - Collect TLS (previously SSL) information easily. Installation, starttls SMTP test](http://junho85.pe.kr/808)

## Related links
-   [https://github.com/ioerror/sslscan](https://github.com/ioerror/sslscan)
-   [https://github.com/rbsec/sslscan](https://github.com/rbsec/sslscan)
-   [https://github.com/DinoTools/sslscan](https://github.com/DinoTools/sslscan)

