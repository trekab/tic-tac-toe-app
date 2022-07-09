import "./App.css";
import Game from "./components/Game";
import Modal from "./components/Modal";
import NewGame from "./components/NewGame";

const App = () => {
  return (
    <div className="App">
      {/* <NewGame /> */}
      <Game />
      <Modal />
    </div>
  );
};

export default App;
