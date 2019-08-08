# Gradle Release

## plugin 설정
```yml
plugins {
  id 'net.researchgate.release' version '2.6.0'
}
```

## 설명
* 릴리즈태그를 자동으로 관리 함
* 릴리즈 태그를 따면 gradle.properties 파일 안에 version 필드의 값이 자동으로 업데이트 됨
* build.gradle의 버전에도 반영되기 때문에 수동으로 버전을 올릴 일이 발생하더라도 반드시 gradle.properties 파일의 버전을 관리해야됨
* gradle release 실행해서 물어보는대로 태그를 기입하면(수정할 태그 등) 완료 된다.
* 작업 다 하고 커밋 하다고 머지 까지 다 하고 마지막에 하는 건가?

* 로컬에서 git pull upstream master 를 해서 최신 상태로 맞춘다
* gradle release 실행
* 버전 추천 해 주면 그냥 엔터 치면 됨. (e.g. 1.3.15) 변경하려면 직접 기입 해 줌
* 다음 릴리즈 버전 물어 보면 엔터 치면 됨. (e.g. 1.3.16-SNAPSHOT)
* 자동으로 작업이 끝나면 태그가 위에서 입력된 버전 (e.g. 1.3.15) 로 되어 있고 커밋도 되어 있음
* gradle.properties 의 버전도 변경되어서 커밋 되어 있음 (e.g. 1.3.16-SNAPSHOT)
* 해당 마스터 브랜치를 upstream 에 push 한다. 단, push 해도 태그는 같이 되지 않기 떄문에 git tag 1.3.15 명령을 입력해서 tag 를 github 에 push 해준다.
* push 가 되고 나면 github 에서 release 정보를 기입하고 해당 태그로 release 를 딴다.


## References
https://github.com/researchgate/gradle-release

