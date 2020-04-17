# ansible service
```
# Example action to start service httpd, if not running
- service: name=httpd state=started

# Example action to stop service httpd, if running
- service: name=httpd state=stopped

# Example action to restart service httpd, in all cases
- service: name=httpd state=restarted

# Example action to reload service httpd, in all cases
- service: name=httpd state=reloaded

# Example action to enable service httpd, and not touch the running state
- service: name=httpd enabled=yes

# Example action to start service foo, based on running process /usr/bin/foo
- service: name=foo pattern=/usr/bin/foo state=started

# Example action to restart network service for interface eth0
- service: name=network state=restarted args=eth0
```

```
- service: name=network state=restarted args=eth0
```

## example
```
- hosts: prod
  user: junho85
  tasks:
  - name: restart apache2
    service:
      name: apache2
      state: restarted
```

```
$ ansible-playbook labs.yml -i hosts
```



## references
http://docs.ansible.com/ansible/service_module.html
