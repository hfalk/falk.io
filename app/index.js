var ReactDOM = require('react-dom');
var React = require('react');

var HelloMessage = React.createClass({
  render: function () {
    return <h1>Hello {this.props.message}!</h1>;
  }
});

ReactDOM.render(<HelloMessage message="Word" />, document.getElementById('app'));
