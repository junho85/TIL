# Velocity - Java Servlet 연동 방법

1. velocity*.jar 라이브러리 파일들 임포트
2. web.xml 설정
VelocityViewServlet
3. velocity.properties 설정
4. tools.xml - toolbox 설정

## 1. velocity*.jar 라이브러리 파일들 임포트


## 2. web.xml 설정
```
<servlet>
  <servlet-name>velocity</servlet-name>
  <servlet-class>
    org.apache.velocity.tools.view.VelocityViewServlet
  </servlet-class>

  <init-param>
    <param-name>org.apache.velocity.toolbox</param-name>
    <param-value>/WEB-INF/tools.xml</param-value>
  </init-param>

  <init-param>
    <param-name>org.apache.velocity.properties</param-name>
    <param-value>/WEB-INF/velocity.properties</param-value>
  </init-param>
</servlet>

<servlet-mapping>
  <servlet-name>velocity</servlet-name>
  <url-pattern>*.vm</url-pattern>
</servlet-mapping>
```

## 3. velocity.properties 설정


## 4. tools.xml - toolbox 설정

## References
* [](https://velocity.apache.org/tools/devel/view-servlet.html)
* [VelocityLayoutServlet (VLS) Overview](https://velocity.apache.org/tools/devel/view-layoutservlet.html)
* [Class VelocityViewServlet](https://velocity.apache.org/tools/devel/apidocs/org/apache/velocity/tools/view/VelocityViewServlet.html)
