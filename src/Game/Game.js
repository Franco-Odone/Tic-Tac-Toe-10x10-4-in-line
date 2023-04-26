import { useState } from "react";
import { Board } from "../Board/Board.js";
import { calculateWinner } from "../helpers/helpers.js";
import "./game.css";

const Game = () => {
  // El Valor de la variable de estado "board" es un array para generar el tablero de manera visual y para obtener los elementos de acuerdo a su índice, en el archivo helpers.js debo pensar en tablero como tal y no en el array.
  const [board, setBoard] = useState(Array(100).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // La segunda línea de la función verifica si ya hay un ganador o si el cuadrado en el índice "i" del array "boardCopy" ya está ocupado.
    // Si se cumple cualquiera de estas condiciones, la función se detiene y no hace nada más.
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <div id="statusArea" className="status instruction">
          Next player: {xIsNext ? "X" : "O"}
        </div>
        <div id="winnerArea" className="winner instruction">
          {winner && `Winner: ${winner}`}
        </div>
        <Board squares={board} onClick={handleClick} reload={setBoard} />
      </div>
    </div>
  );
};

export { Game };
