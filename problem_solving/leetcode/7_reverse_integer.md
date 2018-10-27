# 7. Reverse Integer
* integer 숫자를 뒤집기
* 자릿수 만큼 10 으로 나누면서 루프 돌면서, 결과값에는 10으로 나눈 나머지를 더하면서 10씩 곱해 주면 된다.
* 주의할 점은 오버플로우 검사를 해 주어야 되는데, 간단하게 long 타입으로 바꾸고 10 으로 곱한값이 INT_MAX 보다 크면 오버플로우로 판단하고 0 을 리턴 하도록 처리함.

```cpp
class Solution {
public:
    int reverse(int x) {
        bool is_minus = false;
        if (x < 0) {
            is_minus = true;
            x *= -1;
        }

        int result = 0;
        while (x > 0) {
            int num = x % 10;
            int prev = result;
            if (result != 0) {
                // check overflow
                if (long(result) * 10 > INT_MAX) {
                    return 0;
                }
                result *= 10;
            }

            result += num;

            x /= 10;
        }
        if (is_minus) {
            result *= -1;
        }
        return result;
    }
};
```