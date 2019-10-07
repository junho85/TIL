# react-date
* [react-dates](https://github.com/airbnb/react-dates/blob/master/README.md)
* 설명이 부실하다...


## installation

```
yarn add react-dates
yarn add moment
```

```
"moment": "^2.20.1",
"react-dates": "^20.2.5",
```



## SingleDatePicker
설명문서에는 이게 기본이라고 한다.
```react
<SingleDatePicker
  date={this.state.date} // momentPropTypes.momentObj or null
  onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
  focused={this.state.focused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
  id="your_unique_id" // PropTypes.string.isRequired,
/>
```
그런데 실제로 id 는 없어도 별 문제는 없는듯. 용도도 모르겠음.

기본 설정으로는 예전 날짜는 선택이 불가능하다. 예전 날짜도 선택 할 수 있도록 하려면 다음 설정을 추가한다.
```javascript
isOutsideRange={() => false}
```

기본 설정으로 달력이 두개 나오는데 1개 나오도록 하려면
```javascript
numberOfMonths={1}
```

기본으로 표시되는 날짜 포멧 변경.
```
displayFormat="YYYY-MM-DD"
```


```
small={true}
block={false}
disabled={true}
```

키보드로 수정 불가
```
readOnly={true}
```

X 버튼 표시. 그런데 지워지지는 않는듯?
```
showClearDate={true}
```

clear 했을 떄 달력 띄우기
```
reopenPickerOnClearDate={true}
```


```
<SingleDatePicker
    // date={this.props.userInfo.birthday}
    date={this.state.date}
    // onDateChange={date => {this.changeBirthday(date);}}
    onDateChange{date => this.setState({date})}
    focused={this.state.focused}
    onFocusChange={({focused}) => this.setState({focused})}
/>

```

```javascript
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
```

날짜만 나온다. 클릭한다고 달력이 나오지는 않음.
```react
<SingleDatePicker
    date={moment('2019-05-20')}
/>
```

## References
* [SingleDatePickerWrapper.jsx](https://github.com/airbnb/react-dates/blob/master/examples/SingleDatePickerWrapper.jsx)