import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Modal from "./components/Modal";
import NewGame from "./components/NewGame";

const App = () => {
  // const messages = [
  //   "oh no, you lost...",
  //   "player 1 wins!",
  //   "player 2 wins!",
  //   "you won!",
  // ];

  const initialGrid = {
    cell1: { value: "", clicked: false },
    cell2: { value: "", clicked: false },
    cell3: { value: "", clicked: false },
    cell4: { value: "", clicked: false },
    cell5: { value: "", clicked: false },
    cell6: { value: "", clicked: false },
    cell7: { value: "", clicked: false },
    cell8: { value: "", clicked: false },
    cell9: { value: "", clicked: false },
  };

  const [turn, setTurn] = useState("x");
  const [displayModal, setDisplayModal] = useState(false);
  const [restart, setRestart] = useState(false);
  const [winner, setWinner] = useState("");
  const [xWins, setXwins] = useState(0);
  const [oWins, setOwins] = useState(0);
  const [ties, setTies] = useState(0);
  const [gameOutcome, setGameOutcome] = useState(initialGrid);

  const updatePlayerTurn = () => {
    if (turn === "x") {
      setTurn("o");
    } else if (turn === "o") {
      setTurn("x");
    }
  };

  useEffect(() => {
    if (
      (gameOutcome.cell1.value === "x" &&
        gameOutcome.cell2.value === "x" &&
        gameOutcome.cell3.value === "x") ||
      (gameOutcome.cell4.value === "x" &&
        gameOutcome.cell5.value === "x" &&
        gameOutcome.cell6.value === "x") ||
      (gameOutcome.cell7.value === "x" &&
        gameOutcome.cell8.value === "x" &&
        gameOutcome.cell9.value === "x") ||
      (gameOutcome.cell1.value === "x" &&
        gameOutcome.cell4.value === "x" &&
        gameOutcome.cell7.value === "x") ||
      (gameOutcome.cell2.value === "x" &&
        gameOutcome.cell5.value === "x" &&
        gameOutcome.cell8.value === "x") ||
      (gameOutcome.cell3.value === "x" &&
        gameOutcome.cell6.value === "x" &&
        gameOutcome.cell9.value === "x") ||
      (gameOutcome.cell1.value === "x" &&
        gameOutcome.cell5.value === "x" &&
        gameOutcome.cell9.value === "x") ||
      (gameOutcome.cell3.value === "x" &&
        gameOutcome.cell5.value === "x" &&
        gameOutcome.cell7.value === "x")
    ) {
      setDisplayModal(true);
      setWinner("x");
      setXwins((value) => value + 1);
    } else if (
      (gameOutcome.cell1.value === "o" &&
        gameOutcome.cell2.value === "o" &&
        gameOutcome.cell3.value === "o") ||
      (gameOutcome.cell4.value === "o" &&
        gameOutcome.cell5.value === "o" &&
        gameOutcome.cell6.value === "o") ||
      (gameOutcome.cell7.value === "o" &&
        gameOutcome.cell8.value === "o" &&
        gameOutcome.cell9.value === "o") ||
      (gameOutcome.cell1.value === "o" &&
        gameOutcome.cell4.value === "o" &&
        gameOutcome.cell7.value === "o") ||
      (gameOutcome.cell2.value === "o" &&
        gameOutcome.cell5.value === "o" &&
        gameOutcome.cell8.value === "o") ||
      (gameOutcome.cell3.value === "o" &&
        gameOutcome.cell6.value === "o" &&
        gameOutcome.cell9.value === "o") ||
      (gameOutcome.cell1.value === "o" &&
        gameOutcome.cell5.value === "o" &&
        gameOutcome.cell9.value === "o") ||
      (gameOutcome.cell3.value === "o" &&
        gameOutcome.cell5.value === "o" &&
        gameOutcome.cell7.value === "o")
    ) {
      setDisplayModal(true);
      setWinner("o");
      setOwins((value) => value + 1);
    } else if (
      gameOutcome.cell1.value !== "" &&
      gameOutcome.cell2.value !== "" &&
      gameOutcome.cell3.value !== "" &&
      gameOutcome.cell4.value !== "" &&
      gameOutcome.cell5.value !== "" &&
      gameOutcome.cell6.value !== "" &&
      gameOutcome.cell7.value !== "" &&
      gameOutcome.cell8.value !== "" &&
      gameOutcome.cell9.value !== ""
    ) {
      setDisplayModal(true);
      setWinner("tie");
      setTies((value) => value + 1);
    }
  }, [gameOutcome]);

  const cellClickHandler = (cell, value, clicked) => {
    const updatedResult = {};
    updatedResult[cell] = { value, clicked };
    setGameOutcome((gameOutcome) => ({ ...gameOutcome, ...updatedResult }));
  };

  const restartButtonHandler = () => {
    setRestart(true);
    setDisplayModal(true);
  };

  const nextRoundBtnHandler = () => {
    setDisplayModal(false);
    setTurn("x");
    setGameOutcome((gameOutcome) => ({ ...gameOutcome, ...initialGrid }));
    setRestart(false);
  };

  return (
    <div className="App">
      {/* <NewGame /> */}
      <Game
        turn={turn}
        updatePlayerTurn={updatePlayerTurn}
        gameOutcome={gameOutcome}
        cellClickHandler={cellClickHandler}
        restartButtonHandler={restartButtonHandler}
        xWins={xWins}
        oWins={oWins}
        ties={ties}
      />
      <Modal
        winner={winner}
        mark={`${winner === "x" ? "x" : "o"}`}
        msg={`${winner === "x" ? "player 1" : "player 2"} wins!`}
        restart={restart}
        displayClass={displayModal ? "" : "d-none"}
        nextRoundHandler={nextRoundBtnHandler}
      />
    </div>
  );
};

export default App;
