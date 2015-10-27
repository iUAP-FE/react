var MyComponentLifeCircle = React.createClass({
  getDefaultProps: function(){
    return {
      val: "保存"
    }
  },
  getInitialState: function(){
    return {
      placeholder: "请填写您的信息"
    }
  },
  componentDidMount: function(){
    var MyInput = this.refs.MyInput.getDOMNodes();
    alert(MyInput + '已经插入到DOM tree');
  },
  render: function(){
    return (
      <form>
        <input type="text" ref="MyInput" placeholder="{this.state.placeholder}" />
        <input type="button" value="{this.props.val}}" />
      </form>
    )
  }
});

ReactDOM.render(
  <MyComponentLifeCircle val="提交" />,
  document.getElementById('example')
)
