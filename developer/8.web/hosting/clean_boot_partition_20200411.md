# 2020.04.11 정리...

흐유...
```
$ sudo apt-get install openssl
Reading package lists... Done
Building dependency tree
Reading state information... Done
openssl is already the newest version (1.1.1-1ubuntu2.1~18.04.5).
The following packages were automatically installed and are no longer required:
  libllvm8 linux-headers-4.15.0-74 linux-headers-4.15.0-74-generic linux-image-4.15.0-74-generic linux-modules-4.15.0-74-generic linux-modules-extra-4.15.0-74-generic
Use 'sudo apt autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 154 not upgraded.
2 not fully installed or removed.
After this operation, 0 B of additional disk space will be used.
Do you want to continue? [Y/n]
```

```
$ df -h
Filesystem                   Size  Used Avail Use% Mounted on
udev                         212M     0  212M   0% /dev
tmpfs                         49M  892K   48M   2% /run
/dev/mapper/servername-root   19G   11G  6.9G  62% /
tmpfs                        241M     0  241M   0% /dev/shm
tmpfs                        5.0M     0  5.0M   0% /run/lock
tmpfs                        241M     0  241M   0% /sys/fs/cgroup
/dev/sda1                    228M  199M   18M  92% /boot
tmpfs                         49M     0   49M   0% /run/user/1000
```

```
$ sudo apt-get autoremove
[sudo] password for junho85:
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages will be REMOVED:
  libllvm8 linux-headers-4.15.0-74 linux-headers-4.15.0-74-generic linux-image-4.15.0-74-generic linux-modules-4.15.0-74-generic linux-modules-extra-4.15.0-74-generic
0 upgraded, 0 newly installed, 6 to remove and 154 not upgraded.
2 not fully installed or removed.
After this operation, 395 MB disk space will be freed.
Do you want to continue? [Y/n]
(Reading database ... 400471 files and directories currently installed.)
Removing libllvm8:amd64 (1:8-3~ubuntu18.04.2) ...
Removing linux-headers-4.15.0-74-generic (4.15.0-74.84) ...
Removing linux-headers-4.15.0-74 (4.15.0-74.84) ...
Removing linux-modules-extra-4.15.0-74-generic (4.15.0-74.84) ...
Removing linux-image-4.15.0-74-generic (4.15.0-74.84) ...
/etc/kernel/postrm.d/initramfs-tools:
update-initramfs: Deleting /boot/initrd.img-4.15.0-74-generic
/etc/kernel/postrm.d/zz-update-grub:
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-4.15.0-96-generic
Found linux image: /boot/vmlinuz-4.15.0-88-generic
Found linux image: /boot/vmlinuz-4.15.0-64-generic
Found initrd image: /boot/initrd.img-4.15.0-64-generic
Found memtest86+ image: /memtest86+.elf
Found memtest86+ image: /memtest86+.bin
done
Removing linux-modules-4.15.0-74-generic (4.15.0-74.84) ...
Processing triggers for libc-bin (2.27-3ubuntu1) ...
Setting up linux-image-4.15.0-88-generic (4.15.0-88.88) ...
I: /initrd.img.old is now a symlink to boot/initrd.img-4.15.0-88-generic
Setting up linux-image-4.15.0-96-generic (4.15.0-96.97) ...
I: /initrd.img is now a symlink to boot/initrd.img-4.15.0-96-generic
Processing triggers for linux-image-4.15.0-88-generic (4.15.0-88.88) ...
/etc/kernel/postinst.d/initramfs-tools:
update-initramfs: Generating /boot/initrd.img-4.15.0-88-generic
/etc/kernel/postinst.d/zz-update-grub:
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-4.15.0-96-generic
Found linux image: /boot/vmlinuz-4.15.0-88-generic
Found initrd image: /boot/initrd.img-4.15.0-88-generic
Found linux image: /boot/vmlinuz-4.15.0-64-generic
Found initrd image: /boot/initrd.img-4.15.0-64-generic
Found memtest86+ image: /memtest86+.elf
Found memtest86+ image: /memtest86+.bin
done
Processing triggers for linux-image-4.15.0-96-generic (4.15.0-96.97) ...
/etc/kernel/postinst.d/initramfs-tools:
update-initramfs: Generating /boot/initrd.img-4.15.0-96-generic

gzip: stdout: No space left on device
E: mkinitramfs failure cpio 141 gzip 1
update-initramfs: failed for /boot/initrd.img-4.15.0-96-generic with 1.
run-parts: /etc/kernel/postinst.d/initramfs-tools exited with return code 1
dpkg: error processing package linux-image-4.15.0-96-generic (--configure):
 installed linux-image-4.15.0-96-generic package post-installation script subprocess returned error exit status 1
E: Sub-process /usr/bin/dpkg returned an error code (1)
```

조금 늘어
```
$ df -h
Filesystem                   Size  Used Avail Use% Mounted on
udev                         212M     0  212M   0% /dev
tmpfs                         49M  892K   48M   2% /run
/dev/mapper/servername-root   19G   11G  7.4G  59% /
tmpfs                        241M     0  241M   0% /dev/shm
tmpfs                        5.0M     0  5.0M   0% /run/lock
tmpfs                        241M     0  241M   0% /sys/fs/cgroup
/dev/sda1                    228M  186M   30M  87% /boot
tmpfs                         49M     0   49M   0% /run/user/1000
```

/boot 확인
```
$ ll /boot
total 183372
drwxr-xr-x  4 root root     3072 Apr 11 01:19 ./
drwxr-xr-x 23 root root     4096 Apr 11 01:17 ../
-rw-r--r--  1 root root   217373 Sep 12  2019 config-4.15.0-64-generic
-rw-r--r--  1 root root   217495 Feb 12 03:53 config-4.15.0-88-generic
-rw-r--r--  1 root root   217457 Apr  1 11:24 config-4.15.0-96-generic
drwxr-xr-x  5 root root     5120 Apr 11 01:19 grub/
-rw-r--r--  1 root root 12620248 Dec  9 07:02 initrd.img-3.13.0-106-generic
-rw-r--r--  1 root root 12620262 Dec  9 07:02 initrd.img-3.13.0-55-generic
-rw-r--r--  1 root root 55297388 Mar  4 06:28 initrd.img-4.15.0-64-generic
-rw-r--r--  1 root root 55319620 Apr 11 01:18 initrd.img-4.15.0-88-generic
-rw-r--r--  1 root root 12651829 Dec  9 07:02 initrd.img-4.4.0-134-generic
drwxr-xr-x  2 root root    12288 May 18  2012 lost+found/
-rw-r--r--  1 root root   182704 Jan 28  2016 memtest86+.bin
-rw-r--r--  1 root root   184380 Jan 28  2016 memtest86+.elf
-rw-r--r--  1 root root   184840 Jan 28  2016 memtest86+_multiboot.bin
-rw-------  1 root root  4062624 Sep 12  2019 System.map-4.15.0-64-generic
-rw-------  1 root root  4069510 Feb 12 03:53 System.map-4.15.0-88-generic
-rw-------  1 root root  4070301 Apr  1 11:24 System.map-4.15.0-96-generic
-rw-------  1 root root  8330904 Sep 12  2019 vmlinuz-4.15.0-64-generic
-rw-------  1 root root  8371864 Feb 12 03:57 vmlinuz-4.15.0-88-generic
-rw-------  1 root root  8371864 Apr  1 11:27 vmlinuz-4.15.0-96-generic
```


```
$ dpkg --list | grep linux-image
ii  linux-image-4.15.0-64-generic         4.15.0-64.73                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-66-generic         4.15.0-66.75                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-70-generic         4.15.0-70.79                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-72-generic         4.15.0-72.81                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-74-generic         4.15.0-74.84                                    amd64        Signed kernel image generic
ii  linux-image-4.15.0-88-generic         4.15.0-88.88                                    amd64        Signed kernel image generic
iF  linux-image-4.15.0-96-generic         4.15.0-96.97                                    amd64        Signed kernel image generic
ii  linux-image-generic                   4.15.0.96.87                                    amd64        Generic Linux kernel image
```

현재 4.15.0-64 인데
```
$ uname -r
4.15.0-64-generic
```

다음은 vmlinuz-4.15.0-96-generic 인데 iF 상태
```
$ cat /boot/grub/grub.cfg | grep vmlinuz
        linux   /vmlinuz-4.15.0-96-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-96-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-96-generic root=/dev/mapper/servername-root ro recovery nomodeset
                linux   /vmlinuz-4.15.0-88-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-88-generic root=/dev/mapper/servername-root ro recovery nomodeset
                linux   /vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro
                linux   /vmlinuz-4.15.0-64-generic root=/dev/mapper/servername-root ro recovery nomodeset
```

현재 버전도 아니고 iF도 아닌 어정쩡한거 제거 
```
sudo apt-get purge linux-image-4.15.0-88-generic
```

```
$ sudo apt-get purge linux-image-4.15.0-88-generic
[sudo] password for junho85:
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed:
  linux-image-unsigned-4.15.0-88-generic
Suggested packages:
  fdutils linux-doc-4.15.0 | linux-source-4.15.0 linux-tools
The following packages will be REMOVED:
  linux-image-4.15.0-88-generic* linux-modules-extra-4.15.0-88-generic*
The following NEW packages will be installed:
  linux-image-unsigned-4.15.0-88-generic
0 upgraded, 1 newly installed, 2 to remove and 154 not upgraded.
1 not fully installed or removed.
Need to get 8,056 kB of archives.
After this operation, 169 MB disk space will be freed.
Do you want to continue? [Y/n]
Get:1 http://security.ubuntu.com/ubuntu bionic-security/main amd64 linux-image-unsigned-4.15.0-88-generic amd64 4.15.0-88.88 [8,056 kB]
Fetched 8,056 kB in 3s (3,025 kB/s)
(Reading database ... 364944 files and directories currently installed.)
Removing linux-modules-extra-4.15.0-88-generic (4.15.0-88.88) ...
Removing linux-image-4.15.0-88-generic (4.15.0-88.88) ...
I: /vmlinuz.old is now a symlink to boot/vmlinuz-4.15.0-64-generic
I: /initrd.img.old is now a symlink to boot/initrd.img-4.15.0-64-generic
/etc/kernel/postrm.d/initramfs-tools:
update-initramfs: Deleting /boot/initrd.img-4.15.0-88-generic
/etc/kernel/postrm.d/zz-update-grub:
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-4.15.0-96-generic
Found linux image: /boot/vmlinuz-4.15.0-64-generic
Found initrd image: /boot/initrd.img-4.15.0-64-generic
Found memtest86+ image: /memtest86+.elf
Found memtest86+ image: /memtest86+.bin
done
Selecting previously unselected package linux-image-unsigned-4.15.0-88-generic.
(Reading database ... 359976 files and directories currently installed.)
Preparing to unpack .../linux-image-unsigned-4.15.0-88-generic_4.15.0-88.88_amd64.deb ...
Unpacking linux-image-unsigned-4.15.0-88-generic (4.15.0-88.88) ...
Setting up linux-image-unsigned-4.15.0-88-generic (4.15.0-88.88) ...
I: /vmlinuz.old is now a symlink to boot/vmlinuz-4.15.0-96-generic
I: /vmlinuz is now a symlink to boot/vmlinuz-4.15.0-88-generic
I: /initrd.img is now a symlink to boot/initrd.img-4.15.0-88-generic
Setting up linux-image-4.15.0-96-generic (4.15.0-96.97) ...
I: /initrd.img.old is now a symlink to boot/initrd.img-4.15.0-96-generic
(Reading database ... 359978 files and directories currently installed.)
Purging configuration files for linux-modules-extra-4.15.0-88-generic (4.15.0-88.88) ...
Purging configuration files for linux-image-4.15.0-88-generic (4.15.0-88.88) ...
I: /vmlinuz.old is now a symlink to boot/vmlinuz-4.15.0-64-generic
I: /initrd.img.old is now a symlink to boot/initrd.img-4.15.0-64-generic
I: /vmlinuz is now a symlink to boot/vmlinuz-4.15.0-96-generic
/var/lib/dpkg/info/linux-image-4.15.0-88-generic.postrm ... removing pending trigger
rmdir: failed to remove '/lib/modules/4.15.0-88-generic': Directory not empty
Processing triggers for linux-image-unsigned-4.15.0-88-generic (4.15.0-88.88) ...
Processing triggers for linux-image-4.15.0-96-generic (4.15.0-96.97) ...
/etc/kernel/postinst.d/initramfs-tools:
update-initramfs: Generating /boot/initrd.img-4.15.0-96-generic
/etc/kernel/postinst.d/zz-update-grub:
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-4.15.0-96-generic
Found initrd image: /boot/initrd.img-4.15.0-96-generic
Found linux image: /boot/vmlinuz-4.15.0-88-generic
Found linux image: /boot/vmlinuz-4.15.0-64-generic
Found initrd image: /boot/initrd.img-4.15.0-64-generic
Found memtest86+ image: /memtest86+.elf
Found memtest86+ image: /memtest86+.bin
done
W: APT had planned for dpkg to do more than it reported back (17 vs 21).
   Affected packages: linux-image-4.15.0-96-generic:amd64
```

iF 가 ii가 되었음.
```
$ dpkg --list | grep linux-image
ii  linux-image-4.15.0-64-generic          4.15.0-64.73                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-66-generic          4.15.0-66.75                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-70-generic          4.15.0-70.79                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-72-generic          4.15.0-72.81                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-74-generic          4.15.0-74.84                                    amd64        Signed kernel image generic
ii  linux-image-4.15.0-96-generic          4.15.0-96.97                                    amd64        Signed kernel image generic
ii  linux-image-generic                    4.15.0.96.87                                    amd64        Generic Linux kernel image
ii  linux-image-unsigned-4.15.0-88-generic 4.15.0-88.88                                    amd64        Linux kernel image for version 4.15.0 on 64 bit x86 SMP
```

```
$ sudo apt autoremove
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages will be REMOVED:
  linux-headers-4.15.0-88 linux-headers-4.15.0-88-generic linux-image-unsigned-4.15.0-88-generic linux-modules-4.15.0-88-generic
0 upgraded, 0 newly installed, 4 to remove and 154 not upgraded.
After this operation, 163 MB disk space will be freed.
Do you want to continue? [Y/n]
(Reading database ... 359978 files and directories currently installed.)
Removing linux-headers-4.15.0-88-generic (4.15.0-88.88) ...
Removing linux-headers-4.15.0-88 (4.15.0-88.88) ...
Removing linux-image-unsigned-4.15.0-88-generic (4.15.0-88.88) ...
I: /initrd.img is now a symlink to boot/initrd.img-4.15.0-96-generic
/etc/kernel/postrm.d/initramfs-tools:
update-initramfs: Deleting /boot/initrd.img-4.15.0-88-generic
/etc/kernel/postrm.d/zz-update-grub:
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-4.15.0-96-generic
Found initrd image: /boot/initrd.img-4.15.0-96-generic
Found linux image: /boot/vmlinuz-4.15.0-64-generic
Found initrd image: /boot/initrd.img-4.15.0-64-generic
Found memtest86+ image: /memtest86+.elf
Found memtest86+ image: /memtest86+.bin
done
Removing linux-modules-4.15.0-88-generic (4.15.0-88.88) ...
```

linux-image-unsigned-4.15.0-88-generic 이 rc가 됨
```
$ dpkg --list | grep linux-image
ii  linux-image-4.15.0-64-generic          4.15.0-64.73                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-66-generic          4.15.0-66.75                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-70-generic          4.15.0-70.79                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-72-generic          4.15.0-72.81                                    amd64        Signed kernel image generic
rc  linux-image-4.15.0-74-generic          4.15.0-74.84                                    amd64        Signed kernel image generic
ii  linux-image-4.15.0-96-generic          4.15.0-96.97                                    amd64        Signed kernel image generic
ii  linux-image-generic                    4.15.0.96.87                                    amd64        Generic Linux kernel image
rc  linux-image-unsigned-4.15.0-88-generic 4.15.0-88.88                                    amd64        Linux kernel image for version 4.15.0 on 64 bit x86 SMP
```

용량 조금 늘어남
```
$ df -h | grep boot
/dev/sda1                    228M  174M   42M  81% /boot
```
