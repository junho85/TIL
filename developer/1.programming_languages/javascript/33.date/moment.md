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

## add days
```
var new_date = moment(startdate, "DD-MM-YYYY").add(5, 'days');
```
* [momentJS date string add 5 days](https://stackoverflow.com/questions/22547129/momentjs-date-string-add-5-days)

## a week ago
```
moment().subtract(7, 'day')
```

## specific date
* 1985.05.20
```
moment().year(1985).month(5-1).date(20)
```