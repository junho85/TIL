# add event on child
* child 내용에 클릭 이벤트를 먹이고 싶다면 다음과 같아 합니다.
* 다만 타입이 string 이면 div 나 span 등으로 감싸 줍니다.
* 특별한 용도의 버튼을 만든다거나, 해당 내용을 눌렀을 때 특별한 confirm 창이 나타나게 한다거나 여러 용도로 활용 할 수 있습니다.

```
import React, { Component } from 'react';

class SimpleConfirm extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log("click...");
  }

  render() {
    let child_with_onclick;
    if (typeof this.props.children === 'string') {
      child_with_onclick = (<div onClick={this.handleClick}>{this.props.children}</div>)
    } else {
      child_with_onclick = React.cloneElement(this.props.children, {
        onClick: this.handleClick
      });
    }
    return (
        <div>
          {child_with_onclick}
        </div>
    );
  }
}

class Hello extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <SimpleConfirm>
            <button>버어튼</button>
          </SimpleConfirm>
        </div>
    );
  }
}
```

## References
* [Add click event to render props? 2018-05-05](https://stackoverflow.com/questions/50189316/add-click-event-to-render-props)