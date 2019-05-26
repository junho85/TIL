# cli arguments
리눅스 쉘 커맨드에서는 다음과 같은 형식으로 옵션을 넣어서 커맨드를 실행하곤 한다.
```bash
$ command --host=junho85.pe.kr --port=25
```

java 에서는 apache commons cli 에서 관련된 기능을 쉽게 구현할 수 있도록 기능을 제공하고 있다. 간단한 예제를 작성해 보았다.

```java
CommandLineParser parser = new DefaultParser();

Options options = new Options();
options.addOption(Option.builder().longOpt("host")
        .desc("smtp server host")
        .hasArg()
        .build());

options.addOption(Option.builder().longOpt("port")
        .desc("smtp server port")
        .hasArg()
        .build());

CommandLine line = parser.parse(options, args);

String host = line.getOptionValue("host");
String port = line.getOptionValue("port");
```

## 정리
* https://junho85.pe.kr/432