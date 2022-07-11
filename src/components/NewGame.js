import React from "react";
import logo from "../assets/logo.svg";

const NewGame = () => {
  return (
    <div className="new-game">
      <img src={logo} alt="logo" className="logo" />
      <div className="mark-choice">
        <h1>PICK PLAYER 1'S MARK</h1>
        <form>
          <div id="x-mark__section">
            <input type="radio" id="x" name="mark" value="x" />
            <label htmlFor="x"></label>
          </div>
          <div id="o-mark__section">
            <input type="radio" id="o" name="mark" value="o" />
            <label htmlFor="o"></label>
          </div>
        </form>
        <p>REMEMBER : X GOES FIRST</p>
      </div>
      <div className="buttons">
        <button>NEW GAME (VS CPU)</button>
        <button>NEW GAME (VS PLAYER)</button>
      </div>
    </div>
  );
};

export default NewGame;
