# perlbrew
* [perlbrew](https://perlbrew.pl/)

## installation
```
\curl -L https://install.perlbrew.pl | bash
```

```
Append the following piece of code to the end of your ~/.zshenv and start a
new shell, perlbrew should be up and fully functional from there:

    source ~/perl5/perlbrew/etc/bashrc
```

```
perlbrew install perl-5.18.2
perlbrew switch perl-5.18.2
```

## list
설치된 perl 확인

```
$ perlbrew list
  perl-5.18.2
* perl-5.26.1
```

## switch
기본 perl 변경
```
perlbrew switch 5.18.2
```