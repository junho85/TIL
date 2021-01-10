# perl - mongodb
* [MongoDB](https://metacpan.org/pod/MongoDB)


## installation
```
cpan MongoDB
```

## basic usage
```
use MongoDB;
 
my $client     = MongoDB->connect('mongodb://localhost');
my $collection = $client->ns('foo.bar'); # database foo, collection bar
my $result     = $collection->insert_one({ some => 'data' });
my $data       = $collection->find_one({ _id => $result->inserted_id });
```



## References
* [MongoDB](https://metacpan.org/pod/MongoDB)
* [MongoDB::MongoClient](https://metacpan.org/pod/MongoDB::MongoClient)