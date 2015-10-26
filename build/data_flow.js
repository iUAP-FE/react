"use strict";

var MyTitle = React.createClass({
  displayName: "MyTitle",

  // 相当于接口文档
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  // 定义初始化的state
  getInitialState: function getInitialState() {
    return {
      times: 1
    };
  },
  // 定义一个改变组件state的方法
  handleClick: function handleClick(event) {
    var preTimes = this.state.times;

    this.setState({
      times: preTimes + 1
    });
  },
  render: function render() {
    return React.createElement(
      "header",
      null,
      React.createElement(
        "h1",
        null,
        "props: ",
        this.props.title
      ),
      React.createElement(
        "p",
        { onClick: this.handleClick },
        "click me! ",
        this.state.times
      )
    );
  }
});

// 使用定义的组件
ReactDOM.render(React.createElement(MyTitle, { title: "Welcome To React!" }), document.getElementById('example'));