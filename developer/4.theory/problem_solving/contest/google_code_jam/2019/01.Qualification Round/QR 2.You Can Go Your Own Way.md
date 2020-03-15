# You Can Go Your Own Way
* [You Can Go Your Own Way](https://codingcompetitions.withgoogle.com/codejam/round/0000000000051705/00000000000881da)

## 문제
세계에서 가장 쉬운 미로에 들어왔습니다. NxN개의 단위로 이루어진 격자로 이루어져 있습니다. 북서쪽에서 시작해서 남동쪽으로 도착해야합니다. 두가지의 이동만 가능합니다. 동쪽으로 이동하거 남쪽으로 이동할 수 있습니다. 어디로든 이동할 수 있으나 격자 밖으로는 나갈수 없습니다.

세계에서 처음으로 풀거라고 기뻐할 수 있겠지만 발자국들이 보이네요. 당신의 경쟁자인 Labyrinth Lydia가 이미 해결했습니다.

Labyrinth Lydia의 방식을 다시 사용하고 싶지는 않을 것입니다.

## 입력
첫번째 라인은 테스트 케이스 갯수입니다. T라고 합니다.
각 테스트 케이스는 두줄로 되어 있습니다. 첫번재 라인은 숫자값 N으로 미로의 크기입니다.
두번째 줄은 P로 2N-2 개의 문자들로 이루어져 있습니다. Labyrinth Lydia가 미로를 통과한 방법으로 E(동쪽)과 S(남쪽) 으로 표현합니다.

## 출력
각각의 테스트 케이스마다 한줄로 출력합니다. "Case #x: y"로 출력하며 x는 테스트 케이스 번호로 1부터 시작합니다. y는 2N-2개의 문자들로 구성된 미로 풀이입니다. E는 동쪽, S는 남쪽입니다. Labyrinth Lydia의 경로와 겹치면 안됩니다. 최소 한가지 이상의 답이 있다고 보증합니다.

## 제한
1<=T<=100
테스트당 15초
메모리 제한은 1GB
P는 N-1 개의 E문자와 N-1 개의 S문자로 구성되어 있습니다.

## 테스트셋1
2 ≤ N ≤ 10

## 테스트셋2
2 ≤ N ≤ 1000

## 테스트셋3
최대 10개의 케이스는 2 ≤ N ≤ 50000
그 외에는 2 ≤ N ≤ 10000

## 샘플
```
Input
2
2
SE
5
EESSSESE
 	
Output
Case #1: ES
Case #2: SEEESSES
```

## 풀이
아주 쉬운 문제네요. Labyrinth Lydia와 같은 위치에서 같은 방향으로 안가면 됩니다. 쉽게 생각해 보면 Labyrinth Lydia의 행동을 반대로 하면 됩니다. 그냥 Labyrinth Lydia가 동쪽으로 가면 남쪽으로 가고, 남쪽으로 가면 동쪽으로 가면 되는거죠.

```
T = int(input())

for idx in range(T):
    N = int(input())
    P = input()
    ans = ""
    for c in P:
        if c == "E":
            ans += "S"
        else:
            ans += "E"
    print("Case #" + str(idx + 1) + ": " + ans)
```

다른 풀이방법도 많겠지만 아마 가장 쉬운 방법이고 속도도 빠르고 메모리도 적게 먹을겁니다.
