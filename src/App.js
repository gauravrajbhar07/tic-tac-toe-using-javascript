import React, { useState } from "react";
import Board from "./Components/Board";
import { calculateWinner } from "./Styles/Helpers";

import "./Styles/root.scss"

const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);


  const winner = calculateWinner(board)

  const message = winner ? `winner is ${winner}` : `Next player is ${isXNext ? "X" : "O"}`;






  const handleSquareClick = (position) => {
    if (Board[position] || winner) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        } else {
          return square;
        }
      });
    });

    setIsXNext((prev) => !prev);
  };



  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>

      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  )
}

export default App;