# ansible replace

## telnet disable
```
- name: disable telnet
  replace: dest=/etc/xinetd.d/telnet regexp='(\s+)disable(\s+)= no' replace='\1disable\2= yes'
  sudo: True
```

## references
http://docs.ansible.com/ansible/replace_module.html
