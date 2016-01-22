# ansible diff
ansible 의 주요 기능은 배포이지만 기존 배포된 내용과 diff 를 떠 볼 수 있는 기능을 제공한다.
일반적으로 수정한 내용을 배포 하면 되겠지만 가끔 배포규칙을 잘 모르는 누군가가 다른 곳에서 배포를 했거나 서버에 직접 들어가서 파일을 수정 했을 수도 있다
그래서 배포를 하기 전에 diff 를 한번 돌려 보는 것이 좋다.


```
ansible-playbook foo.yml --check --diff
```

ex)
```
~/ansible  ansible-playbook -i hosts labs.yml --ask-pass --check --diff
SSH password:

PLAY [labs] *******************************************************************

GATHERING FACTS ***************************************************************

ok: [127.0.0.1]

TASK: [copy test file] ********************************************************
--- before: /Users/junho85/test/test.txt
+++ after: /Users/junho85/ansible/test.txt
@@ -1 +1,2 @@
 hello
+world

changed: [127.0.0.1]

PLAY RECAP ********************************************************************
127.0.0.1                  : ok=2    changed=1    unreachable=0    failed=0
```

## 참고
* http://docs.ansible.com/ansible/playbooks_checkmode.html
* http://www.randomhacks.co.uk/ansible-diff-function/