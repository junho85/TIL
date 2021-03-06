# set
* set 은 중복되지 않은 값만 저장한다.
* 같은 값은 저장하지 않는다.
  * 같은 값을 저장할 경우 결과의 second 값이 false 이다.
* nullptr 은 저장할 수 없다.

## 응용
* 중복된 값이 입력 되었는지 여부 확인 용도

## 예제

```cpp
#include <iostream>
#include <string>
#include <set>
#include <iterator>

using namespace std;

int main() {
    set<string> myset;
    myset.insert("hello");

    auto result = myset.insert("world");
    cout << *result.first << endl; // world
    cout << result.second << endl; // true

    result = myset.insert("world"); // duplicate value is ignored
    cout << *result.first << endl; // world
    cout << result.second << endl; // false
    myset.insert("!");

    myset.insert("apple");

//    myset.insert(1); // can't insert not string
//    myset.insert(nullptr); // can't insert null


    // all elements
    /*
!
apple
hello
world
     */
    cout << "== begin ==" << endl;
    for (set<string>::iterator it = myset.begin(); it != myset.end(); it++) {
        cout << *it << endl;
    }
    cout << "== end ==" << endl;

    // simple way
    cout << "== begin ==" << endl;
    for (const auto &it : myset) {
        cout << it << endl;
    }
    cout << "== end ==" << endl;

    // get specific element
    set<string>::iterator it = myset.begin();
    advance(it, 0);
    cout << *it << endl; // !
    advance(it, 1);
    cout << *it << endl; // apple

    // c++11
    cout << *std::next(myset.begin(), 0) << endl; // !
    cout << *std::next(myset.begin(), 1) << endl; // apple

    return 0;
}
```

## references
* http://www.cplusplus.com/reference/set/
* http://www.cplusplus.com/reference/set/set/
* http://www.cplusplus.com/reference/set/set/insert/
* http://www.cplusplus.com/reference/set/set/set/
* http://www.cplusplus.com/reference/iterator/advance/
* https://stackoverflow.com/questions/20477545/element-at-index-in-a-stdset