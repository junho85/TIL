# libcurl - urlencode - curl_easy_escape
* curl_easy_escape 함수를 이용하면 손쉽게 urlencode 를 할 수 있다.
* 대표적으로 ' ' 를 %20 으로 바꿔준다. url 로 잘 인식되도록 바꿔 주는 것이다.

```c
#include <stdio.h>
#include <curl/curl.h>
#include <string.h>

int main() {
    CURL *curl = curl_easy_init();
    if (curl) {
        char *string = "hello world";
        printf("%lu\n", strlen(string)); // 11

        char *output = curl_easy_escape(curl, string, strlen(string));
        if (output) {
            printf("Encoded: %s\n", output); // Encoded: hello%20world
            curl_free(output);
        }
    }
    return 0;
}
```

* [curl_easy_escape - URL encode the given string](https://curl.haxx.se/libcurl/c/curl_easy_escape.html)