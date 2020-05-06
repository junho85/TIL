# python cgi

## 일단 cgi 를 활성화 해 주어야 한다.
```bash
$ sudo a2enmod cgi
Enabling module cgi.
To activate the new configuration, you need to run:
  systemctl restart apache2
```
  
## apache 설정 방법
* ExecCGI 옵션을 켜 준다.
* cgi-script .py handler 를 추가 해 준다.
```
    <Directory /home/junho85/web/labs/til-hook>
        Options +ExecCGI
        AddHandler cgi-script .py
    </Directory>
```

## python 코드 작성 방법
```python
#!/usr/bin/env python3

import cgitb
cgitb.enable()

print("Content-Type: text/plain;charset=utf-8")
print()

print("Hello World!")
```

## References
* https://www.tutorialspoint.com/How-to-configure-Apache-for-Python-CGI-Programming
* https://www.linux.com/blog/configuring-apache2-run-python-scripts
* https://medium.com/@manivannan_data/python-cgi-example-install-and-simple-example-59e049128406
* https://docs.python.org/3.7/library/cgitb.html
