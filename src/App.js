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

  return (
    <div className="App">
      {/* <NewGame /> */}
      <Game />
      {/* <Modal winner="tie" mark="x" msg={messages[1]} restart={false} /> */}
    </div>
  );
};

export default App;
