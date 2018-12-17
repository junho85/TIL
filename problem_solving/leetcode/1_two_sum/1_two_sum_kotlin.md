# 1. Two Sum
* kotlin 풀이

## 테스트코드
```kotlin
package leetcode

import org.junit.Test
import org.assertj.core.api.Assertions.assertThat

class PS1TwoSum {
    @Test
    fun test() {
        val solution = Solution()
        assertThat(solution.twoSum(intArrayOf(2,7,11,15), 9)).contains(0).contains(1)
        assertThat(solution.twoSum(intArrayOf(3, 2, 4), 6)).contains(1).contains(2)
        assertThat(solution.twoSum(intArrayOf(3, 3), 6)).contains(0).contains(1)
        assertThat(solution.twoSum(intArrayOf(2, 5, 5, 11), 10)).contains(1).contains(2)
    }
}
```
## 풀이
* hashmap 이용
* 220 ms, 85.89%

```kotlin
package leetcode

import org.junit.Test
import org.assertj.core.api.Assertions.assertThat

class PS1TwoSum {
    class Solution {
        fun twoSum(nums: IntArray, target: Int): IntArray {
            val result = IntArray(2)
            val mapNums = HashMap<Int, Int>()
            nums.forEachIndexed { index, item ->
                mapNums.put(item, index)
            }

            nums.forEachIndexed { index, item ->
                val findNum = target - item;
                val foundIndex = mapNums.get(findNum)
                if (foundIndex != null && foundIndex != index) {
                    result[0] = index
                    result[1] = foundIndex
                    return result
                }
            }
            return result
        }
    }

    @Test
    fun test() {
        val solution = Solution()
        assertThat(solution.twoSum(intArrayOf(2,7,11,15), 9)).contains(0).contains(1)
        assertThat(solution.twoSum(intArrayOf(3, 2, 4), 6)).contains(1).contains(2)
        assertThat(solution.twoSum(intArrayOf(3, 3), 6)).contains(0).contains(1)
        assertThat(solution.twoSum(intArrayOf(2, 5, 5, 11), 10)).contains(1).contains(2)
    }
}
```