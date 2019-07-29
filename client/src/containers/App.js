import React, { Component } from 'react';
import Counter from './Counter';
import Stuff from './Stuff';


class App extends Component {

  state = {
    myFaveNumber: 1
  }

  handleIncrement = () => {
    this.setState({ myFaveNumber: this.state.myFaveNumber + 1});
  }

  handleDecrement = () => {
    this.setState({ myFaveNumber: this.state.myFaveNumber - 1});
  }

  render() {
    return (
      <div>
        <Counter myFaveNumber={this.state.myFaveNumber}/>
        <Stuff
          myFaveNumber={this.state.myFaveNumber}
          handleUp={this.handleIncrement}
          handleDown={this.handleDecrement}/>
      </div>
    );
  }
}

export default App;
