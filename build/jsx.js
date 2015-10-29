"use strict";

var MyComponent = React.createClass({
  displayName: "MyComponent",

  render: function render() {
    return React.createElement(
      "h1",
      { className: "header" },
      "我的第一个组件"
    );
  }
});

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('example'));