# wordpress

## 회원가입 가능한 사이트로 만들기
* 설정 -> 멤버쉽 -> 누구나 가입할 수 있습니다. 체크 후 저장
* https://junho85.pe.kr/1258

## local 에 설치한 wordpress 의 관리자 비밀번호 초기화 하기
* 로컬에 설치한 wordpress 의 비밀번호를 잊었을 때 비밀번호를 바꾸는 방법.
* DB에 접속한다. 보통 phpmyadmin 을 많이 사용할 것이다. http://localhost/phpmyadmin/
* wordpress db 찾아서 들어가서 wp_users 테이블을 확인 한다.
* user_login 이 아이디이고 user_pass 에 암호가 MD5 로 암호화 되어서 저장 되어 있을것이다.
* user_pass 를 MD5 Function 기능을 이용해서 새로운 비밀번호로 업데이트해서 바꾼다.
* 참고: [How to Reset WordPress Admin Password on Localhost 2016.11.21](https://www.wpbeginner.com/wp-tutorials/how-to-reset-wordpress-admin-password-on-localhost/)


## 카페24
* 파일 업로드 사이즈 제한 변경하기
* .htaccess 파일에
```
php_value upload_max_filesize 64M
php_value post_max_size 64M
php_value max_execution_time 300
php_value max_input_time 300
```
* test.php 파일 만들어서 확인
```php
<?php phpinfo() ?> 
```
  * upload_max_filesize 확인
  

* [카페24의 PHP 7 환경에서 파일 업로드 크기 변경 및 DB 임포트](https://www.thewordcracker.com/basic/%EC%B9%B4%ED%8E%9824%EC%9D%98-php-7-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%81%AC%EA%B8%B0-%EB%B3%80%EA%B2%BD/)