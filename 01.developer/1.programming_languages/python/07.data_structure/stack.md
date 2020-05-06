# python stack
stack 이라는 자료구조는 마지막에 넣을것을 먼저 꺼내는 Last-In/First-Out (LIFO) 방식의 자료구조입니다. 비어 있는 stack 을 [] 라고 표현했을 때, stack 에 1이라는 데이터를 하나 넣으면(push) [1] 가 됩니다. 2, 3을 차례로 넣으면 [1,2,3] 이 됩니다. 여기서 데이터를 꺼내면(pop) 3이 나옵니다. stack 은 [1,2] 이 됩니다. 또 하나의 데이터를 꺼내면 2가 나오고 stack 은 [1] 이 됩니다.

정리하자면 stack 이라는 자료구조는 데이터를 넣으면 순서대로 쌓이고 꺼낼때는 마지막에 넣은 데이터를 먼저 꺼내게 됩니다. stack 에 데이터를 쌓는 것을 push 라고 하고 데이터를 꺼내는 것을 pop 이라고 합니다.

python 에서는 stack 이라는 자료구조가 따로 존재하지 않기 때문에 일반적으로는 그냥 list 자료구조를 이용합니다. 다음 코드로 빈 stack 을 만들어 줍니다.
```
stack = []
```

데이터를 넣는 것이 push 라고 했는데 python list 에 push 라는 메소드는 존재하지 않습니다. 대신 데이터를 추가 할 때 사용하는 함수인 append 


## References
* [Stack in Python](https://www.geeksforgeeks.org/stack-in-python/)
