# Servlet

## Servlet Context, Config
* [web.xml에 등록하지 않고 listener 구현하기(WebListener 어노테이션 사용) 2016.02.16](https://stackoverflow.com/questions/4223564/servletconfig-vs-servletcontext)

* [Difference between ServletConfig and ServletContext in Java 2013.02.02](http://www.java4s.com/java-servlet-tutorials/difference-between-servletconfig-and-servletcontext-in-java/)

* ServletConfig available in javax.servlet.*; package
* ServletConfig object is one per servlet class
* Object of ServletConfig will be created during initialization process of the servlet
* This Config object is public to a particular servlet only
* Scope: As long as servlet is executing, ServletConfig object will be available, it will be destroyed once the servlet execution is completed.
* We shoudl give request explicitly, in order to create ServletConfig object for the first time
* In web.xml - <init-param> tag will be appear under <servlet-class> tag

web.xml
```xml
<servlet>
    <servlet-name>ServletConfigTest</servlet-name>
    <servlet-class>com.stackoverflow.ServletConfigTest</servlet-class>
    <init-param>
        <param-name>topic</param-name>
        <param-value>Difference between ServletConfig and ServletContext</param-value>
    </init-param>
</servlet>
```

## Servlet Context
* ServletContext available in javax.servlet.*; package
* ServletContext object is global to entire web applicatoin
* Object of ServletContext will be created at the time of web applicatoin deployment
* Scope: As long as web application is executing, ServletContext object will be available, and it will be destroyed once the appliation is removed from the server.
* ServletContext object will be available even before giving the first request In weblxml - <context-param> tag will be appear under <web-app> tag

```xml
<context-param>
    <param-name>globalVariable</param-name>
    <param-value>com.stackoverflow</param-value>
</context-param>
```

## Servlet Config


## References
* https://nesoy.github.io/articles/2019-02/Servlet