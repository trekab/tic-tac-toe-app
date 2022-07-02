import React from "react";
import logo from "../assets/logo.svg";

const NewGame = () => {
  return (
    <>
      <img src={logo} alt="logo" className="logo" />
      <div className="mark-choice">
        <h1>PICK PLAYER 1'S MARK</h1>
        <form>
          <input type="radio" id="x" name="mark" value="x" />
          <label htmlFor="x">X</label>
          <input type="radio" id="o" name="mark" value="o" />
          <label htmlFor="o">O</label>
        </form>
        <p>REMEMBER : X GOES FIRST</p>
      </div>
      <div className="buttons">
        <button>NEW GAME (VS CPU)</button>
        <button>NEW GAME (VS PLAYER)</button>
      </div>
    </>
  );
};

export default NewGame;
