# django

## root path 접근시 app 으로 redirect 시켜 주기
* 도메인이 http://garden4.junho85.pe.kr 을 사용하고 있을 때, attendance 라는 앱에 접근하려면 면 /attendance 로 접근해야 됩니다. 그런데 / 로 접근 했을 때 attendance 르 redirect 해주고 싶으면 아래와 같이 하면 됩니다. 마지막에 빈 path 접근시 RedirectView 를 이용해서 url="/attendance/" 로 설정해 주면 됩니다. http://garden4.junho85.pe.kr 로 접속하면 자동으로 http://garden4.junho85.pe.kr/attendance/ 로 바뀝니다.
```python
from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('attendance/', include('attendance.urls')),
    path('', RedirectView.as_view(url="/attendance/")),
]
```