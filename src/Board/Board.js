import { Square } from "../Square/Square.js";
import "./board.css";

const Board = ({ squares, onClick, reload }) => {
  return (
    <div className="gameBoard container">
      <button className="button" onClick={() => reload(Array(100).fill(null))}>
        Reset
      </button>
      <div className="board">
        {squares.map((square, i) => {
          return <Square key={i} value={square} onClick={() => onClick(i)} />;
        })}
      </div>
    </div>
  );
};

export { Board };
