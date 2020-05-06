# ubuntu /boot 파티션 정리
가상서버호스팅을 이용한다거나 /boot 파티션 영역의 용량이 작아서 패키지 설치에 어려움을 겪게 될 수 있습니다.

## /boot 영역 파티션 용량 확인하기
df 커맨드로 확인 해 볼 수 있습니다. 제가 사용하는 호스팅의 경우 /boot 영역이 228M 로 할당 되어 있습니다. 142M 사용한 상태이고 74M 의 여유가 있는 상태입니다.
```
junho85@junho85:/boot$ df -h
Filesystem                   Size  Used Avail Use% Mounted on
udev                         212M     0  212M   0% /dev
tmpfs                         49M  804K   48M   2% /run
/dev/mapper/servername-root   19G  6.4G   12G  36% /
tmpfs                        241M     0  241M   0% /dev/shm
tmpfs                        5.0M     0  5.0M   0% /run/lock
tmpfs                        241M     0  241M   0% /sys/fs/cgroup
/dev/sda1                    228M  142M   74M  66% /boot
tmpfs                         49M     0   49M   0% /run/user/1000
```


## /boot 영역에 쌓이는 파일들
abi, config, grub, initrd, memtest, retpoline, System.map, vmlinuz 등의 파일들이 보입니다.
```
junho85@junho85:/boot$ ll -h
total 135M
drwxr-xr-x  4 root root 3.0K Oct  6 06:44 ./
drwxr-xr-x 22 root root 4.0K Oct  6 06:43 ../
-rw-r--r--  1 root root 1.5M Aug 15  2018 abi-4.15.0-33-generic
-rw-r--r--  1 root root 212K Aug 15  2018 config-4.15.0-33-generic
-rw-r--r--  1 root root 213K Sep 12 18:30 config-4.15.0-64-generic
-rw-r--r--  1 root root 213K Sep 18 01:12 config-4.15.0-65-generic
drwxr-xr-x  5 root root 5.0K Oct  6 06:44 grub/
-rw-r--r--  1 root root  53M Oct  6 06:40 initrd.img-4.15.0-64-generic
-rw-r--r--  1 root root  53M Oct  6 06:44 initrd.img-4.15.0-65-generic
drwxr-xr-x  2 root root  12K May 18  2012 lost+found/
-rw-r--r--  1 root root 179K Jan 28  2016 memtest86+.bin
-rw-r--r--  1 root root 181K Jan 28  2016 memtest86+.elf
-rw-r--r--  1 root root 181K Jan 28  2016 memtest86+_multiboot.bin
-rw-r--r--  1 root root    0 Aug 15  2018 retpoline-4.15.0-33-generic
-rw-------  1 root root 3.9M Aug 15  2018 System.map-4.15.0-33-generic
-rw-------  1 root root 3.9M Sep 12 18:30 System.map-4.15.0-64-generic
-rw-------  1 root root 3.9M Sep 18 01:12 System.map-4.15.0-65-generic
-rw-------  1 root root 8.0M Sep 12 21:38 vmlinuz-4.15.0-64-generic
-rw-------  1 root root 8.0M Sep 18 01:20 vmlinuz-4.15.0-65-generic
```
* abi: Application Binary Interface. kernel "hooks"
* config: 
* grub:
* initrd: 
* memtest: 
* retpoline: 
* System.map: a map between the kernel and the known addresses of hardware
* vmlinuz: compressed kernel that your system uses upon boot

## /boot 영역에 있는 파일을 정리 하는 방법
그냥 막 지우면 OS 가 부팅이 되지 않을 수 있으니 주의해서 작업해야 합니다. dpkg 명령어로 지워도 되는 패키지를 확인합니다.
```
junho85@junho85:/boot$ dpkg -l | tail -n +6 | grep -E 'linux-image-[0-9]+'
ii  linux-image-4.15.0-64-generic         4.15.0-64.73                      amd64        Signed kernel image generic
ii  linux-image-4.15.0-65-generic         4.15.0-65.74                      amd64        Signed kernel image generic
```

현재 사용중인 커널 버전 확인. 4.15.0-64 를 사용하고 있네요.
```
junho85@junho85:/boot$ uname -r
4.15.0-64-generic
```

grun.cfg 에서 기본 부팅에 사용하는 kernel 버전 확인. 가장 위에 있는게 기본 입니다. 4.15.0-65-generic 으로 되어 있네요. 재부팅 하면 uname -r 의 결과가 4.15.0-64 에서 4.15.0-65 로 바뀔겁니다.
```
junho85@junho85:/boot$ cat /boot/grub/grub.cfg | grep vmlinuz
        linux	/vmlinuz-4.15.0-65-generic root=/dev/mapper/servername-root ro
	        linux	/vmlinuz-4.15.0-65-generic root=/dev/mapper/servername-root ro
	        linux	/vmlinuz-4.15.0-65-generic root=/dev/mapper/servername-root ro recovery nomodeset
	        linux	/vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro
	        linux	/vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro recovery nomodeset
```

재부팅 하고 나면 4.15.0-64 는 더이상 쓸모가 없어 지니 지워주면 됩니다. 다음 명령어를 사용합니다.
```
sudo apt-get purge linux-image-4.15.0-64-generic
```

## rc - residual packages 지우기
dpkg 명령어로 확인 했을 때 rc 상태인 패키지들은 불필요 하니 지워주면 됩니다. (boot 영역 용량과는 관계가 없습니다.)
```
$ sudo apt-get remove --purge $(dpkg -l | grep "^rc" | awk '{print $2}')
```

이 정보들이 있는 위치?

## 자동 정리 방법
아직 /boot 영역 사이즈가 작은 경우 어떤 방식이 가장 좋은지는 잘 모르겠습니다.


### unattended-upgrades
이거 용도는 아직 정확히 잘 모르겠네요. 자동으로 정리 해 준다는데 /boot 파티션 용량이 너무 적으면 별 소용이 없는거 같습니다.

설정파일 위치
```
/etc/apt/apt.conf.d/50unattended-upgrades
```

아래와 같은 설정이 없거나 주석 처리 되어 있으면 true 라고 보면 됩니다.
```
Unattended-Upgrade::Remove-New-Unused-Dependencies "false"
```

### /boot 영역을 키우는 방법
GParted 를 이용하면 된다는 거 같은데 아직 잘 모르겠습니다. GUI 프로그램인거 같은데 원격으로 터미널로만 접속 가능한 상황에서는 어떤 방법이 있을지 알아봐야 합니다.


## 기타
* apt-get purge?
* apt-get autoremove?
* /boot 에서 막 지워도 되는 파일?

## 정리
* [또 /boot 파티션 정리 2019.10.06](https://junho85.pe.kr/1444)
* [ubuntu OS 업그레이드. 18.04.1 LTS. 커널패닉시 /boot 영역 공간이 충분한지 확인. 2018.08.29](https://junho85.pe.kr/1057)

## 참고
* [RemoveOldKernels](https://help.ubuntu.com/community/RemoveOldKernels)
* [[boot] What do those files do? 2010.08.25](https://www.linuxquestions.org/questions/linux-newbie-8/%5Bboot%5D-what-do-those-files-do-828407/)
```
System.map is pretty much what it says, a map between the kernel and the known addresses of hardware.

abi is the application binary interface, which are the kernel "hooks" a program can call to process commands, system libraries, etc. Because these machine language addresses move from time to time, the abi provides a common directory for applications to reference.

config essentially states whatever modules and kernel settings are available. Usually 'y' - yes, 'n' - no, and 'm' - module available.

vmcoreinfo is primarily for determining which information shows up during 'core dumps' (crashes).

vmlinuz is the compressed kernel that your system uses upon boot.
```
