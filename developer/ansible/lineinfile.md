# ansible lineinfile
* /etc/services, .bashrc 등 파일에 필요한 라인을 추가하기 좋음

## example
```
- name: add local services title
  lineinfile: dest=/etc/services line="# Local services"
  sudo: True
- name: add syslogng
  lineinfile: dest=/etc/services line="syslogng    5514/tcp"
  sudo: True
``````

## 참고
http://docs.ansible.com/ansible/lineinfile_module.html