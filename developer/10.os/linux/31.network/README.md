# linux network

## tcp timeout
```
/proc/sys/net/ipv4/tcp_fin_timeout
```

## 방화벽, firewall
원격지 포트가 열렸는지 확인하는 방법

### curl -v
```
curl -v telnet://labs.junho85.pe.kr:80
```

Connected to 라고 나오면 접근 되는 것이다.
```
$ curl -v telnet://junho85.pe.kr:80
*   Trying 27.0.236.139:80...
* TCP_NODELAY set
* Connected to junho85.pe.kr (27.0.236.139) port 80 (#0)
```

### tcping

### nmap

### ssh -p

### nc -z
```
nc -z junho85.pe.kr 80
```

```
$ nc -z junho85.pe.kr 80
Connection to junho85.pe.kr port 80 [tcp/http] succeeded!
```

```
$ nc -z junho85.pe.kr 443
Connection to junho85.pe.kr port 443 [tcp/https] succeeded!
```

telnet

### References
* [](https://www.facebook.com/hnki0104/posts/2679641605489629)
