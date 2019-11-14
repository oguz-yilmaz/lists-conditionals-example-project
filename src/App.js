import React, { Component } from 'react';
import './App.css';

import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {

  state = {
    text: ""
  };

  onTextChangeHandler = (event) => {
    const txt = event.target.value;
    this.setState({text: txt});
  };
  

  clickHandlerForChar = (index) => {
    let str = this.state.text;
    str = str.slice(0, index) + str.slice(index+1);
    this.setState({text: str});
  };

  render() {
    const style = {
      marginBottom : "50px"
    };

    let charJSX = [];
    let hand;
    for (let i = 0; i < this.state.text.length; i++) {
      charJSX.push(<Char key={i} click={() => this.clickHandlerForChar(i)} char={this.state.text.charAt(i)}/>);
    }

    return (
      <div className="App">
        <div style={style}>
          <input type="text" value={this.state.text} onChange={this.onTextChangeHandler} />
          <Validation leng={this.state.text.length}/>
          {charJSX}
        </div>
      </div>
    );
  }
}

export default App;
