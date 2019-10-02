# postgresql

## installation
```
brew install postgresql
```

psql 커맨드도 사용 할 수 있게 된다.

## allow ip
* 참고: [How to allow remote connections to PostgreSQL database server 2015.12.15](https://bosnadev.com/2015/12/15/allow-remote-connections-postgresql-database-server/)



## table list
```postgresql
\list
\dt *.*
```

```postgresql
\c 
```

## create database
e.g. garden database
```
create database garden;
```

## create user (add user)
```
CREATE USER garden_admin with encrypted password '...';
```

## grant
```
grant all privileges on database garden to garden_admin;
```

## create table


## References
* [Creating user, database and adding access on PostgreSQL 2017.03.14](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e)