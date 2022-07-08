import React from "react";
import logo from "../assets/logo.svg";

const Game = () => {
  return (
    <div className="game">
      <header className="game-header">
        <img src={logo} alt="logo" className="game-header__logo" />
        <div className="game-header__turn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7785 2.64487L13.3551 0.22153C13.0598 -0.0738435 12.5809 -0.0738435 12.2855 0.22153L8 4.50702L3.71451 0.22153C3.41914 -0.0738435 2.94024 -0.0738435 2.64487 0.22153L0.22153 2.64487C-0.0738435 2.94024 -0.0738435 3.41914 0.22153 3.71451L4.50702 8L0.22153 12.2855C-0.0738435 12.5809 -0.0738435 13.0598 0.22153 13.3551L2.64487 15.7785C2.94024 16.0738 3.41914 16.0738 3.71451 15.7785L8 11.493L12.2855 15.7785C12.5809 16.0738 13.0598 16.0738 13.3551 15.7785L15.7785 13.3551C16.0738 13.0598 16.0738 12.5809 15.7785 12.2855L11.493 8L15.7785 3.71451C16.0738 3.41914 16.0738 2.94024 15.7785 2.64487Z"
              fill="#A8BFC9"
            />
          </svg>
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
