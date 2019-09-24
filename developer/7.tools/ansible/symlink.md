# ansible - symbolic link
```
- name: symbolic link
  file: src=/program/logstash-2.3.1 dest=/program/logstash state=link
```

## multiple and force
* multiple items with "with_items"
* "force=yes" means overwrite symbolic link
```
- name: copy lib 1.5.3 symbolic link files
  file: src={{ item.src }} dest=/program/lib.1.5.3/{{ item.dest }} state=link force=yes
  with_items:
    - { src: 'libsomething.so.1', dest: 'libsomething.so' }
```