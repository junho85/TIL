* ansible limit
## 1대만 배포 할고 싶을 때
--limit=hostname 을 사용한다

```
ansible-playbook -i hosts install.yml --limit=hostname1
```

## 30% 정도만 배포 하고 싶을 때
--limit 를 사용 하되 group name 을 적고 [0-10] 처럼 지정 해 주면 첫번째 서버 부터 10대를 선택한다는 의미
```
ansible-playbook -i hosts install.yml --limit real[1-30] --list-hosts --list-tasks
```

