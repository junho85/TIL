# jansson
* c, cpp 용 json 라이브러리

## 설치
* osx
```bash
brew install jansson
```

* yum
```bash
sudo yum install jansson-devel
```

* 직접 빌드
```bash
http://www.digip.org/jansson/releases/jansson-2.11.tar.gz
```

```bash
./configure
make
sudo make install
```

## json 만들기 예제
```cpp
#include <stdio.h>
#include <string.h>

#include <jansson.h>

int main() {
    json_t *root = json_object();
    json_t *json_arr = json_array();

    json_object_set_new(root, "id", json_integer(1));
    json_object_set(root, "id", json_integer(2));
    json_object_set_new(root, "name", json_string("june"));

    json_array_append(json_arr, json_integer(1));
    json_array_append(json_arr, json_integer(2));
    json_array_append(json_arr, json_integer(3));
    json_array_append(json_arr, json_integer(4));

    json_object_set_new(root, "scores", json_arr);

    json_t *data = json_object();
    json_object_set_new(data, "id", json_integer(1));
    json_object_set_new(data, "name", json_string("june"));

    json_object_set_new(root, "data", data);

    char *result_string = json_dumps(root, 0);

    printf("%s\n", result_string);
    json_decref(root);

    return 0;
}
```

```json
{"id": 2, "name": "june", "scores": [1, 2, 3, 4], "data": {"id": 1, "name": "june"}}
```

## References
* https://jansson.readthedocs.io/en/latest/gettingstarted.html