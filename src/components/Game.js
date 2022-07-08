import React from "react";
import logo from "../assets/logo.svg";

const Game = () => {
  return (
    <div className="game">
      <header className="game-header">
        <img src={logo} alt="logo" className="game-header__logo" />
        <div className="game-header__turn">
          <div className="turn-icon"></div>
          <p>turn</p>
        </div>
        <div className="restart"></div>
      </header>
      <main className="game-grid">
        <div className="game-grid__cell"></div>
        <div className="game-grid__cell"></div>
        <div className="game-grid__cell"></div>
        <div className="game-grid__cell"></div>
        <div className="game-grid__cell"></div>
        <div className="game-grid__cell"></div>
        <div className="game-grid__cell"></div>
        <div className="game-grid__cell"></div>
        <div className="game-grid__cell"></div>
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
