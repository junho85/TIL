# gradle plugins

## java
https://docs.gradle.org/current/userguide/java_plugin.html

```
plugins {
    id 'java'
}
```

jar 등의 tasks 를 쓸 수 있게 된다.

project layout 을 잡아 준다.

기본은 src/main/java 등의 설정

바꿔줄 수도 있다.
```
sourceSets {
    main {
        java {
            srcDirs = ['src/java']
        }
        resources {
            srcDirs = ['src/resources']
        }
    }
}
```

## idea
https://docs.gradle.org/current/userguide/idea_plugin.html

```
plugins {
    id 'idea'
}
```

## sonarqube
https://plugins.gradle.org/plugin/org.sonarqube

```
plugins {
  id "org.sonarqube" version "2.7.1"
}
```


## jacoco
https://docs.gradle.org/current/userguide/jacoco_plugin.html

```
plugins {
    id 'jacoco'
}
```

## eclipse
https://docs.gradle.org/current/userguide/eclipse_plugin.html
```
plugins {
    id 'eclipse'
}
```