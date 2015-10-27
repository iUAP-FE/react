// 组件1：定义组件，并使用
"use strict";

var Message = React.createClass({
  displayName: "Message",

  render: function render() {
    return React.createElement(
      "a",
      { href: "this.props.name" },
      "hi,",
      this.props.name
    );
  }
});
ReactDOM.render(React.createElement(Message, { name: "www.ppzuche.com" }), document.getElementById('example'));

// 组件2：对子节点的使用
var NotesList = React.createClass({
  displayName: "NotesList",

  render: function render() {
    return React.createElement(
      "ul",
      null,
      this.props.children.map(function (child) {
        return React.createElement(
          "li",
          null,
          child
        );
      })
    );
  }
});
ReactDOM.render(React.createElement(
  NotesList,
  null,
  React.createElement(
    "a",
    { href: "https://www.baidu.com" },
    "baidu"
  ),
  React.createElement(
    "a",
    { href: "http://www.ppzuche.com" },
    "ppzuche"
  )
), document.getElementById('child'));

// 组件3：简单的DOM操作
var NodeRender = React.createClass({
  displayName: "NodeRender",

  bindEvent: function bindEvent(event) {
    // 需要说明下findDOMNode这个API
    // 根据React的设计，所有的DOM操作都是先在虚拟 DOM 上发生
    // 有时需要从组件获取真实 DOM 的节点，就调用findDOMNode这个API
    var el = ReactDOM.findDOMNode(this.refs.myTextInput);
    el.focus();
    console.log(event);
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", ref: "myTextInput" }),
      React.createElement("input", { type: "button",
        value: "click me",
        onClick: this.bindEvent })
    );
  }
});
ReactDOM.render(React.createElement(NodeRender, null), document.getElementById('node'));