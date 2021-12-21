# 4. ESAb ATAd (1pts, 9pts, 16pts)

## 문제
```
Last year, a research consortium had some trouble with a distributed database system that sometimes lost pieces of the data. You do not need to read or understand that problem in order to solve this one!

The consortium has decided that distributed systems are too complicated, so they are storing B bits of important information in a single array on one awesome machine. As an additional layer of security, they have made it difficult to obtain the information quickly; the user must query for a bit position between 1 and B, and then they receive that bit of the stored array as a response.

Unfortunately, this ultra-modern machine is subject to random quantum fluctuations! Specifically, after every 1st, 11th, 21st, 31st... etc. query is sent, but before the response is given, quantum fluctuation causes exactly one of the following four effects, with equal probability:

25% of the time, the array is complemented: every 0 becomes a 1, and vice versa.
25% of the time, the array is reversed: the first bit swaps with the last bit, the second bit swaps with the second-to-last bit, and so on.
25% of the time, both of the things above (complementation and reversal) happen to the array. (Notice that the order in which they happen does not matter.)
25% of the time, nothing happens to the array.
Moreover, there is no indication of what effect the quantum fluctuation has had each time. The consortium is now concerned, and it has hired you to get its precious data back, in whatever form it is in! Can you find the entire array, such that your answer is accurate as of the time that you give it? Answering does not count as a query, so if you answer after your 30th query, for example, the array will be the same as it was after your 21st through 30th queries.
```
작년 한 연구 컨소시엄은 분산 데이터베이스 시스템에 문제가 있었습니다. 때때로 데이터 조각을 잃어버렸습니다. 이 문제를 해결하기 위해 시스템 문제를 이해할 필요는 없습니다.
컨소시엄은 분산 시스템이 너무 복잡하다고 결정했습니다. 그래서 그들은 중요한 정보를 B bits의 단일 배열에 저장하고 있습니다. 추가 보안 레이어로 인해 정보를 빨리 얻기가 어렵게 되었습니다. 사용자는 1에서B 사이의 비트 위치를 쿼리 한 다음 저장된 어레이의 해당 비트를 응답으로 받습니다.

불행히도 이 초 현대식 기계는 임의의 양자 변동에 영향을 받습니다. 특히, 1, 11, 21, 31, ... 번째 마다요. 쿼리가 전송 되었지만 응답값이 주어지기 전에 양자 변동이 다음 4가지 효과 중 하나를 발생시킵니다.

* 25% 확율로 배열이 보충됩니다. 모든 0이 1이 되고 반대도 마찬가지입니다. (1이 0이 된다는거?)
* 25% 확율로 배열이 역전됩니다. 첫번재 비트는 마지막으로 가고 두번째는 마지막-1 위치로 갑니다.
* 25% 확율로 위의 두가지가 일어납니다.
* 25%의 확율로 아무일도 일어나지 않습니다.



## 입력과 출력
interactive 문제 입니다. 참고 [What is an interactive problem?](https://codingcompetitions.withgoogle.com/codejam/faq#interactive-problems)

정수 T와 B로 라인을 읽습니다.
T는 테스트 케이스 개수, B는 배열의 비트수

T개의 테스틀르 수행합니다.

1~B 사이의 정수 P를 포함한 한줄을 출력합니다.  
