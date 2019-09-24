# terminal 터미널
## ASCII Art

Modular

http://patorjk.com/software/taag/#p=testall&f=Modular&t=Hello%20World

```
 __   __  _______  ___      ___      _______    _     _  _______  ______    ___      ______  
|  | |  ||       ||   |    |   |    |       |  | | _ | ||       ||    _ |  |   |    |      | 
|  |_|  ||    ___||   |    |   |    |   _   |  | || || ||   _   ||   | ||  |   |    |  _    |
|       ||   |___ |   |    |   |    |  | |  |  |       ||  | |  ||   |_||_ |   |    | | |   |
|       ||    ___||   |___ |   |___ |  |_|  |  |       ||  |_|  ||    __  ||   |___ | |_|   |
|   _   ||   |___ |       ||       ||       |  |   _   ||       ||   |  | ||       ||       |
|__| |__||_______||_______||_______||_______|  |__| |__||_______||___|  |_||_______||______| 
```

## ANSI Color
vi 같은 에디터에서 ANSI Color 를 적용하기 위한 특수문자를 입력하기 어렵기 때문에 다음과 같이 
```bash
[user@box]$ echo -en "\033[1;34m" > /etc/motd
[user@box]$ echo "Text of your motd file....." >> /etc/motd
[user@box]$ echo -en "\033[0m" >> /etc/motd
```

### References
* [Adding colors to your motd?](https://www.linuxquestions.org/questions/linux-software-2/adding-colors-to-your-motd-105038/)

