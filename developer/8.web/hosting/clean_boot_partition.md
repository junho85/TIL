# 정리
* [RemoveOldKernels](https://help.ubuntu.com/community/RemoveOldKernels)

## 2019.10.05 /boot 정리
apt-get 으로 패키지 설치 하려니 /boot 영역에 용량이 부족하다고 메시지가 떠서 정리를 하였다.

```
sudo apt-get autoremove
```
17M 확보 되었는데 이거로는 턱도 없음

```
junho85@junho85:/boot$ ll -th
total 256M
-rw-r--r--  1 root root  12M Oct  5 12:16 initrd.img-4.15.0-33-generic.new
drwxr-xr-x  4 root root 3.0K Oct  5 12:15 ./
drwxr-xr-x 22 root root 4.0K Oct  5 12:15 ../
drwxr-xr-x  5 root root 5.0K Oct  5 12:05 grub/
-rw-------  1 root root 8.0M Sep 12 21:38 vmlinuz-4.15.0-64-generic
-rw-r--r--  1 root root 213K Sep 12 18:30 config-4.15.0-64-generic
-rw-------  1 root root 3.9M Sep 12 18:30 System.map-4.15.0-64-generic
-rw-------  1 root root 8.0M Aug 23 01:37 vmlinuz-4.15.0-60-generic
-rw-r--r--  1 root root 213K Aug 23 01:32 config-4.15.0-60-generic
-rw-------  1 root root 3.9M Aug 23 01:32 System.map-4.15.0-60-generic
-rw-r--r--  1 root root  11M Aug 29  2018 initrd.img-4.4.0-134-generic
-rw-r--r--  2 root root  52M Aug 28  2018 initrd.img-4.15.0-33-generic
-rw-r--r--  2 root root  52M Aug 28  2018 initrd.img-4.15.0-33-generic.dpkg-bak
-rw-r--r--  1 root root  11M Aug 28  2018 initrd.img-3.13.0-55-generic
-rw-r--r--  1 root root  11M Aug 28  2018 initrd.img-3.13.0-106-generic
-rw-r--r--  1 root root  14M Aug 28  2018 initrd.img-3.19.0-39-generic
-rw-r--r--  1 root root  35M Aug 28  2018 initrd.img-3.19.0-39-lowlatency
-rw-------  1 root root 7.9M Aug 15  2018 vmlinuz-4.15.0-33-generic
-rw-r--r--  1 root root 1.5M Aug 15  2018 abi-4.15.0-33-generic
-rw-r--r--  1 root root 212K Aug 15  2018 config-4.15.0-33-generic
-rw-r--r--  1 root root    0 Aug 15  2018 retpoline-4.15.0-33-generic
-rw-------  1 root root 3.9M Aug 15  2018 System.map-4.15.0-33-generic
-rw-r--r--  1 root root 179K Jan 28  2016 memtest86+.bin
-rw-r--r--  1 root root 181K Jan 28  2016 memtest86+.elf
-rw-r--r--  1 root root 181K Jan 28  2016 memtest86+_multiboot.bin
-rw-r--r--  1 root root 1.3M Dec  2  2015 abi-3.19.0-39-lowlatency
-rw-r--r--  1 root root 174K Dec  2  2015 config-3.19.0-39-lowlatency
-rw-------  1 root root 3.5M Dec  2  2015 System.map-3.19.0-39-lowlatency
-rw-------  1 root root 6.3M Dec  2  2015 vmlinuz-3.19.0-39-lowlatency
-rw-r--r--  1 root root 1.3M Dec  2  2015 abi-3.19.0-39-generic
-rw-r--r--  1 root root 174K Dec  2  2015 config-3.19.0-39-generic
-rw-------  1 root root 3.5M Dec  2  2015 System.map-3.19.0-39-generic
-rw-------  1 root root 6.3M Dec  2  2015 vmlinuz-3.19.0-39-generic
drwxr-xr-x  2 root root  12K May 18  2012 lost+found/
```

initrd.img-3.13.0 어쩌구 파일 보여서
```
sudo apt-get purge linux-image-3.13.0-*-generic
```
했으나

```
Note, selecting 'linux-image-3.13.0-55-generic' for glob 'linux-image-3.13.0-*-generic'
Package 'linux-image-3.13.0-55-generic' is not installed, so not removed
0 upgraded, 0 newly installed, 0 to remove and 143 not upgraded.
```
뭐 이런거 뜨고 무시 되는듯... 그냥 저 파일들을 직접 지워 줘도 되겠지?

```
junho85@junho85:/boot$ dpkg --list | grep linux-image
ii  linux-image-3.19.0-39-generic         3.19.0-39.44~14.04.1                amd64        Linux kernel image for version 3.19.0 on 64 bit x86 SMP
ii  linux-image-3.19.0-39-lowlatency      3.19.0-39.44~14.04.1                amd64        Linux kernel image for version 3.19.0 on 64 bit x86 SMP
ii  linux-image-4.15.0-33-generic         4.15.0-33.36                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-34-generic         4.15.0-34.37                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-36-generic         4.15.0-36.39                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-39-generic         4.15.0-39.42                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-42-generic         4.15.0-42.45                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-43-generic         4.15.0-43.46                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-44-generic         4.15.0-44.47                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-45-generic         4.15.0-45.48                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-46-generic         4.15.0-46.49                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-47-generic         4.15.0-47.50                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-50-generic         4.15.0-50.54                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-51-generic         4.15.0-51.55                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-54-generic         4.15.0-54.58                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-55-generic         4.15.0-55.60                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-58-generic         4.15.0-58.64                        amd64        Signed kernel image generic
iF  linux-image-4.15.0-60-generic         4.15.0-60.67                        amd64        Signed kernel image generic
iF  linux-image-4.15.0-64-generic         4.15.0-64.73                        amd64        Signed kernel image generic
rc  linux-image-4.4.0-134-generic         4.4.0-134.160                       amd64        Linux kernel image for version 4.4.0 on 64 bit x86 SMP
rc  linux-image-extra-4.4.0-134-generic   4.4.0-134.160                       amd64        Linux kernel extra modules for version 4.4.0 on 64 bit x86 SMP
iU  linux-image-generic                   4.15.0.64.66                        amd64        Generic Linux kernel image
```

/boot/grub/grub.cfg

의 menuentry 4.15.0-64 로 되어 있음

```
menuentry 'Ubuntu' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-simple-1f891622-9fba-4573-b5ae-36f6698b1b43' {
    recordfail
    load_video
    gfxmode $linux_gfx_mode
    insmod gzio
    if [ x$grub_platform = xxen ]; then insmod xzio; insmod lzopio; fi
    insmod part_msdos
    insmod ext2
    set root='hd0,msdos1'
    if [ x$feature_platform_search_hint = xy ]; then
      search --no-floppy --fs-uuid --set=root --hint-bios=hd0,msdos1 --hint-efi=hd0,msdos1 --hint-baremetal=ahci0,msdos1  66bf87f7-791e-4d0b-a3c8-c277696fbef2
    else
      search --no-floppy --fs-uuid --set=root 66bf87f7-791e-4d0b-a3c8-c277696fbef2
    fi
        linux   /vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro
}
```


일단 이거 지움
```
sudo apt-get purge linux-image-3.19.0-*-generic
```
38M 정도 확보

하나 더 지움
```
sudo apt-get purge linux-image-4.4.0-*-generic
```

```
junho85@junho85:/etc/apache2/sites-enabled$ cat /boot/grub/grub.cfg | grep vmlinuz
        linux   /vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro recovery nomodeset
                linux   /vmlinuz-4.15.0-60-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-60-generic root=/dev/mapper/servername-root ro recovery nomodeset
                linux   /vmlinuz-4.15.0-33-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-33-generic root=/dev/mapper/servername-root ro recovery nomodeset
                linux   /vmlinuz-3.19.0-39-lowlatency root=/dev/mapper/servername-root ro
                linux   /vmlinuz-3.19.0-39-lowlatency root=/dev/mapper/servername-root ro recovery nomodeset
```

이것들은 지울까 했는데 왜 날짜가 오늘로 바꼈지...
```
junho85@junho85:/boot$ ll | grep 3.13.0
-rw-r--r--  1 root root 11919740 Oct  5 12:29 initrd.img-3.13.0-106-generic
-rw-r--r--  1 root root 11919606 Oct  5 12:29 initrd.img-3.13.0-55-generic
```

더 지움
```
sudo apt-get purge linux-image-3.19.0-39-lowlatency
```
진행중에 용량 확인. 이제 85M
```
junho85@junho85:~/web/wordpress/wp-content$ df -h | grep boot
/dev/sda1                    228M  132M   85M  62% /boot
```

현재 로그인 했을 때 나오는 버전 확인
```
Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-33-generic x86_64)
```

```
junho85@junho85:~$ uname -a
Linux junho85.vps.phps.kr 4.15.0-33-generic #36-Ubuntu SMP Wed Aug 15 16:00:05 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux
```

현재 버전인 4.15.0-33-generic 이랑 grub 에 설정된 4.15.0-64-generic 빼고는 다 지워도 되겠음.


https://askubuntu.com/questions/935871/is-there-unused-initrd-img-to-remove 참고 해서
```
sudo rm /boot/initrd.img*
sudo update-initramfs -c -k all
```
별로 효과 있는지 모르겠음... 3.13.0 initrd.img 파일들 다시 생겨나 있음.

https://help.ubuntu.com/community/RemoveOldKernels 참고해서 작업
```
sudo rm -rv ${TMPDIR:-/var/tmp}/mkinitramfs-*
```


```
junho85@junho85:/boot$ dpkg -l | tail -n +6 | grep -E 'linux-image-[0-9]+'
ii  linux-image-4.15.0-33-generic         4.15.0-33.36                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-34-generic         4.15.0-34.37                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-36-generic         4.15.0-36.39                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-39-generic         4.15.0-39.42                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-42-generic         4.15.0-42.45                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-43-generic         4.15.0-43.46                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-44-generic         4.15.0-44.47                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-45-generic         4.15.0-45.48                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-46-generic         4.15.0-46.49                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-47-generic         4.15.0-47.50                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-50-generic         4.15.0-50.54                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-51-generic         4.15.0-51.55                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-54-generic         4.15.0-54.58                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-55-generic         4.15.0-55.60                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-58-generic         4.15.0-58.64                        amd64        Signed kernel image generic
ii  linux-image-4.15.0-60-generic         4.15.0-60.67                        amd64        Signed kernel image generic
iF  linux-image-4.15.0-64-generic         4.15.0-64.73                        amd64        Signed kernel image generic
```

rc 는 이미 지워진거. ii 는 설치 된 거.
```
sudo update-initramfs -d -k 4.2.0-15-generic
```

```
sudo apt-get autoremove --purge
```

4.15.0-60 을 먼저 지우면 4.15.0-64 가 정상화 될까? 지금은 (iF) 인데 비정상 상태임.

4.15.0-60 삭제. 자동으로 4.15.0-64 설치가 다시 진행된다.
```
sudo apt-get purge linux-image-4.15.0-60-generic
```


```
junho85@junho85:/boot$ dpkg -l | tail -n +6 | grep -E 'linux-image-[0-9]+'
ii  linux-image-4.15.0-33-generic         4.15.0-33.36                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-34-generic         4.15.0-34.37                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-36-generic         4.15.0-36.39                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-39-generic         4.15.0-39.42                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-42-generic         4.15.0-42.45                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-43-generic         4.15.0-43.46                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-44-generic         4.15.0-44.47                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-45-generic         4.15.0-45.48                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-46-generic         4.15.0-46.49                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-47-generic         4.15.0-47.50                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-50-generic         4.15.0-50.54                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-51-generic         4.15.0-51.55                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-54-generic         4.15.0-54.58                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-55-generic         4.15.0-55.60                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-58-generic         4.15.0-58.64                        amd64        Signed kernel image generic
ii  linux-image-4.15.0-64-generic         4.15.0-64.73                        amd64        Signed kernel image generic
```

grub 설정 확인
```
junho85@junho85:/boot$ cat /boot/grub/grub.cfg | grep vmlinuz
        linux   /vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro recovery nomodeset
                linux   /vmlinuz-4.15.0-33-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-33-generic root=/dev/mapper/servername-root ro recovery nomodeset
```

자 이재 재시작을 해 보자.
```
sudo reboot
```

```
Welcome to Ubuntu 18.04.1 LTS (GNU/Linux 4.15.0-64-generic x86_64)
```

재시작 후 linux-image-4.15.0-33-generic 는 지우자. sudo apt-get purge 하니 sudo apt autoremove 하라고 함.
```
junho85@junho85:~$ sudo apt-get purge
[sudo] password for junho85:
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages were automatically installed and are no longer required:
  linux-headers-4.15.0-60 linux-headers-4.15.0-60-generic linux-modules-4.15.0-60-generic
Use 'sudo apt autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 143 not upgraded.
junho85@junho85:~$ sudo apt autoremove
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages will be REMOVED:
  linux-headers-4.15.0-60 linux-headers-4.15.0-60-generic linux-modules-4.15.0-60-generic
0 upgraded, 0 newly installed, 3 to remove and 143 not upgraded.
After this operation, 154 MB disk space will be freed.
Do you want to continue? [Y/n]
(Reading database ... 339539 files and directories currently installed.)
Removing linux-headers-4.15.0-60-generic (4.15.0-60.67) ...
Removing linux-headers-4.15.0-60 (4.15.0-60.67) ...
Removing linux-modules-4.15.0-60-generic (4.15.0-60.67) ...
```

음. 그대로인거 같은데?
```
junho85@junho85:~$ dpkg -l | tail -n +6 | grep -E 'linux-image-[0-9]+'
ii  linux-image-4.15.0-33-generic         4.15.0-33.36                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-34-generic         4.15.0-34.37                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-36-generic         4.15.0-36.39                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-39-generic         4.15.0-39.42                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-42-generic         4.15.0-42.45                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-43-generic         4.15.0-43.46                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-44-generic         4.15.0-44.47                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-45-generic         4.15.0-45.48                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-46-generic         4.15.0-46.49                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-47-generic         4.15.0-47.50                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-50-generic         4.15.0-50.54                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-51-generic         4.15.0-51.55                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-54-generic         4.15.0-54.58                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-55-generic         4.15.0-55.60                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-58-generic         4.15.0-58.64                        amd64        Signed kernel image generic
ii  linux-image-4.15.0-64-generic         4.15.0-64.73                        amd64        Signed kernel image generic
```

용량은 67M
```
junho85@junho85:~$ df -h | grep boot
/dev/sda1                    228M  149M   67M  70% /boot
```

linux-image-4.15.0-33-generic 제
```
sudo apt purge linux-image-4.15.0-33-generic
```
그나저나 이번에 업그레이드 이후 화면 아래쪽에 progress bar 가 나타남.

```
junho85@junho85:~$ df -h | grep boot
/dev/sda1                    228M   89M  127M  42% /boot
```


구 버전들 리스트는 재부팅 해야 사라지려나?
```
junho85@junho85:~$ dpkg -l | tail -n +6 | grep -E 'linux-image-[0-9]+'
rc  linux-image-4.15.0-34-generic         4.15.0-34.37                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-36-generic         4.15.0-36.39                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-39-generic         4.15.0-39.42                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-42-generic         4.15.0-42.45                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-43-generic         4.15.0-43.46                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-44-generic         4.15.0-44.47                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-45-generic         4.15.0-45.48                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-46-generic         4.15.0-46.49                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-47-generic         4.15.0-47.50                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-50-generic         4.15.0-50.54                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-51-generic         4.15.0-51.55                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-54-generic         4.15.0-54.58                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-55-generic         4.15.0-55.60                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-58-generic         4.15.0-58.64                        amd64        Signed kernel image generic
ii  linux-image-4.15.0-64-generic         4.15.0-64.73                        amd64        Signed kernel image generic
```

재시작
```
sudo reboot
```

20분에 reboot. 22분에 접속 됨.

```
junho85@junho85:~$ dpkg -l | tail -n +6 | grep -E 'linux-image-[0-9]+'
rc  linux-image-4.15.0-34-generic         4.15.0-34.37                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-36-generic         4.15.0-36.39                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-39-generic         4.15.0-39.42                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-42-generic         4.15.0-42.45                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-43-generic         4.15.0-43.46                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-44-generic         4.15.0-44.47                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-45-generic         4.15.0-45.48                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-46-generic         4.15.0-46.49                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-47-generic         4.15.0-47.50                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-50-generic         4.15.0-50.54                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-51-generic         4.15.0-51.55                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-54-generic         4.15.0-54.58                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-55-generic         4.15.0-55.60                        amd64        Signed kernel image generic
rc  linux-image-4.15.0-58-generic         4.15.0-58.64                        amd64        Signed kernel image generic
ii  linux-image-4.15.0-64-generic         4.15.0-64.73                        amd64        Signed kernel image generic
```

왜 옛날거 안지워 지지...

4.4.0 파일은 전혀 쓸모 없으니 수동 삭제
```
sudo rm initrd.img-4.4.0-134-generic
```

뭔가 설정 해 봄.
```
sudo dpkg-reconfigure -plow unattended-upgrades
```

뭔가 안바뀐건가... 설정 날짜는 예전 날짜임...
```
junho85@junho85:/boot$ ll /etc/apt/apt.conf.d/50unattended-upgrades
-rw-r--r-- 1 root root 3728 Jul 18  2018 /etc/apt/apt.conf.d/50unattended-upgrades
```

설정이 true 여야 한다는데 아무튼 주석 처리 되어 있으면 되는건가. 16.04 부터는 기본 true 라고 하니 아무튼 주석 처리 되어 있으면 되는듯.
```
junho85@junho85:/boot$ cat /etc/apt/apt.conf.d/50unattended-upgrades | grep 'Unattended-Upgrade::Remove-Unused-Dependencies'
//Unattended-Upgrade::Remove-Unused-Dependencies "false";
```
## 정리
* [ubuntu OS 업그레이드. 18.04.1 LTS. 커널패닉시 /boot 영역 공간이 충분한지 확인. 2018.08.29](https://junho85.pe.kr/1057)
* [OS 업그레이드. 14.04 -> 16.04. 재부팅 실패. 2018.08.28](https://junho85.pe.kr/1056)
* [ubuntu kernel panic 과 kernel upgrade. boot 파티션 정리 2016.11.01](https://junho85.pe.kr/530)