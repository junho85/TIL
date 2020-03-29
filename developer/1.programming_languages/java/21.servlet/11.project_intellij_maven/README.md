# servlet project - IntelliJ - maven
IntelliJ 에서 File -> New -> Project 로 가서 maven 프로젝트를 생성합니다.

![](01_new_project.png)

project name과 groupId 등은 적절히 입력합니다.

![](02_project_name.png)

pom.xml 파일에 servlet api dependency를 추가해 줍니다. https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api에서 maven 공개 저장소에 있는 버전과 xml 설정을 확인 할 수 있습니다. 현재 4.0.1이 최신버전이네요.


![](03_maven.png)

4.0.1을 선택하면 maven 설정을 확인 할 수 있습니다. 마우스로 클릭하면 자동으로 복사해줍니다.

![](04_maven.png)

프로젝트의 pom.xml 파일에 붙여 넣기 합니다.

![](05_pom.png)

우측의 Maven탭을 열고 Reimport를 눌러주면 servlet api 4.0.1을 가져온 것을 확인 할 수 있습니다.

![](06_dependency.png)

프로젝트를 웹프로젝트로 만들어 줍니다. File -> Project Structure -> Modules 에서 Web을 추가합니다.

![](07_modules_web.png)

우측 하단에 Create Artifact 를 선택합니다.

![](08_create_artifact.png)

![](09_create_artifact.png)

src/main/java 에 New -> Create New Servlet을 선택합니다.

![](10_create_new_servlet.png)
