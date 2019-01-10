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

## json 파싱
```json
{
  "id": 1234,
  "name": "apple",
  "etc": "banana"
}
```
여기서 name 의 값을 가져 오자

```c
#include <stdio.h>

#include "jansson.h"

int main() {
    json_error_t error;

    char *json_string = "{\n"
                        "  \"id\": 1234,\n"
                        "  \"name\": \"apple\",\n"
                        "  \"etc\": \"banana\"\n"
                        "}";

    json_t *root = json_loads(json_string, 0, &error);

    if (!root) {
        fprintf(stderr, "error: on line %d: %s\n", error.line, error.text);
        return 1;
    }

    if (!json_is_object(root)) {
        fprintf(stderr, "error: root is not data\n");
        json_decref(root);
        return 1;
    }

    json_t *name = json_object_get(root, "name");

    if (!json_is_string(name)) {
        fprintf(stderr, "error: name is not an string\n");
        json_decref(root);
        return 1;
    }

    printf("name=%s\n", json_string_value(name));

    return 0;
}
```

## References
* https://jansson.readthedocs.io/en/latest/gettingstarted.html