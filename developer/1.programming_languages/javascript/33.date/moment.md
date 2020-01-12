# javascript - date - moment
* [Moment.js](https://momentjs.com/)
* [cdn](https://cdnjs.com/libraries/moment.js/)

## cdn 사용
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
```

## YYYYMMDD
```
$("#date").val(moment(new Date()).format("YYYYMMDD"));
```

## yesterday
```
moment().subtract(1, 'day')
```

## a week ago
```
moment().subtract(7, 'day')
```