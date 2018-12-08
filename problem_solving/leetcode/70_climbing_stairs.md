# 70. Climbing Stairs
* https://leetcode.com/problems/climbing-stairs/

## 문제
* 계단을 오를 때 한칸이나 두칸으로 올라갈 수 있다.
* 2칸 이면 1칸 1칸 또는 2칸. 2가지
* 3칸 이면 1,1,1 또는 1,2 또는 2,1. 3가지
* 계단 수가 주어 지면 몇가지 방식으로 올라 갈 수 있는지 구하라

## 풀이
* 답의 패턴을 보니 피보나치 수열을 닮았다.
* 현재 값은 앞의 두 값의 합.
* 미리 결과 맵을 만들어 두고 값이 없으면 재귀적으로 앞의 값을 찾아 가는 방식
* 4 ms, 2.91%
* 생각보다 순위가 높지 않다. 다른 방안을 생각해 봐야 겠음.

```cpp
#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>
#include <map>
#include <set>
#include <stack>

using namespace std;

class Solution {
    map<int, int> result_map{
            {1, 1},
            {2, 2},
            {3, 3},
            {4, 5},
            {5, 8},
            {6, 13},
    };

public:
    int climbStairs(int n) {
        if (result_map.find(n) != result_map.end()) {
            return result_map[n];
        } else {
            // not found

            // get answer
            int result = climbStairs(n-1) + climbStairs(n-2);
            result_map[n] = result;
            return result;
        }
    }
};

int main() {

    Solution solution = Solution();

    assert(solution.climbStairs(1) == 1);
    assert(solution.climbStairs(2) == 2);
    assert(solution.climbStairs(3) == 3);
    assert(solution.climbStairs(4) == 5);
    assert(solution.climbStairs(5) == 8);
    assert(solution.climbStairs(6) == 13);

    return 0;
}

```