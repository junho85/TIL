# Spring Framework - RestTemplate

## GET 요청 하고 응답 출력
```java
RestTemplate restTemplate = new RestTemplate();

String url = "http://localhost:8080/api/users";

ResponseEntity<String> response = restTemplate.getForEntity(url + "/123", String.class);

System.out.println(response.getStatusCode()); // 200 HttpStatus.OK
System.out.println(response.getBody());
```

## 응답 받은 json string을 Jackson으로 JSON 객체로 변환
```
ObjectMapper mapper = new ObjectMapper();
JsonNode root = mapper.readTree(response.getBody());
JsonNode name = root.path("name");
assertThat(name.asText(), notNullValue());
```

## References
* [The Guide to RestTemplate 2020.02.12](https://www.baeldung.com/rest-template)
  * https://github.com/eugenp/tutorials/tree/master/spring-resttemplate
* [RestTemplate Post Request with JSON 2019.10.29](https://www.baeldung.com/spring-resttemplate-post-json)
