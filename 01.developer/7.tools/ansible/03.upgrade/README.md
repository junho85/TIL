# ansible upgrade

## 1.x to 2.0
* [Ansible 2.0 Porting Guide](https://docs.ansible.com/ansible/latest/porting_guides/porting_guide_2.0.html)

### escape \ 사용 주의
```
# Syntax in 1.9.x
- debug:
    msg: "{{ 'test1_junk 1\\\\3' | regex_replace('(.*)_junk (.*)', '\\\\1 \\\\2') }}"
# Syntax in 2.0.x
- debug:
    msg: "{{ 'test1_junk 1\\3' | regex_replace('(.*)_junk (.*)', '\\1 \\2') }}"

# Output:
"msg": "test1 1\\3"
```

## 1.8.4 -> 2.9.1
* 직접 변경 하면서 기록

### sudo 는 become 으로 바뀜

```
sudo: yes, sudo: True
```
->
```
become: yes
```
