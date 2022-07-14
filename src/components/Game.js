import React from "react";
import logo from "../assets/logo.svg";
import xturn from "../assets/icon-x-turn.svg";
import oturn from "../assets/icon-o-turn-alt.svg";
import GameCell from "./GameCell";

const Game = ({ turn, updatePlayerTurn, gameOutcome, clickHandler }) => {
  return (
    <div className="game">
      <header className="game-header">
        <img src={logo} alt="logo" className="game-header__logo" />
        <div className="game-header__turn">
          <div className="turn-icon">
            <img src={turn === "x" ? xturn : oturn} alt="player turn" />
          </div>
          <p>turn</p>
        </div>
        <button className="restart"></button>
      </header>
      <main className="game-grid">
        {Object.keys(gameOutcome).map((result) => (
          <GameCell
            className={gameOutcome[result]}
            key={result}
            clickHandler={clickHandler}
            cell={result}
            turn={turn}
            updatePlayerTurn={updatePlayerTurn}
          />
        ))}
      </main>
      <footer className="game-footer">
        <div className="game-footer__cell p1">
          <p className="p-result">x (you)</p>
          <p className="p-result__value">14</p>
        </div>
        <div className="game-footer__cell ties">
          <p className="p-result">ties</p>
          <p className="p-result__value">32</p>
        </div>
        <div className="game-footer__cell p2">
          <p className="p-result">o (cpu)</p>
          <p className="p-result__value">11</p>
        </div>
      </footer>
    </div>
  );
};

export default Game;
