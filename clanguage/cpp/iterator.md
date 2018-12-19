# iterator

## iterator 끼리 마이너스 연산을 하면 거리를 구할 수 있다.
* index 를 구할 때 사용예. 1,2,3,4,5 에서 3의 위치를 구한다. index 를 0부터 시작해서 결과는 2
```cpp
    vector<int> nums {1,2,3,4,5};
    auto low = lower_bound(nums.begin(), nums.end(), 3);
    cout << low - nums.begin() << endl;
```

## ++it is better than it++ in a for loop
* it++ 은 기존 값을 저장해두기 때문에 비효율적이다. ++it 를 쓰면 조금 더 빠르다.
```cpp
T T::operator++(int)
{
  T old( *this ); // remember our original value
  ++*this;        // always implement postincrement
                  //  in terms of preincrement
  return old;     // return our original value
}
```

```cpp
    for (auto it = nums.begin(); it != nums.end(); ++it) {
        cout << *it << endl;
    }
```

* 참고: https://stackoverflow.com/questions/1077026/incrementing-iterators-it-more-efficient-than-it

## References
* http://www.cplusplus.com/reference/iterator/
