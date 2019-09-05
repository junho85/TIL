# oracle

## Primary Key (PK) 확인 방법

```sql
SELECT A.TABLE_NAME
     , A.CONSTRAINT_NAME
     , B.COLUMN_NAME
     , B.POSITION
FROM ALL_CONSTRAINTS A
   , ALL_CONS_COLUMNS B
WHERE A.TABLE_NAME = 'MY_TABLE'
  AND A.CONSTRAINT_TYPE = 'P'
  AND A.OWNER = B.OWNER
  AND A.CONSTRAINT_NAME = B.CONSTRAINT_NAME
ORDER BY B.POSITION;
```

```
TABLE_NAME	CONSTRAINT_NAME	COLUMN_NAME	POSITION
MY_TABLE	MY_TABLE_PK	ID	1
```

사용자에 따라서 사용할 수 있는 뷰가 달라진다. 쿼리가 실행 되지 않는다면 뷰를 바꿔서 조회해 본다.

* ALL_CONSTRAINTS 현재 사용자가 엑세스할 수 있는 테이블에 대한 제약 조건 정의
* USER_CONSTRAINTS 현재 사용자의 스키마에 있는 테이블에 대한 제약 조건 정의
* DBA_CONSTRAINTS 데이터베이스의 모든 제약 조건 정의

참고: [[오라클] PK 조회 방법 (Primary Key) 2019.01.04](https://gent.tistory.com/202)