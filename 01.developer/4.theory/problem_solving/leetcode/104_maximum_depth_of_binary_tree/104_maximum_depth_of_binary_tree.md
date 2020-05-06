# 104. Maximum Depth of Binary Tree
2진 트리에서 가장 깊은 깊이값 구하기

root 가 None 이면 깊이는 0

왼쪽과 오른쪽의 깊이를 구한다. 0이 나올때 까지 구하다가 None 이 나오면 그 때 부터 1씩 더하면서 빠져나온다. 그리고 왼쪽과 오른쪽의 깊이중 더 깊은 값을 반환한다.

## References
* [Finding the maximum depth of a binary tree](https://www.educative.io/edpresso/finding-the-maximum-depth-of-a-binary-tree)
