# wordpress

## local 에 설치한 wordpress 의 관리자 비밀번호 초기화 하기
* 로컬에 설치한 wordpress 의 비밀번호를 잊었을 때 비밀번호를 바꾸는 방법.
* DB에 접속한다. 보통 phpmyadmin 을 많이 사용할 것이다. http://localhost/phpmyadmin/
* wordpress db 찾아서 들어가서 wp_users 테이블을 확인 한다.
* user_login 이 아이디이고 user_pass 에 암호가 MD5 로 암호화 되어서 저장 되어 있을것이다.
* user_pass 를 MD5 Function 기능을 이용해서 새로운 비밀번호로 업데이트해서 바꾼다.
* 참고: [How to Reset WordPress Admin Password on Localhost 2016.11.21](https://www.wpbeginner.com/wp-tutorials/how-to-reset-wordpress-admin-password-on-localhost/)