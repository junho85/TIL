# perl cgi

## End of script output before headers
```
[Fri Nov 22 11:41:59.766841 2019] [cgid:error] [pid 3300] [client 172.26.*.*:65028] End of script output before headers: get_issues_worklogd.json.pl
```
만약 이런 오류가 난다면 확인 해 볼 부분


* 실행권한문제
```
chmod +x filename
```

* 필요 모듈이 설치 되어 있지 않는 경우

error_log 를 열어 보면
```
Can't locate JIRA/Client/Automated.pm in @INC (you may need to install the JIRA::Client::Automated module) (@INC contains: /Users/junho85/perl5/perlbrew/perls/perl-5.18.2/lib/site_perl/5.18.2/darwin-2level /Users/junho85/perl5/perlbrew/perls/perl-5.18.2/lib/site_perl/5.18.2 /Users/junho85/perl5/perlbrew/perls/perl-5.18.2/lib/5.18.2/darwin-2level /Users/junho85/perl5/perlbrew/perls/perl-5.18.2/lib/5.18.2 .) at /Users/ju
nho85/WebstormProjects/some_project/jira/api/get_issues_worklogd.json.pl line 12.
BEGIN failed--compilation aborted at /Users/junho85/WebstormProjects/some_project/jira/api/get_issues_worklogd.json.pl line 12.
```

JIRA::Client::Automated 가 없는 케이스라 sudo cpan JIRA::Client::Automated 로 해결함