"use strict";

var MyComponentLifeCircle = React.createClass({
  displayName: "MyComponentLifeCircle",

  getDefaultProps: function getDefaultProps() {
    return {
      val: "保存"
    };
  },
  getInitialState: function getInitialState() {
    return {
      placeholder: "请填写您的信息"
    };
  },
  componentDidMount: function componentDidMount() {
    var MyInput = this.refs.MyInput.getDOMNodes();
    alert(MyInput + '已经插入到DOM tree');
  },
  render: function render() {
    return React.createElement(
      "form",
      null,
      React.createElement("input", { type: "text", ref: "MyInput", placeholder: "{this.state.placeholder}" }),
      React.createElement("input", { type: "button", value: "{this.props.val}}" })
    );
  }
});

ReactDOM.render(React.createElement(MyComponentLifeCircle, { val: "提交" }), document.getElementById('example'));