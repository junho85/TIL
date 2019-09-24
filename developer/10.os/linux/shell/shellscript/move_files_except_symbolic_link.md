# mv files except symbolic link
```bash
for x in *; do
  if ! [ -L "$x" ]; then mv -- $x bak; fi
done
```

test operator `-L` 로 symbolic link 여부 확인. 

## References
* https://unix.stackexchange.com/questions/298298/any-way-to-mv-a-file-without-touch-symbolic-links