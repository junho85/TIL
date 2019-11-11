# python - yaml

## installation
```
pip install pyyaml
```

## sample
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


## References
* [Reading and Writing YAML to a File in Python](https://stackabuse.com/reading-and-writing-yaml-to-a-file-in-python/)