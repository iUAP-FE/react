/*
 * example
 */
var Counter = React.createClass({
  getInitialState: function () {
    return { clickCount: 0 };
  },
  handleClick: function () {
    this.setState(function(state) {
      return {clickCount: state.clickCount + 1};
    });
  },
  render: function () {
    return (<h2 onClick={this.handleClick}>点我点我! <br />被戳次数: {this.state.clickCount}</h2>);
  }
});

ReactDOM.render(
  <Counter />,
  document.getElementById('example')
);