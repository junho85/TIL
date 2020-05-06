# react
* https://reactjs.org/
* https://github.com/facebook/react

## Getting Started
* https://reactjs.org/docs/getting-started.html

## references
* [안녕, 리액트(Hello, React)](http://blog.gaerae.com/2016/04/hello-react.html)
  * 페이스북과 인스타그램에서 사용자 경험을 향상하기 위해 만든 라이브러리
  * 이벤트 요청 시 서버에서 코드를 받아 다시 렌더링해야 되는 문제를 해결하기 위해 만들어짐
  * 프레임워크가 아니고 사용자 인터페이스 랑비ㅡ러리
  * "좀더 예측 가능하도록 코드 구조화"에 대한 목표로 "데이터 흐름이 단방향인 시스템 아키텍처" Flux를 제안
    * Flux
      * Store: APP의 모든 데이터를 저장하며 MV의 Model 역할
      * Dispatcher: 모든 데이터를 관리하는 Control 역할. Action 이 시작될 때 어떻게 Store가 업데이트되어야 하는지 결정
      * View: Store가 변경된 경우 같이 변경
      * 단방향: 데이터는 단방향으로 흐르고 데이터 계층이 자기가 영향을 미치는 View 업데이트 완료 후 다음 작업을 진행 
    * Reddit 논란
      * Flux는 새로운 것이 아닌 MVC의 새로운 이름
      * MVC를 제대로 알지 못했거나 이벤트 기반으로 조금 변형 형태이다.
  * React 특징
    * JSX: 템플릿을 사용하지 않는다
      * JavaScript XML
      * 페이스북에서 스펙을 정의한 XML과 비슷한 자바스크립트 확장 문법
      * *.jsx 파일
      * Webpack, Browserify 로 자바스클비트로 컴파일 하여 *.js 로 변환되어 사용
      * 테스트 코드는 Babel 로 별도의 컴파일 없이 사용
    * Virtual DOM: 전체 DOM을 다시 그리지 않음
    * 데이터가 양방향으로 흐르지 않는다.
    * Server Side Rendering
    * ...
    
* [How to run a react app on tomcat](https://stackoverflow.com/questions/40030580/how-to-run-a-react-app-on-tomcat)
  * install webpack locally: `npm install -g webpack`
  * build demo: 
    * `webpack --config webpack.config.standard.js --progress --colors --hot --inline`
    * or `webpack --config webpack.config.large.js --progress --colors --hot --inline`
    * In Tomcat `webapps` directory create another directory for your demo `ag-grid`.
    * Copy `index.html` and `dist` to `ag-grid`
    * Access it on `http://host:port/ag-grid`