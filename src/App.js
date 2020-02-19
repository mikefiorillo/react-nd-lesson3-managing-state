import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Score from './Score';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    numQuestions: 0,
    numCorrect: 0
  };
  handleClick(id, actualAnswer) {
    if (id === actualAnswer) {
      this.setState(prev => {
        return {
          numCorrect: prev.numCorrect + 1,
          numQuestions: prev.numQuestions + 1
        };
      });
    } else {
      this.setState(prev => {
        return {
          numQuestions: prev.numQuestions + 1
        };
      });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game handleClick={this.handleClick} />
        <Score
          numQuestions={this.state.numQuestions}
          numCorrect={this.state.numCorrect}
        />
      </div>
    );
  }
}

export default App;
