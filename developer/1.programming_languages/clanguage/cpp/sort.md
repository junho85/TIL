# sort
* vector 를 정렬 할 때 사용한다.

## example
```cpp
#include <algorithm>
#include <vector>
#include <iostream>

using namespace std;

int main() {
    vector<int> nums({1,3,2,5,4});
    
    sort(nums.begin(), nums.end());
    
    for (auto it = nums.begin(); it != nums.end(); ++it) {
        cout << *it << endl;
    }
    return 0;
}
```

result
```
1
2
3
4
5
```

```cpp
default (1)	
template <class RandomAccessIterator>
  void sort (RandomAccessIterator first, RandomAccessIterator last);
custom (2)	
template <class RandomAccessIterator, class Compare>
  void sort (RandomAccessIterator first, RandomAccessIterator last, Compare comp);
```

## References
* http://www.cplusplus.com/reference/algorithm/sort/