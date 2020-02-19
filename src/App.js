import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game
          numQuestions={this.state.numQuestions}
          numCorrect={this.state.numCorrect}
        />
      </div>
    );
  }
}

export default App;
