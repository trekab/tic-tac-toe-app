import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Modal from "./components/Modal";
import NewGame from "./components/NewGame";

const App = () => {
  const messages = [
    "oh no, you lost...",
    "player 1 wins!",
    "player 2 wins!",
    "you won!",
  ];

  const results = {
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
    cell5: "",
    cell6: "",
    cell7: "",
    cell8: "",
    cell9: "",
  };

  const [turn, setTurn] = useState("x");
  const [gameOutcome, setGameOutcome] = useState(results);

  const updatePlayerTurn = () => {
    if (turn === "x") {
      setTurn("o");
    } else if (turn === "o") {
      setTurn("x");
    }
  };

  const cellClickHandler = (cell, value) => {
    const updatedValue = { cell: value };
    setGameOutcome((gameOutcome) => ({ ...gameOutcome, ...updatedValue }));
  };

  return (
    <div className="App">
      {/* <NewGame /> */}
      <Game
        turn={turn}
        updatePlayerTurn={updatePlayerTurn}
        gameOutcome={gameOutcome}
        clickHandler={cellClickHandler}
      />
      {/* <Modal winner="player 1" mark="o" msg={messages[1]} restart={false} /> */}
    </div>
  );
};

export default App;
