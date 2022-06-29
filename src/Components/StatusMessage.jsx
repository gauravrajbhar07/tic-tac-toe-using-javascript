import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every((el) => el !== null);

  return (
    <div>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? "X" : "O"}`}
      {!winner && noMovesLeft && "X and O tied"}
    </div>
  );
};

export default StatusMessage;
