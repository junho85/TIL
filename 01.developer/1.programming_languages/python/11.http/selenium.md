# selenium 으로 github 최근 contributions 캡쳐 하기

## selenium python
https://selenium-python.readthedocs.io/

## 예제 실행 해 보기
* https://selenium-python.readthedocs.io/getting-started.html
* 드라이버가 없다고 실패

## 브라우저별 webdriver 를 받아야 함
* ChromeDriver - WebDriver for Chrome
  * http://chromedriver.chromium.org/downloads

## 스샷 저장 하는 방법 확인
https://pythonspot.com/category/selenium/page/2/
```python
driver.save_screenshot("screenshot.png")
```

## github DOM 구조 확인

## html 출력 하기

## github 인증샷 자동화
* 블로그: https://junho85.pe.kr/1271

```python
print(elem.get_attribute('innerHTML'))
```

```python
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

from PIL import Image
from io import BytesIO

driver = None
try:
    driver = webdriver.Chrome('/Users/junho85/Downloads/chromedriver')
    driver.get("https://github.com/junho85")

    elem = driver.find_element_by_class_name("js-yearly-contributions")
    last_date_elem = elem.find_element_by_tag_name("svg").find_elements_by_tag_name("rect")[-1]
    location = last_date_elem.location

    driver.set_window_size(1200, 500)
    driver.execute_script("window.scrollBy(0, 800);")
    ActionChains(driver).move_to_element(last_date_elem).perform()

    png = driver.get_screenshot_as_png()
    img = Image.open(BytesIO(png))

    img.crop((1900, 150, 2300, 550)).save("screenshot.png")
finally:
    driver.close()

```

## 기타
2초 sleep
```python
import time

time.sleep(2)
```


## References
* https://selenium-python.readthedocs.io/getting-started.html
* https://sites.google.com/a/chromium.org/chromedriver/getting-started
* https://pythonspot.com/category/selenium/
