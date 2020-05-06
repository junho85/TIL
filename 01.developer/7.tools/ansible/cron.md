# ansible cron

```
- cron: name="clean log"
        minute="0"
        hour="2"
        job="/work/clean_log.sh > /dev/null"
```

## 참고
http://docs.ansible.com/ansible/cron_module.html
