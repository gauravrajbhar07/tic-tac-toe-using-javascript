import React from "react";
import Board from "./Components/Board";

import "./Styles/root.scss"

const App = () => {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  )
}

export default App;