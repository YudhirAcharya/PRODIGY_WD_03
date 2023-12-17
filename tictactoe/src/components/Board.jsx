import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";
export default function Board() {
  const [squares, setSquares] = useState(
    Array(9).fill(null)
  );
  const [isXTurn, setXTurn] = useState(true);

  const handleClick = (index) => {
    const stateArray = [...squares];

    console.log(stateArray);

    stateArray[index] = isXTurn ? "X" : "O";
    setSquares(stateArray);
    setXTurn(!isXTurn);
    console.log("clicked" + index);
  };
  const checkWin = () => {
    //if 0 1 2 equal then win
    //if 345,678,036,147,258,048,246 ...
    const winIf = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winIf.length; i++) {
      const [a, b, c] = winIf[i];
      if (
        squares[a] != null &&
        squares[a] === squares[b] &&
        squares[b] === squares[c] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const theWinner = checkWin();
  return (
    <>
      <h1>the winnner:{theWinner}</h1>
      <div className="board">
        <div className="row1">
          <Square
            tileID="11"
            value={squares[0]}
            onClick={() => handleClick(0)}
            //The reason for using an arrow function here is to ensure that handleClick(0) is not directly invoked when the Square component renders. If you were to use onClick={handleClick(0)}, it would immediately call handleClick(0) when the component renders, rather than waiting for a click event. By using an arrow function or a function reference (() => handleClick(0) or onClick={handleClick.bind(null, 0)}), you defer the execution of handleClick(0) until the Square is clicked.
          />
          <Square
            tileID="12"
            value={squares[1]}
            onClick={() => handleClick(1)}
          />
          <Square
            tileID="13"
            value={squares[2]}
            onClick={() => handleClick(2)}
          />
        </div>
        <div className="row1">
          <Square
            tileID="21"
            value={squares[3]}
            onClick={() => handleClick(3)}
          />
          <Square
            tileID="22"
            value={squares[4]}
            onClick={() => handleClick(4)}
          />
          <Square
            tileID="23"
            value={squares[5]}
            onClick={() => handleClick(5)}
          />
        </div>
        <div className="row1">
          <Square
            tileID="31"
            value={squares[6]}
            onClick={() => handleClick(6)}
          />
          <Square
            tileID="32"
            value={squares[7]}
            onClick={() => handleClick(7)}
          />
          <Square
            tileID="33"
            value={squares[8]}
            onClick={() => handleClick(8)}
          />
        </div>
      </div>
    </>
  );
}
