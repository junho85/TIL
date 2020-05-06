# tcpdump - http 패킷

## http get 패킷
```
sudo /usr/sbin/tcpdump -s 0 -A -vv 'tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420'
```
```
sudo tcpdump -A -s 0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)'
```

## http post 패킷
```
sudo tcpdump -A -s 0 'tcp port 49155 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)'
```

## References
* [Looking at HTTP requests using tcpdump](https://coderwall.com/p/tladjw/looking-at-http-requests-using-tcpdump)
* [Use TCPDUMP to Monitor HTTP Traffic](https://sites.google.com/site/jimmyxu101/testing/use-tcpdump-to-monitor-http-traffic)