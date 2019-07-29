import React, { Component } from 'react';

class Stuff extends Component {
  render() {
    return (
      <div>
        <h1>myFaveNumber: {this.props.myFaveNumber}</h1>
        <button onClick={this.props.handleUp}>Up</button>
        <button onClick={this.props.handleDown}>Down</button>
      </div>
    )
  }
}

export default Stuff;