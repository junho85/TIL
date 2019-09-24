# 1. Two Sum

## array 에 넣고 검색
* 780 ms, faster than 3.76%
* 기존에 해 왔던 방식이랑 거의 비슷한데 등수가 썩 좋지는 않음.

```javascript
var twoSum = function(nums, target) {
    for (const [index, num] of nums.entries()) {
        const find_num = target - num;

        let find_result = nums.slice(index + 1).findIndex(n => n === find_num);
        if (find_result !== -1) {
            let found_index = find_result + index + 1;
            let result = [index, found_index];
            return result;
        }
    }
};
```