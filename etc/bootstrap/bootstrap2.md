# bootstrap 2
## datepicker - eyecon.ro/bootstrap-datepicker

http://www.eyecon.ro/bootstrap-datepicker

Event 는 4가지가 있다.

show
hide
changeDate
onRender

```javascript
$("#some_date").datepicker()
    .on('changeDate', function(ev) {
        console.log(ev.date.valueOf()); // e.g. 1562338800000
    });
```
