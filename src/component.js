// 组件1：定义组件，并使用
var Message = React.createClass({
  render: function () {
    return <a href="this.props.name">hi,{this.props.name}</a>
  }
});
ReactDOM.render(
  <Message name="www.ppzuche.com" />,
  document.getElementById('example')
);

// 组件2：对子节点的使用
var NotesList = React.createClass({
  render: function(){
    return (
      <ul>
        {
          this.props.children.map(function(child){
            return <li>{child}</li>
          })
        }
      </ul>
    );
  }
});
ReactDOM.render(
  <NotesList>
    <a href="https://www.baidu.com">baidu</a>
    <a href="http://www.ppzuche.com">ppzuche</a>
  </NotesList>,
  document.getElementById('child')
);

// 组件3：简单的DOM操作
var NodeRender = React.createClass({
  bindEvent: function(event){
    // 需要说明下findDOMNode这个API
    // 根据React的设计，所有的DOM操作都是先在虚拟 DOM 上发生
    // 有时需要从组件获取真实 DOM 的节点，就调用findDOMNode这个API
    var el = ReactDOM.findDOMNode(this.refs.myTextInput);
    el.focus();
    console.log(event);
  },

  render: function(){
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button"
          value="click me"
          onClick = {this.bindEvent} />
      </div>
    );
  }
});
ReactDOM.render(
  <NodeRender />,
  document.getElementById('node')
);
