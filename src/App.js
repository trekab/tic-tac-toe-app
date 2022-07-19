import { useEffect, useState } from "react";
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
  const [displayModal, setDisplayModal] = useState(false);
  const [winner, setWinner] = useState("");
  const [gameOutcome, setGameOutcome] = useState({
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
    cell5: "",
    cell6: "",
    cell7: "",
    cell8: "",
    cell9: "",
  });

  const updatePlayerTurn = () => {
    if (turn === "x") {
      setTurn("o");
    } else if (turn === "o") {
      setTurn("x");
    }
  };

  useEffect(() => {
    if (
      (gameOutcome.cell1 === "x" &&
        gameOutcome.cell2 === "x" &&
        gameOutcome.cell3 === "x") ||
      (gameOutcome.cell4 === "x" &&
        gameOutcome.cell5 === "x" &&
        gameOutcome.cell6 === "x") ||
      (gameOutcome.cell7 === "x" &&
        gameOutcome.cell8 === "x" &&
        gameOutcome.cell9 === "x") ||
      (gameOutcome.cell1 === "x" &&
        gameOutcome.cell4 === "x" &&
        gameOutcome.cell7 === "x") ||
      (gameOutcome.cell2 === "x" &&
        gameOutcome.cell5 === "x" &&
        gameOutcome.cell8 === "x") ||
      (gameOutcome.cell3 === "x" &&
        gameOutcome.cell6 === "x" &&
        gameOutcome.cell9 === "x") ||
      (gameOutcome.cell1 === "x" &&
        gameOutcome.cell5 === "x" &&
        gameOutcome.cell9 === "x") ||
      (gameOutcome.cell3 === "x" &&
        gameOutcome.cell5 === "x" &&
        gameOutcome.cell7 === "x")
    ) {
      setDisplayModal(true);
      setWinner("x");
    } else if (
      (gameOutcome.cell1 === "o" &&
        gameOutcome.cell2 === "o" &&
        gameOutcome.cell3 === "o") ||
      (gameOutcome.cell4 === "o" &&
        gameOutcome.cell5 === "o" &&
        gameOutcome.cell6 === "o") ||
      (gameOutcome.cell7 === "o" &&
        gameOutcome.cell8 === "o" &&
        gameOutcome.cell9 === "o") ||
      (gameOutcome.cell1 === "o" &&
        gameOutcome.cell4 === "o" &&
        gameOutcome.cell7 === "o") ||
      (gameOutcome.cell2 === "o" &&
        gameOutcome.cell5 === "o" &&
        gameOutcome.cell8 === "o") ||
      (gameOutcome.cell3 === "o" &&
        gameOutcome.cell6 === "o" &&
        gameOutcome.cell9 === "o") ||
      (gameOutcome.cell1 === "o" &&
        gameOutcome.cell5 === "o" &&
        gameOutcome.cell9 === "o") ||
      (gameOutcome.cell3 === "o" &&
        gameOutcome.cell5 === "o" &&
        gameOutcome.cell7 === "o")
    ) {
      setDisplayModal(true);
      setWinner("o");
    } else if (
      gameOutcome.cell1 !== "" &&
      gameOutcome.cell2 !== "" &&
      gameOutcome.cell3 !== "" &&
      gameOutcome.cell4 !== "" &&
      gameOutcome.cell5 !== "" &&
      gameOutcome.cell6 !== "" &&
      gameOutcome.cell7 !== "" &&
      gameOutcome.cell8 !== "" &&
      gameOutcome.cell9 !== ""
    ) {
      setDisplayModal(true);
      setWinner("tie");
    }
  }, [gameOutcome]);

  const cellClickHandler = (cell, value) => {
    const updatedResult = {};
    updatedResult[cell] = value;
    setGameOutcome((gameOutcome) => ({ ...gameOutcome, ...updatedResult }));
    console.log(gameOutcome);
  };

  return (
    <div className="App">
      {/* <NewGame /> */}
      <Game
        turn={turn}
        updatePlayerTurn={updatePlayerTurn}
        gameOutcome={gameOutcome}
        cellClickHandler={cellClickHandler}
      />
      <Modal
        winner={winner}
        mark={`${winner === "x" ? "x" : "o"}`}
        msg={`${winner === "x" ? "player 1" : "player 2"} wins!`}
        restart={false}
        displayClass={displayModal ? "" : "d-none"}
      />
    </div>
  );
};

export default App;
