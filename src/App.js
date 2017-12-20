import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowNumber from './ShowNum'

class App extends Component {
  constructor(){
    super()

    this.state = {
      number: 12,
     
    }
  
    this.add = this.add.bind(this)
    this.minus = this.minus.bind(this)
  }
    add(){
      this.setState({
        number: this.state.number + 5,
      })
  }
  minus(){
    this.setState({
      number: this.state.number - 10,
    })
  }


  render() {
    const { number } = this.state
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <ShowNumber number={number} add={this.add} minus={this.minus}/>
        </p>
      </div>
    );
  }
}

export default App;
