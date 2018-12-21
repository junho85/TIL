# C - libcurl 로 이메일 발송하기. SMTP
* libcurl 로 손쉽게 SMTP 로 이메일을 발송 할 수 있다.
* 다만, 수신자가 여러명일 때 한명이라도 실패 하면 통째로 실패 하게 되는데, 부분 실패를 허용하는 방법을 지원하고 있지 않다.
* 이 문제는 이미 curl 에서도 알고 있는 이슈인데 언제 기능이 추가 될지는 미정이다. https://github.com/curl/curl/issues/2483

```cpp
#include <stdio.h>
#include <string.h>
#include <curl/curl.h>

int sendmail(const char *from, const char **rcpts, const char *filepath) {
    CURL *curl;
    CURLcode res = CURLE_OK;
    struct curl_slist *recipients = NULL;

    FILE *fp;
    fp = fopen(filepath, "r");

    if (!fp) {
        return -1;
    }

    curl = curl_easy_init();
    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "smtp://mx1.hanmail.net");

        curl_easy_setopt(curl, CURLOPT_MAIL_FROM, from);

        int i = 0;
        while (rcpts[i]) {
            recipients = curl_slist_append(recipients, rcpts[i]);
            i++;
        }

        curl_easy_setopt(curl, CURLOPT_MAIL_RCPT, recipients);

        curl_easy_setopt(curl, CURLOPT_READDATA, fp);
        curl_easy_setopt(curl, CURLOPT_UPLOAD, 1L);

        curl_easy_setopt(curl, CURLOPT_VERBOSE, 1);

        res = curl_easy_perform(curl);

        if (res != CURLE_OK)
            fprintf(stderr, "curl_easy_perform() failed: %s\n",
                    curl_easy_strerror(res));

        curl_slist_free_all(recipients);

        curl_easy_cleanup(curl);
    }

    fclose(fp);

    return (int) res;
}

int main(void) {
    const char *from = "sender@junho85.pe.kr";
    const char *recipients[] = {"junho85@daum.net", "jworld2000@daum.net", NULL};
    const char *filepath = "../test.eml";

    int ret = sendmail(from, recipients, filepath);
    printf("ret %d\n", ret);

    return 0;
}
```