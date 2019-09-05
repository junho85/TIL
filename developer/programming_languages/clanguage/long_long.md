# long long

빌드 하다 보니 아래와 같은 경고가 보임
```
something.c:391: warning: integer constant is too large for ‘long’ type
```

#define DFT_QUOTA_UNLIMITED 10737418240  // KB, 10TB = 10737418240KB

quota = DFT_QUOTA_UNLIMITED * 1024LL;	// 1TB

LL 붙임 

#define DFT_QUOTA_UNLIMITED 10737418240LL  // KB, 10TB = 10737418240KB

https://90nam.tistory.com/38