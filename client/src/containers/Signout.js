import React, { Component } from 'react';
import { signout } from "../actions";
import { connect } from 'react-redux';

class Signout extends Component {
  componentDidMount(){
    this.props.signout();
  }

  render(){
    return <h1>Sorry to see you go. $20</h1>;
  }
}


export default connect(null, { signout })(Signout);
