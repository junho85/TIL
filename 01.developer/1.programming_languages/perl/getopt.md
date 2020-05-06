# perl getopt

```
use Getopt::Long;

my $date = "";
GetOptions('date=s' => \$date);

if ($date eq "") {
    usage();
    exit -1;
}

sub usage {
    print "usage: $0 --date=<date>\n";
}
```

여러개
```
GetOptions(
    'date=s' => \$date,
    'time=s' => \$time,
);

default value
my $hosts = "install";
GetOptions('hosts=s' => \$hosts);
```

## references
http://perldoc.perl.org/Getopt/Long.html

