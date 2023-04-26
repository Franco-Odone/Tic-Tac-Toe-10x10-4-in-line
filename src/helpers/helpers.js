// Se definen tres variables: "boardSize" es el tamaño del tablero, "winningLength" es la longitud requerida para ganar
// y "winningCombos" es un array vacío que almacenará todas las combinaciones ganadoras.
const boardSize = 10;
const winningLength = 4;
const winningCombos = [];

// Los siguientes cuatro bucles for generan todas las combinaciones ganadoras posibles (combos) para agregarlas al array winningCombos.

// El primer bucle genera todas las combinaciones ganadoras en las filas del tablero.
for (let row = 0; row < boardSize; row++) {
  for (let col = 0; col <= boardSize - winningLength; col++) {
    const combo = [];
    for (let i = 0; i < winningLength; i++) {
      combo.push(row * boardSize + col + i);
    }
    winningCombos.push(combo);
  }
}

// El segundo bucle genera todas las combinaciones ganadoras en las columnas del tablero.
for (let col = 0; col < boardSize; col++) {
  for (let row = 0; row <= boardSize - winningLength; row++) {
    const combo = [];
    for (let i = 0; i < winningLength; i++) {
      combo.push((row + i) * boardSize + col);
    }
    winningCombos.push(combo);
  }
}

// El tercer bucle genera todas las combinaciones ganadoras en las diagonales descendentes del tablero.
for (let row = 0; row <= boardSize - winningLength; row++) {
  for (let col = 0; col <= boardSize - winningLength; col++) {
    const combo = [];
    for (let i = 0; i < winningLength; i++) {
      combo.push((row + i) * boardSize + col + i);
    }
    winningCombos.push(combo);
  }
}

// El cuarto bucle genera todas las combinaciones ganadoras en las diagonales ascendentes del tablero.
for (let row = 0; row <= boardSize - winningLength; row++) {
  for (let col = winningLength - 1; col < boardSize; col++) {
    const combo = [];
    for (let i = 0; i < winningLength; i++) {
      combo.push((row + i) * boardSize + col - i);
    }
    winningCombos.push(combo);
  }
}

// Función para verificar si hay un ganador en el tablero
const calculateWinner = (board) => {
  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    const values = combo.map((index) => board[index]);
    if (values.every((val) => val === "X")) {
      return "X";
    }
    if (values.every((val) => val === "O")) {
      return "O";
    }
  }
  return null;
};

export { calculateWinner };
