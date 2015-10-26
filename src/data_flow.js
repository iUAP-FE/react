var MyTitle = React.createClass({
    // 相当于接口文档
    propTypes: {
      title: React.PropTypes.string.isRequired,
    },
    // 定义初始化的state
    getInitialState: function(){
      return {
        times: 1
      }
    },
    // 定义一个改变组件state的方法
    handleClick: function(event){
      var preTimes = this.state.times;

      this.setState({
        times: preTimes + 1
      });
    },
    render: function() {
      return (
          <header>
            <h1>props: {this.props.title}</h1>
            <p onClick={this.handleClick}>click me! {this.state.times}</p>
          </header>
        );
    }
});

// 使用定义的组件
ReactDOM.render(
  <MyTitle title="Welcome To React!" />,
  document.getElementById('example')
);
