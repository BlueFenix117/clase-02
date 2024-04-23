
import GameSearch from "./components/GameSearch";
import GameList from "./components/GameList";
import CreateGameButton from "./components/CreateGameButton";
import GameItem from "./components/GameItem";
import GameCounter from "./components/GameCounter";


function App() {
  return (
    <div className="App">

      <GameCounter/>

      <GameSearch/>

      <GameList>
        <GameItem/>
        <GameItem/>
        <GameItem/>
      </GameList>

      <CreateGameButton/>

    </div>
  );
}

export default App;