# BST - Binary Search Tree
컴퓨터과학에서 이진 탐색 트리(Binary Search Tree 줄여서 BST)는 정렬된(ordered or sorted) 이진 탐색 트리라고도 불립니다. 이진 탐색 트리는 다음과 같은 특징이 있습니다.

* 모든 노드의 키는 유일합니다. 중복된 키를 갖는 노드는 없습니다.
* 왼쪽 서브트리의 키들은 루트의 키보다 작습니다.
* 오른쪽 서브트리의 키들은 루트의 키보다 큽니다.
* 서브트리들도 모두 이진 탐색 트리입니다.

트리노드를 python코드로 단순하게 표현해 보면 다음과 같습니다.
```
class TreeNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
```

## 검색
특정한 키를 가진 노드를 찾는 방법입니다. 루트노드에서 시작해서 해당 키가 있으면 해당 노드를 반환합니다. 없으면 None을 반환합니다. 찾으려는 키가 루트노드의 키보다 작으면 왼쪽으로, 크면 오른쪽으로 넘어갑니다. 이걸 재귀적으로 검색하면 됩니다.

## 삽입
먼저 키가 이미 있는지 검색합니다. 중복되면 안되니 있으면 삽입을 못합니다. 키가 일치하는 노드가 없다면 마지막 노드의 키보다 작으면 왼쪽, 크면 오른쪽에 노드를 삽입합니다.

## 삭제
자식노드가 없으면 해당 노드를 삭제합니다. 자식노드가 없는 노드를 리프노드라고 합니다. 자식노드가 1개인 노드라면 해당 노드를 삭제하고 해당 노드의 위치에 자식 노드를 끌어당깁니다. 자식노드가 2개라면 왼쪽 서브트리에서 가장 큰 값으로 대체하거나, 오른쪽 서브트리에서 가장 작은 값으로 대체하고, 대체할 때 사용한 노드를 삭제합니다. 삭제되는 노드가 또 자식노드를 가지고 있다면 삭제가 재귀적으로 수행됩니다.



## References
* [Binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree)
* [이진 탐색 트리](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%ED%83%90%EC%83%89_%ED%8A%B8%EB%A6%AC)
* [Binary Search Tree](https://www.geeksforgeeks.org/binary-search-tree-data-structure/)
