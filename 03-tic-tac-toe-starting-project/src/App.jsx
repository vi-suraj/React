import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function helperActivePlayer(player) {
  let currentPlayer = "X";

  if (player.length > 0 && player[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = helperActivePlayer(gameTurns);

  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const currentPlayer = helperActivePlayer(prevTurn);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player ">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <GameBoard onSelectedSquare={handleSelectedSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App;
