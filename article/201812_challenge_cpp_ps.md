# C++ 로 Problem Solving 도전

## 소개
* 서버 개발하고 있는 june 입니다.
* c, perl, java 를 주로 씁니다.
* 요즘 신입공채 문제를 보면 제가 이 회사 다시 입사 할 수 있을까 걱정 됩니다.
  * 문제 예제 - 스마트한 프로도 https://programmers.co.kr/learn/courses/30/lessons/1840
* 초딩때 정보올림피아드 대회라는 걸 들어 본 적은 있지만 할 줄 몰라서 참가 해본적은 없음. 타자연습만 열심히... GW-BASIC 이란걸 하긴 했는데...
* 대딩때 교내에 ACM 대회가 열려서 3명 팀 꾸려서 나가보긴 했는데 망함. 그때 C 언어로 했었는데 입출력 처리 하는데만 시간 왕창 씀;; 그때 C++ 좀 더 공부 해둘걸...

## PS?
* Problem Solving 의 약자로 IT 쪽에서는 주로 알고리즘 문제 풀기를 지칭 하는 편입니다.
* IT 회사들 입사시 코딩 테스트에서도 많이 쓰입니다.

## 어쩌다 C++ 로 PS 를 하게 되었나?
* 원래 python 으로 풀어 보기 시작. python 좀 짱인듯.
* 카카오 블라인드 채용 2017년 문제를 보니 C++과 Java 만 지원되었음. 2018년에는 python 등 언어가 추가 됨.
* 레거시 시스템 고치가 보니 C 언어를 자주 쓰고 있는데, C++ 알아 두면 도움이 되지 않을까?

## C++?
* hello world 로 보는 C++
```cpp
#include <iostream>

using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}
```

## C++ 로 PS 어렵지 않을까?
* c 로 개발하고 있는 경험상, 기본 라이브러리에서 문자열 처리 하나 하기도 쉽지 않다.

### 문자열을 합치려면?
```cpp
    char str[80];
    strcpy(str, "hello ");
    strcat(str, "world! ");
    strcat(str, "nice to ");
    strcat(str, "meet you.");

    printf("%s\n", str);
```
* 80자 넘으려면 malloc 등 써야 됨.
* cpp 이라면
```cpp
    string str2 = "hello ";
    str2 += "world! ";
    str2 += "nice to ";
    str2 += "meet you.";

    cout << str2 << endl;
```
### 배열 두개를 합치려면?
```cpp
    const int a[] = {1, 2, 3, 4, 5};
    const int b[] = {6, 7, 8, 9, 0};

    int *c = array_concat(a, 5, b, 5);

    for (int i = 0; i < 10; i++) {
        printf("%d\n", c[i]);
    }

    free(c);
```
* cpp 이라면
```cpp
    int aa[] = {1, 2, 3, 4, 5};
    int bb[] = {6, 7, 8, 9, 0};
    int cc[10];

    int* i = copy(aa, aa + 5, cc);
    copy(bb, bb + 5, i);

    for (auto value : cc) {
        printf("%d\n", value);
    }
```

* cpp 에서는 그냥 array 보다는 vector 를 주로 사용한다.
```cpp
    vector<int> va{1, 2, 3, 4, 5};
    vector<int> vb{6, 7, 8, 9, 0};
    vector<int> vc;

    vc.insert(vc.end(), va.begin(), va.end());
    vc.insert(vc.end(), vb.begin(), vb.end());

    for (auto iter : vc) {
        cout << iter << endl;
    }
```

* 부록. python 이 웃음
```python
a = [1, 2, 3, 4, 5]
b = [6, 7, 8, 9, 0]
c = a + b
print(c)
```

### 배열에서 특정 값의 위치를 찾으려면
```cpp
    vector<int> nums {1,2,3,4,5};
    auto low = lower_bound(nums.begin(), nums.end(), 3);
    cout << low - nums.begin() << endl;
```
* lower_bound 는 binary search 방식으로 검색. (lower_bound 는 #include <algorithm> 을 해 주어야 쓸 수 있다.)
* 찾은 iterator 에서 begin 으로 구한 처음 iterator 를 빼주면 index 를 알 수 있음.
* 다만 lower_bound 로 찾은 위치가 실제로 그 값의 위치가 아닐 수 있음. 3을 찾는데 3이 없으면 4의 위치가 나온다.
* 그래서 찾은 값이 찾으려는 값과 같은지 확인 해 봐야 한다.

### map
```cpp
    map<int, int> map_nums{
            {1, 1},
            {2, 2},
            {3, 3},
            {4, 5},
            {5, 8},
            {6, 13},
    };

    map_nums[7] = 21;

    auto iter = map_nums.find(7);
    cout << iter->first << endl; // key
    cout << iter->second << endl; // value
```

### assert
```cpp
    vector<int> nums1({1,3});
    vector<int> nums2({2});
    assert(solution.findMedianSortedArrays(nums1, nums2) == 2.0);

    vector<int> nums3({1,2});
    vector<int> nums4({3,4});
    assert(solution.findMedianSortedArrays(nums3, nums4) == 2.5);
```

### 기타
* queue 등 도 있음.

## C 언어 관련 내용 부연
* C 에는 기본 라이브러리가 부실함
* 보통 util 라이브러리 만들어서 쓰곤 함.
  * 아파치 APR 등과 같은 외부 라이브러리는 PS 에서 쓰기 어려움.

## C++ 로 풀어 보았다
* 생각보다 할만함?
* STL Standard Template Library 가 잘 되어 있음.
  * vector - dynamic array. 보통 이거 많이 쓰게 됨.
  * list, slist - 자료 정리 하다 알았는데 아직 써본적은 없음.
  * queue
  * set
  * algorithm
* C 보다는 좋은거 같은데 다른 언어들에 비하면 특별히 가독성이 좋아 보이지는 않는다.
  * vector 가 array 라는게 익숙하지 않음.
  * map 에서 key 로 검색하려면 find를 쓰는데 find 결과에서 first 가 key 이고, second 는 value 이다.
  * pair<X, Y> 를 리턴하고 이건 first, second 를 가지고 있음. first 는 X, second 는 Y
  * first 는 key. second 는 value. 왜 그냥 key, value 라고 안한걸까?
  * clojure 에도 first, second 를 쓴다고 한다. 예전부터 오는 관습 같은 건가?
* java 보다 좋은 점들도 보인다.
  * auto 를 이용하면 자료형 타이핑을 줄일 수 있다. 
  * java 는 10 부터 같은 기능을 하는 var 가 생김. (java 발전 속도가 생각보다 더딘편)
    * https://dzone.com/articles/finally-java-10-has-var-to-declare-local-variables

## ++it is better than it++ in a for loop
++ operator 는 기존 값을 저장해두기 때문에 비효율적이다.
```cpp
T T::operator++(int)
{
  T old( *this ); // remember our original value
  ++*this;        // always implement postincrement
                  //  in terms of preincrement
  return old;     // return our original value
}
```

## 테스트?
* assert 이용. 리스트 비교 등은 좀 불편함.
* googletest 를 도입해 보고 싶다.

## 빠른 속도?
* java 대비 해서 생각보다 cpp 가 빠르지 않다? 라고 하기 보다는 생각보다 java 가 빠르다는걸 느끼게 됨.
* kotlin 은 생각보다 느림.
* python 은 더 느림.

## 문제를 풀어 봅시다 leetcode 1. Two Sum
* https://leetcode.com/problems/two-sum/
* 2중 for 문으로 풀어 보기
* 개선. map 이용해서 개선하기.

## 공부가 필요해
* 알고리즘 스터디를 해야 겠다.
* 동적계획법 (Dynamic Programming)?
