# filebeat

## logging
* [Configure logging](https://www.elastic.co/guide/en/beats/filebeat/current/configuration-logging.html)
```
logging.level: info
logging.to_files: true
logging.files:
  path: /var/log/filebeat
  name: filebeat
  keepfiles: 7
  permissions: 0644
```

* logging.level
  * minimum log level 을 지정한다.
  * debug, info, warning, error 레벨이 있다.
  * 기본값은 info 이다.
  * debug
    * 로그 메시지와 상세 메시지, warning,s errors, critical errors 를 담는다.
    * selectors 로 구체적인 리스트를 명시 할 수 있는데 기본은 * 로 모든 디버그 메시지
  * info
  * warning
  * error
* logging.files
  * path
    * 기본값은 logs 디렉토리이다.
  * name
  * rotateeverybytes
    * 기본값은 10 MB 이다.
  * interval
    * 시간 기준 rotate 이다.
  * rotateonstartup
    * 기본값은 true 이다.
    