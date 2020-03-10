# 107. Binary Tree Level Order Traversal II - Python

## Recursive
result 에 계속 추가해 주는 방식입니다. depth level 을 기억하고 있다가 해당 depth level 이 배열에 값을 추가해줍니다.
```
class Solution:
    def levelOrderBottom(self, root: TreeNode):
        result = []
        self.traverse(root, result, 0)
        result = list(reversed(result))
        return result

    def traverse(self, root: TreeNode, result, level):
        if root is None:
            return

        currlist = []
        if root.val is not None:
            if level < len(result):
                currlist = result[level]
            else:
                result.append(currlist)
            currlist.append(root.val)

        if root.left is not None:
            self.traverse(root.left, result, level + 1)

        if root.right is not None:
            self.traverse(root.right, result, level + 1)
```
