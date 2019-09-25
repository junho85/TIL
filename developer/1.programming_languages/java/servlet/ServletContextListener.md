# ServletContextListener

웹어플리케이션을 구동할 때 초기화를 해서 들고 있고 싶은 정보가 있을 수 있다. 예를 들면 DB connection pool 을 미리 만들어 둔다던지, IP 를 기반으로 ACL (access control list) 를 파일 등 다른 곳에서 미리 불러온다거나 할 때 이용 할 수 있다.

그럴 때 ServletContextListener 인터페이스를 이용해서 구현해주면 된다.

## MyAppServletContextListener 예제
```java
public class MyAppServletContextListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        // print initialize message
        System.out.println("MyAppServletContextListener started");
        
        // load configurations
        MyAppConfig myAppConfig = new MyAppConfig();
        MyAppConfig.load();

        // put configurations to context attribute
        ServletContext servletContext = servletContextEvent.getServletContext();
        servletContext.setAttribute("config", myAppConfig);
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {

    }
}
```

## web.xml 예제
web.xml listener class 에 등록해 준다.
```xml
<web-app ...>
    <listener>
        <listener-class>kr.pe.junho85.listener.MyAppServletContextListener</listener-class>
    </listener>
</web-app>
```

## @WebListener
* servlet api 3 에서는 @WebListener 어노테이션을 사용할 수 있다. @WebListener 어노테이션을 사용하면 web.xml 에 listener 를 기입하지 않아도 알아서 등록된다.
```java
@WebListener
public class MyAppServletContextListener implements ServletContextListener {
   ...
```

## References
* [ServletContextListener Example](https://www.mkyong.com/servlet/what-is-listener-servletcontextlistener-example/)
* [web.xml에 등록하지 않고 listener 구현하기(WebListener 어노테이션 사용) 2016.02.16](https://nine01223.tistory.com/309)
```xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>3.0.1</version>
</dependency>
```