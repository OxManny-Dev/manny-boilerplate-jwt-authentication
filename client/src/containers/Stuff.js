import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stuff extends Component {
  render() {
    return (
      <div>
        <h1>myFaveNumber: {this.props.counter}</h1>
      </div>
    )
  }
}

function mapStateToProps({ counter }) {
  return { counter: counter.counter };
}

export default connect(mapStateToProps, null)(Stuff);