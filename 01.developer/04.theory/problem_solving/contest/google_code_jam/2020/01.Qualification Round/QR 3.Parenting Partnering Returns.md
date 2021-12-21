# 3. Parenting Partnering Returns (7pts, 12pts)

## 문제
```
Cameron and Jamie's kid is almost 3 years old! However, even though the child is more independent now, scheduling kid activities and domestic necessities is still a challenge for the couple.

Cameron and Jamie have a list of N activities to take care of during the day. Each activity happens during a specified interval during the day. They need to assign each activity to one of them, so that neither of them is responsible for two activities that overlap. An activity that ends at time t is not considered to overlap with another activity that starts at time t.

For example, suppose that Jamie and Cameron need to cover 3 activities: one running from 18:00 to 20:00, another from 19:00 to 21:00 and another from 22:00 to 23:00. One possibility would be for Jamie to cover the activity running from 19:00 to 21:00, with Cameron covering the other two. Another valid schedule would be for Cameron to cover the activity from 18:00 to 20:00 and Jamie to cover the other two. Notice that the first two activities overlap in the time between 19:00 and 20:00, so it is impossible to assign both of those activities to the same partner.

Given the starting and ending times of each activity, find any schedule that does not require the same person to cover overlapping activities, or say that it is impossible.
```
카메론과 제이미의 아이는 거의 3살입니다. 아이가 좀 더 독립적이 되긴 했지만 아이의 활동을 스케쥴링하는건 쉽지 않네요.
카메론과 제이미는 N개의 활동 리스트를 가지고 있습니다. 각 활동은 하루라는 시간 안에 이루어집니다. 그들은 둘 중 한명에게 활동을 할당합니다. 시간이 겹치지 않도록 하기 위해서이지요. 시간 t에 끝나는 활동은 시간 t에 시작할 수 있습니다.

예를 들어 제이미와 카메론은 3개의 활동을 커버해야 합니다. 하는 18:00 에서 20:00, 다른 하나는 19:00 에서 21:00, 그리고 나머지 하나는 22:00에서 23:00입니다.

18:00 ~ 20:00
19:00 ~ 21:00
22:00 ~ 23:00

가능한 하나의 방법은 제이미가 19:00에서 21:00의 일과를 처리하고, 나머지 일과를 카메론이 처리합니다. 또 다른 가능한 방법은 카메론이 18:00에서 20:00일과를 처리하고 나머지 두개를 제이미가 처리합니다. 알아차렸겠지만 처음 두개의 활동이19:00에서 20:00에 겹칩니다. 그래서 그 두개의 일과를 한명에게 할당하는건 불가능합니다.

주어진 활동 스케쥴을 만들어 보시기 바랍니다. 불가능한 경우 불가능하다고 하면 됩니다.
 
## 입력
T 테스트 케이스 개수
N 어사인 되어야 할 액티비티들 개수
Si, Ei - 시작, 끝

## 출력
각 테스트 케이스별로 한줄씩 출력합니다. `Case #x: y`형식입니다. x는 테스트 케이스 번호이고 1부터 시작합니다. y는 불가는 하면 "IMPOSSIBLE"을 출력하고 가능하면 N개의 문자로 출력합니다. y는 카메론이면 C, 제미이이면 J입니다.

여러 답이 있는 경우 그 중 하나를 출력하면 됩니다.

## 제한
Time limit: 20 seconds per test set.
Memory limit: 1GB.
1 ≤ T ≤ 100.
0 ≤ Si < Ei ≤ 24 × 60.

### Test set 1 (Visible Verdict)
2 ≤ N ≤ 10.

### Test set 2 (Visible Verdict)
2 ≤ N ≤ 1000.

## 예제
입력
```
4
3
360 480
420 540
600 660
3
0 1440
1 3
2 4
5
99 150
1 100
100 301
2 5
150 250
2
0 720
720 1440
```

출력
```
Case #1: CJC
Case #2: IMPOSSIBLE
Case #3: JCCJJ
Case #4: CC
```
