import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Modal from "./components/Modal";
import NewGame from "./components/NewGame";

const App = () => {
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
  const [winner, setWinner] = useState({ mark: "", name: "" });
  const [xWins, setXwins] = useState(0);
  const [oWins, setOwins] = useState(0);
  const [ties, setTies] = useState(0);
  const [gameOutcome, setGameOutcome] = useState(initialGrid);
  const [newGame, setNewGame] = useState(false);
  const [playerOne, setPlayerOne] = useState("o");

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
      setWinner({
        mark: "x",
        name: `${playerOne === "x" ? "player 1" : "player 2"}`,
      });
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
      setWinner({
        mark: "o",
        name: `${playerOne === "x" ? "player 2" : "player 1"}`,
      });
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
      setWinner({
        mark: "tie",
        name: "",
      });
      setTies((value) => value + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOutcome]);

  const resetGame = () => {
    setOwins(0);
    setXwins(0);
    setTies(0);
    setTurn("x");
  };

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

  const gameRestartHandler = () => {
    setNewGame(true);
    setDisplayModal(false);
  };

  const newGameButtonHandler = () => {
    setNewGame(false);
    setRestart(false);
    resetGame();
    setGameOutcome((gameOutcome) => ({ ...gameOutcome, ...initialGrid }));
  };

  const cancelGameRestart = () => {
    setDisplayModal(false);
    setRestart(false);
  };

  return (
    <div className="App">
      <NewGame
        className={newGame ? "" : "d-none"}
        newGameButtonHandler={newGameButtonHandler}
        playerOneChoice={setPlayerOne}
      />
      <Game
        turn={turn}
        updatePlayerTurn={updatePlayerTurn}
        gameOutcome={gameOutcome}
        cellClickHandler={cellClickHandler}
        restartButtonHandler={restartButtonHandler}
        xWins={xWins}
        oWins={oWins}
        ties={ties}
        className={newGame ? "d-none" : ""}
        playerOne={playerOne}
      />
      <Modal
        winner={winner.mark}
        mark={`${winner.mark === "x" ? "x" : "o"}`}
        msg={`${winner.name} wins!`}
        restart={restart}
        displayClass={displayModal ? "" : "d-none"}
        nextRoundHandler={nextRoundBtnHandler}
        gameRestartHandler={gameRestartHandler}
        cancelGameRestart={cancelGameRestart}
      />
    </div>
  );
};

export default App;
