import React from "react";
import logo from "../assets/logo.svg";
import outlineO from "../assets/icon-o-outline.svg";
import outlineX from "../assets/icon-x-outline.svg";

const NewGame = () => {
  return (
    <div className="new-game">
      <img src={logo} alt="logo" className="logo" />
      <div className="mark-choice">
        <h1>PICK PLAYER 1'S MARK</h1>
        <form>
          <div>
            <input type="radio" id="x" name="mark" value="x" />
            <label htmlFor="x">
              <img src={outlineX} alt="x" className="outline" />
            </label>
          </div>
          <div>
            <input type="radio" id="o" name="mark" value="o" />
            <label htmlFor="o">
              <img src={outlineO} alt="o" className="outline" />
            </label>
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
