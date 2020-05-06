# servlet version

## 3
web.xml 은 optional. xml 대신 annotation 이용 할 수 있다.
```java
package kr.pe.junho85;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/TestServlet")
public class TestServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h1>Hello World!</h1>");
    }
}
```

## 2.5
web.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <servlet>
        <servlet-name>TestServlet2</servlet-name>
        <servlet-class>kr.pe.junho85.TestServlet2</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>TestServlet2</servlet-name>
        <url-pattern>/TestServlet2</url-pattern>
    </servlet-mapping>

</web-app>
```

## References
* [What are the differences between Servlet 2.5 and 3?](https://stackoverflow.com/questions/1638865/what-are-the-differences-between-servlet-2-5-and-3)
