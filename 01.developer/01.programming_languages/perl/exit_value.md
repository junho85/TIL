# exit value
system 함수의 반환값은 실행한 커맨드의 종료 상태값입니다. 이 값은 $? 변수에도 저장됩니다. 그런데 이 값은 2바이트로 저장 되는데 상위 사이트에 들어갑니다. 그래서 >> 연산자를 이용하여 8비트 이동 시켜 주어야 합니다.



## References
* [Perl 스크립트를 종료하는 방법](https://ko.perlmaven.com/how-to-exit-from-perl-script)