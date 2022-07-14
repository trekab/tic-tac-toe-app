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

  const [turn, setTurn] = useState("x");

  const updatePlayerTurn = () => {
    setTurn(() => {
      if (turn === "x") {
        setTurn("o");
      } else {
        setTurn("x");
      }
    });
  };

  return (
    <div className="App">
      {/* <NewGame /> */}
      <Game turn={turn} />
      {/* <Modal winner="player 1" mark="o" msg={messages[1]} restart={false} /> */}
    </div>
  );
};

export default App;
