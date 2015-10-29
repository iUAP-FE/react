var MyComponent = React.createClass({
    render: function (){
      return (
        <h1 className="header">我的第一个组件</h1>
      )
    }
});

ReactDOM.render(<MyComponent />, document.getElementById('example'));
