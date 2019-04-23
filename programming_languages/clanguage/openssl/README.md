# openssl

## HMAC - Hash-based Message Authentication Code
```
메시지 다이제스트 알고리듬 5(MD-5), SHA-1 등 반복적인 암호화 해시 기능을 비밀 공용키와 함께 사용하며, 체크섬을 변경하는 것이 불가능하도록 한 키 기반의 메시지 인증 알고리듬. 해시 기반 메시지 인증 코드(HMAC)를 사용하는 체크섬 알고리듬을 HMAC-MD4, HMAC-SHA라 한다.
```
출처: http://100.daum.net/encyclopedia/view/55XXXXX22058

### example
* 출처: // http://www.askyb.com/cpp/openssl-hmac-hasing-example-in-cpp/
```c
#include <stdio.h>
#include <string.h>
#include <openssl/hmac.h>

int main() {
    // The key to hash
    char key[] = "012345678";

    // The data that we're going to hash using HMAC
    char data[] = "hello world";

    // Using sha1 hash engine here.
    // You may use other hash engines. e.g EVP_md5(), EVP_sha224, EVP_sha512, etc
    unsigned char *digest = HMAC(EVP_sha1(), key, strlen(key), (unsigned char *) data, strlen(data), NULL, NULL);

    // Be careful of the length of string with the choosen hash engine. SHA1 produces a 20-byte hash value which rendered as 40 characters.
    // Change the length accordingly with your choosen hash engine
    char mdString[20];
    for (int i = 0; i < 20; i++)
        sprintf(&mdString[i * 2], "%02x", (unsigned int) digest[i]);

    printf("HMAC digest: %s\n", mdString);

    return 0;
}
```


### References
* http://100.daum.net/encyclopedia/view/55XXXXX22058
* https://en.wikipedia.org/wiki/HMAC
* [해시 기반 메시지 인증 코드](http://100.daum.net/encyclopedia/view/55XXXXX22058)