# nodejs - mysql 사용시 "Error: Connection lost: The server closed the connection." 오류 나면서 죽는 문제 해결
운영툴 프로젝트를 하나 받았는데 로컬 개발 환경을 세팅 하니 일정 시간이 지나면 "Error: Connection lost: The server closed the connection." 이 발생하면서 nodejs 프로세스가 죽어 버렸다.

좀 더 상세히 적어 보자면 에러 메시지는 다음과 같다.

    events.js:182
          throw er; // Unhandled 'error' event
          ^

    Error: Connection lost: The server closed the connection.
        at Protocol.end (/Users/junho85/WebstormProjects/.../node_modules/mysql/lib/protocol/Protocol.js:112:13)
        at Socket.<anonymous> (/Users/junho85/WebstormProjects/.../node_modules/mysql/lib/Connection.js:97:28)
        at Socket.<anonymous> (/Users/junho85/WebstormProjects/.../node_modules/mysql/lib/Connection.js:502:10)
        at emitNone (events.js:110:20)
        at Socket.emit (events.js:207:7)
        at endReadableNT (_stream_readable.js:1045:12)
        at _combinedTickCallback (internal/process/next_tick.js:102:11)
        at process._tickCallback (internal/process/next_tick.js:161:9)

Production 서버에서는 forever 로 돌리고 있어서 프로세스가 죽으면 다시 올려 주고 있긴 하지만 근본적인 해결책은 아니라 해결책을 찾아 보았다.

[https://www.npmjs.com/package/mysql](https://www.npmjs.com/package/mysql) 에서 관련 설명을 찾을 수 있었다.

    Note: 'error' events are special in node. If they occur without an attached listener, a stack trace is printed and your process is killed.

    tl;dr: This module does not want you to deal with silent failures. You should always provide callbacks to your method calls. If you want to ignore this advice and suppress unhandled errors, you can do this:

    // I am Chuck Norris:
    connection.on('error', function() {});

다른 방법도 있는거 같긴 하지만 이게 가장 손 쉬운 듯 하다.

    connection.on('error', function() {});

하지만 이렇게 하면 상세한 에러 핸들링이 어려울 수 있으니 필요 하다면 따로 로그를 남긴다는 등 핸들링 로직을 추가 해 주면 될 거 같다.