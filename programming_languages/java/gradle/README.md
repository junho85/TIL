# gradle

## plugin
* [plugin](plugin.md)

## configuration build.gradle



## spring boot
* https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/html/
```
plugins {
	id 'org.springframework.boot' version '2.1.7.RELEASE'
}
```

## SonarQubePlugin

```
Build file '/Users/junho85/IdeaProjects/someproject/build.gradle' line: 19
A problem occurred evaluating root project 'someproject'.
> Failed to apply plugin [id 'org.sonarqube']
   > Could not create plugin of type 'SonarQubePlugin'.
      > Could not generate a decorated class for class org.sonarqube.gradle.SonarQubePlugin.
         > org/gradle/listener/ActionBroadcast
```


## java.lang.UnsupportedOperationException

```
FAILURE: Build failed with an exception.

* What went wrong:
java.lang.UnsupportedOperationException
> java.lang.UnsupportedOperationException (no error message)

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

Deprecated Gradle features were used in this build, making it incompatible with Gradle 5.0.
See https://docs.gradle.org/4.8.1/userguide/command_line_interface.html#sec:command_line_warnings

CONFIGURE FAILED in 0s
```

gradle 버전 2 쓰다가 4 로 올라와서 기능들이 동작하지 않아서 그런듯.

build.gradle 파일을 마이그레이션을 해 주어야 될 가능성이 높다.

```
buildscript {
    repositories {
        mavenLocal()
        mavenCentral()
    }
    dependencies {
        classpath("org.springframework.boot:spring-boot-gradle-plugin:1.2.5.RELEASE")
    }
}


apply plugin: 'java'
apply plugin: 'maven'
apply plugin: 'eclipse'
apply plugin: 'idea'
apply plugin: 'spring-boot'

jar {
    baseName = 'java_study'
    version = '0.1.0'
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    // group:name:version

    // spring
    compile("org.springframework.boot:spring-boot-starter-amqp")
    compile("org.springframework.boot:spring-boot-starter-web")
    compile("org.springframework.boot:spring-boot-starter-actuator")

    compile("com.fasterxml.jackson.core:jackson-databind")
    compile("org.projectlombok:lombok:1.14.8")
    compile("org.apache.httpcomponents:httpclient:4.5.1")

    // https://mvnrepository.com/artifact/org.apache.commons/commons-lang3
    compile group: 'org.apache.commons', name: 'commons-lang3', version: '3.9'


    compile group: 'dnsjava', name: 'dnsjava', version: '2.1.7'

    // test
    testCompile("org.springframework.boot:spring-boot-starter-test")
}
```

```
task wrapper(type: Wrapper) {
    gradleVersion = '2.3'
}

```

* [How to fix Gradle 4.4/4.7 + JDK 10 issue on IntelliJ IDEA 2018.1.x 2018.06.05](https://iwillteachyoukotlin.com/2018/06/05/fix-gradle-4-4-4-7-jdk-10-intellij-idea-2018-1/)
