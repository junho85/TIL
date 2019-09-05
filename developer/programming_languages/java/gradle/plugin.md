# gradle plugins

## java
https://docs.gradle.org/current/userguide/java_plugin.html

```
plugins {
    id 'java'
}
```

java 프로젝트이면 java plugin 을 설정해 두는 것이 좋다.

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

## groovy
https://docs.gradle.org/current/userguide/groovy_plugin.html
```
plugins {
    id 'groovy'
}
```

## spring boot
https://plugins.gradle.org/plugin/org.springframework.boot
```
plugins {
  id "org.springframework.boot" version "2.1.7.RELEASE"
}
```

https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/html/
```
plugins {
	id 'org.springframework.boot' version '2.1.7.RELEASE'
}
```

## net.researchgate.release
https://plugins.gradle.org/plugin/net.researchgate.release
Using the plugins DSL:
```
plugins {
  id "net.researchgate.release" version "2.8.1"
}
```

Using legacy plugin application
```
buildscript {
  repositories {
    maven {
      url "https://plugins.gradle.org/m2/"
    }
  }
  dependencies {
    classpath "net.researchgate:gradle-release:2.8.1"
  }
}

apply plugin: "net.researchgate.release"
```