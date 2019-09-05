# 4. Median of Two Sorted Arrays

## 풀이
* 두 리스트 합치고 정렬하고 중간 값 찾기
* 61 ms, 14.34%
```java
package leetcode;

import org.junit.Test;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;

public class PS4MedianOfTwoSortedArrays {

    class Solution {
        public double findMedianSortedArrays(int[] nums1, int[] nums2) {
            // merge two arrays
            int[] merged = new int[nums1.length + nums2.length];
            System.arraycopy(nums1, 0, merged, 0, nums1.length);
            System.arraycopy(nums2, 0, merged, nums1.length, nums2.length);

            Arrays.sort(merged);

            int center = merged.length/2;
            if (merged.length % 2 == 0) {
                return (double)(merged[center-1] + merged[center])/2;
            } else {
                return merged[center];
            }
        }
    }

    @Test
    public void test() {
        Solution solution = new Solution();

        assertThat(solution.findMedianSortedArrays(new int[]{1,3}, new int[]{2})).isEqualTo(2.0);
        assertThat(solution.findMedianSortedArrays(new int[]{1,2}, new int[]{3,4})).isEqualTo(2.5);
    }
}

```