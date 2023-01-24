# limit
* OS 나 CPU bit 에 따라 달라질 수 있음.

## MS
<limits.h>에도 정의되어 있음.

* CHAR_BIT 8
  * char의 비트 수
* SCHAR_MIN -128
* SCHAR_MAX 127
* UCHAR_MAX 255(0xff)
* CHAR_MIN -128, /J 옵션이 사용된 경우, 0
* CHAR_MAX 127, /J 옵션이 사용된 경우, 255
* MB_LEN_MAX 5
  * 여러 문자 상수에서의 최대 바이트 수.
* SHRT_MIN -32768
  * short 형식 변수의 최소값.
* SHRT_MAX 32767
* USHRT_MAX 65535(0xffff)
* INT_MIN -2147483648
* INT_MAX 2147483647
* UINT_MAX 4294967295(0xffffffff)
* LONG_MIN -2147483648
* LONG_MAX 2147483647
* ULONG_MAX 4294967295(0xffffffff)
* LLONG_MIN -9223372036854775808
* LLONG_MAX 9223372036854775807
* ULLONG_MAX 18446744073709551615(0xffffffffffffffff)
  * 문자열로 표현하면 최대 20자

* 참고: [정수 제한](https://docs.microsoft.com/ko-kr/cpp/cpp/integer-limits?view=vs-2019)
