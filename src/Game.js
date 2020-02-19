import React from 'react';

function Game(props) {
  const value1 = Math.floor(Math.random() * 100);
  const value2 = Math.floor(Math.random() * 100);
  const value3 = Math.floor(Math.random() * 100);
  const proposedAnswer =
    Math.floor(Math.random() * 3) + value1 + value2 + value3;
  const actualAnswer = value1 + value2 + value3 === proposedAnswer;
  return (
    <div className="game">
      <h2>Mental Math</h2>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button
        onClick={() => {
          props.handleClick(true, actualAnswer);
        }}
      >
        True
      </button>
      <button
        onClick={() => {
          props.handleClick(false, actualAnswer);
        }}
      >
        False
      </button>
    </div>
  );
}

export default Game;
