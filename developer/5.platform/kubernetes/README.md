# kubernetes

## kubectl

### get pods
* 네임스페이스 내 모든 파드의 목록을 조회합니다. 
```
$ kubectl get pods
NAME                                         READY   STATUS    RESTARTS   AGE
some-project-6cc466d675-8rtzl                1/1     Running   0          21d
...
```

### logs
```
$ kubectl logs -f some-project-6cc466d675-8rtzl
```

## References
* [kubectl 치트 시트](https://kubernetes.io/ko/docs/reference/kubectl/cheatsheet/)