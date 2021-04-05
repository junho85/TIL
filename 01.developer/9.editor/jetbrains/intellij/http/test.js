client.test("Request executed successfully", function() {
    client.assert(response.status === 200, "Response status is not 200");
    var type = response.contentType.mimeType;
    client.assert(type === "application/json", "Expected 'application/json' but received '" + type + "'");
    var testUrl = "http://httpbin.org/get";
    client.assert(response.body.url === testUrl, "Response body.url is not " + testUrl);
});
