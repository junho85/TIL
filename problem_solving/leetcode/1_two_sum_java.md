# 1. Two Sum

## Java 8
### 테스트코드
```java
package leetcode;

import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class PS1TwoSumTest {

    @Test
    public void twoSum() {
        Solution solution = new Solution();

        int[] nums = new int[]{2,7,11,15};
        int[] result = solution.twoSum(nums, 9);
        assertThat(result).contains(0).contains(1);

        nums = new int[]{3,2,4};
        result = solution.twoSum(nums, 6);
        assertThat(result).contains(1).contains(2);

        nums = new int[]{3,3};
        result = solution.twoSum(nums, 6);
        assertThat(result).contains(0).contains(1);

        nums = new int[]{2,5,5,11};
        result = solution.twoSum(nums, 10);
        assertThat(result).contains(1).contains(2);
    }
}
```
### 단순 풀이
* ArrayList 로 바꾼다음 하나하나 찾는다.
* 77 ms, 6.67%
* 별로 효과적인 방법이 아니다.
* 복잡도 O(n^2)
```java
package leetcode;

import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];

        List<Integer> listNums = new ArrayList<>();

        for (int num : nums) {
            listNums.add(num);
        }

        int length = listNums.size();
        for (int i=0; i<listNums.size(); i++) {
            Integer num = listNums.get(i);
            List<Integer> subList = listNums.subList(i + 1, length);

            int index = subList.indexOf(target - num);
            if (index != -1) {
                result[0] = i;
                result[1] = index + i + 1;
            }
        }

        return result;
    }
}

public class PS1TwoSum {
    public static void main(String[] args) {
        Solution solution = new Solution();

        int[] nums = new int[]{2,7,11,15};
        int[] result = solution.twoSum(nums, 9);
        System.out.println(result[0]);
        System.out.println(result[1]);
        System.out.println();

        nums = new int[]{3,2,4};
        result = solution.twoSum(nums, 6);
        System.out.println(result[0]);
        System.out.println(result[1]);
        System.out.println();
    }
}
```

### HashMap 이용
* HashMap 에 넣은 다음 찾는다.
* 찾은 index 가 기준 index 와 달라야 한다.
* 4 ms, 93.67%
```java
package leetcode;

import java.util.*;

class Solution {
    /**
     * hashmap 으로 개선
     * @param nums
     * @param target
     * @return
     */
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];

        Map<Integer, Integer> mapNums = new HashMap<>();

        int length = nums.length;
        for (int i = 0; i < length; i++) {
            mapNums.put(nums[i], i);
        }

        for (int i = 0; i < length; i++) {
            int findNum = target - nums[i];
            Integer foundIndex = mapNums.get(findNum);
            if (foundIndex != null && foundIndex != i) {
                result[0] = i;
                result[1] = foundIndex;
                return result;
            }
        }

        return result;
    }
}
```