# Google Code Jam 2019 Round1A
```

```

```
def dfs(t, r, c, forbidden):
  free = {(x, y) for x in range(r) for y in range(c) if t[x][y] == 0}
  if len(free) == 0:
    return t
  for x, y in (free-forbidden):
    t[x][y] = len(free)
    f = {(i, y) for i in range(r)}
    f |= {(x, j) for j in range(c)}
    for i in range(min(x, y)+1):
      f.add((x-i, y-i))
    for i in range(min(r-x, c-y)):
      f.add((x+i, y+i))
    for i in range(min(x+1, c-y)):
      f.add((x-i, y+i))
    for i in range(min(r-x, y+1)):
      f.add((x+i, y-i))
    if dfs(t, r, c, f): return t
    t[x][y] = 0

def solve(r, c):
  t = [[0]*c for _ in range(r)]
  return dfs(t, r, c, set())

for t in range(int(input())):
  print('Case #%d: ' % (t+1), end='')
  r, c = map(int, input().split())
  res = solve(r, c)
  if res:
    print('POSSIBLE')
    ans = [None]*(r*c)
    for i in range(r):
      for j in range(c):
        ans[res[i][j]-1] = (i, j)
    for x, y in ans:
      print(x+1, y+1)
  else:
    print('IMPOSSIBLE')
```

## References
* [](https://codingcompetitions.withgoogle.com/codejam/submissions/0000000000051635/a2V2aW5zb2dv)
  * 20위 python3 로 작성
