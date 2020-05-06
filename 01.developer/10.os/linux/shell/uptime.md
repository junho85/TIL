# uptime
```
$ uptime
 10:28:51 up 918 days, 18:25,  3 users,  load average: 0.18, 0.28, 0.32
```
## uptime

## users

## load average
* average load over the last one minute, the last fine minutes, and the last fifteen minutes.
** load average over the last 1 minute: 0.18
** load average over the last 5 minutes: 0.28
** load average over the last 15 minutes: 0.32

## get uptime
```
uptime | awk '{print $3}'
```

## get load average over the last 1 minute only
```
uptime | awk '{print $(NF-2)}' | sed 's/,//'
```

# reference
Understanding the Load Average on Linux and Other Unix-like Systems
http://www.howtogeek.com/194642/understanding-the-load-average-on-linux-and-other-unix-like-systems/