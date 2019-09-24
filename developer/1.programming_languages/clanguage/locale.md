# c locale
* 한글

## References
* [7.4 How Programs Set the Locale](https://www.gnu.org/software/libc/manual/html_node/Setting-the-Locale.html)
```c
#include <stddef.h>
#include <locale.h>
#include <stdlib.h>
#include <string.h>

void
with_other_locale (char *new_locale,
                   void (*subroutine) (int),
                   int argument)
{
  char *old_locale, *saved_locale;

  /* Get the name of the current locale.  */
  old_locale = setlocale (LC_ALL, NULL);

  /* Copy the name so it won’t be clobbered by setlocale. */
  saved_locale = strdup (old_locale);
  if (saved_locale == NULL)
    fatal ("Out of memory");

  /* Now change the locale and do some stuff with it. */
  setlocale (LC_ALL, new_locale);
  (*subroutine) (argument);

  /* Restore the original locale. */
  setlocale (LC_ALL, saved_locale);
  free (saved_locale);
}
```
* [C library function - setlocale()](https://www.tutorialspoint.com/c_standard_library/c_function_setlocale.htm)
* [setlocale 사용법](https://darkpgmr.tistory.com/6)
* [[C/C++] Locale 에 의존적인 함수들 2014.01.15](https://blog.naver.com/isentator/10183690935)
  * 윈도우 프로그래밍
  * printf_s 는 상관 없지만 _tprintf_s 는 locale 설정 해줘야 됨.
  * 독립 실행형 C 라이브러리 함수?
  * http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.dui0349bk/Chdfdcai.html
* [setlocale](http://www.cplusplus.com/reference/clocale/setlocale/)