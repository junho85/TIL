# python - yaml

## installation
```
pip install pyyaml
```

## sample
member.yaml
```
developer:
  - june
  - hello
  - world
```

```
import yaml

with open('members.yaml') as file:
    members = yaml.load(file, Loader=yaml.FullLoader)
    print(members)
```

```
{'developer': ['june', 'hello', 'world']}
```

## 정리
* [python - pyyaml 기본 사용법 2019.11.11](https://junho85.pe.kr/1451)

## References
* [PyYAML](https://pypi.org/project/PyYAML/)
* [%YAML 1.2](https://yaml.org/)
* [Reading and Writing YAML to a File in Python](https://stackabuse.com/reading-and-writing-yaml-to-a-file-in-python/)