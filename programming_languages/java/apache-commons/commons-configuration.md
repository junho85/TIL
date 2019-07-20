# Apache Commons Configuration

## commons configuration2
### Maven
https://mvnrepository.com/artifact/org.apache.commons/commons-configuration2/2.5

2.5
```xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-configuration2</artifactId>
    <version>2.5</version>
</dependency>
```
https://mvnrepository.com/artifact/org.apache.commons/commons-configuration2
### Quick start guide
* [Quick start guide](https://commons.apache.org/proper/commons-configuration/userguide/quick_start.html)



### Reloading
* [Automatic Reloading of Configuration Sources](https://commons.apache.org/proper/commons-configuration/userguide/howto_reloading.html)

Automatic Reloading of Configuration Sources

Components for Reloading

ReloadingDetector 인터페이

https://commons.apache.org/proper/commons-configuration/apidocs/org/apache/commons/configuration2/reloading/package-summary.html


### Events

#### configuration request event
builder.getConfiguration() 이 호출 될 대 발생하는 이벤트
```java
// configuration request event
builder.addEventListener(ConfigurationBuilderEvent.CONFIGURATION_REQUEST, new EventListener<Event>() {
    @Override
    public void onEvent(Event event) {
        builder.getReloadingController().checkForReloading(null));
    }
});
```

checkForReloading 에서 실제 리로드 할 경우 true 를 리턴한다.
```java
if (builder.getReloadingController().checkForReloading(null)) {
    // 실제 리로드가 되었을 때 실행한 구문
}

```

checkForReloading 에서 실제로 리로드가 필요 할 때 ReloadingEvent 를 호출하게 된다.
```java
// reloading event
builder.getReloadingController().addEventListener(ReloadingEvent.ANY, new EventListener<ReloadingEvent>() {
    @Override
    public void onEvent(ReloadingEvent reloadingEvent) {
        System.out.println("====== reload...");
    }
});
```


## References
* https://commons.apache.org/proper/commons-configuration/userguide/quick_start.html
* [java의 properties 를 대치하는 PropertiesConfigurationcommons configuration 2014.04.22](https://www.lesstif.com/pages/viewpage.action?pageId=12943598)
  * 1.9 를 기준으로 하고 있음
* [스프링 properties 변경 감지하여 동적으로 로딩하기! 2016.09.29](https://kingbbode.tistory.com/17)
  * Apache Commons Configuration 관련 내용 있음
  * 1.10 버전을 기준으로 하고 있음. reload 기능은 1 버전이 더 간단하다고 함.
  