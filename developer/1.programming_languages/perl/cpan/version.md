# cpan version
## 모듈 버전 확인 방법

```
$ perl -MDBD::Oracle -e 'print $DBD::Oracle::VERSION ."\n";'
1.80
```

```
$ sudo cpan -D DBD::Oracle
CPAN: Storable loaded ok (v2.41)
Reading '/root/.cpan/Metadata'
  Database was generated on Wed, 26 Feb 2020 10:56:06 GMT
DBD::Oracle
-------------------------------------------------------------------------
        CPAN: Module::CoreList loaded ok (v3.03)
(no description)
        M/MJ/MJEVANS/DBD-Oracle-1.80.tar.gz
        /usr/local/lib/perl5/site_perl/5.18.2/x86_64-linux/DBD/Oracle.pm
        Installed: 1.80
        CPAN:      1.80  up to date
        Martin J Evans (MJEVANS)
        mjevans@cpan.org
```
