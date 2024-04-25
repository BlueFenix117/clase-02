
import GameSearch from "./components/GameSearch";
import GameList from "./components/GameList";
import CreateGameButton from "./components/CreateGameButton";
import GameItem from "./components/GameItem";
import GameCounter from "./components/GameCounter";
import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const defaultGames = [
  {text : 'Cuphead', completed: false},
  {text : 'Hellblade', completed: false},
  {text : 'Rayman Legends', completed: true},
  {text : 'Crash Bandicoot', completed: true},
  {text : 'Fallout', completed: false},
  {text : 'Grand Theft Auto V', completed: true},
]


function App() {

  const [games, saveGames] = useLocalStorage('Games', defaultGames)
  const [searchValue, setSearchValue] = React.useState('');
  const [insertedGame, setInsertedGame] = React.useState('');

  //Estados Derivados
  const gamesCompleted = games.filter((game) => game.completed).length;
  const totalGames = games.length;

  //Estado derivado para busquedas
  const searchedGames = games.filter((game) => 
      game.text.includes(searchValue)
    )
  
  const completeGame = (text) => {
      const newGames = [...games];
      const gameIndex = newGames.findIndex((game) => game.text === text)
      newGames[gameIndex].completed = true;
      saveGames(newGames);
    }
  
    const deleteGame = (text) => {
      const newGames = [...games];
      const gameIndex = newGames.findIndex((game) => game.text === text)
      newGames.splice(gameIndex, 1);
      saveGames(newGames);
    }

    React.useEffect(() => {
      if(insertedGame){

        if(games.filter((game) => game.text === insertedGame).length >=1){
          {alert("Juego ya existente")}
        }else{

          let newGames;

          newGames = [
            ...games,
            {text : insertedGame, completed: false},
          ]
          saveGames(newGames);
          {alert("Guardado Exitoso")}
        }
      }
      setInsertedGame('');
    },[insertedGame])

  return (
    <div className="App">

      <GameCounter completed = {gamesCompleted} total={totalGames}/>

      <GameSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <GameList>
        {searchedGames.map( (game, index) => (
          <GameItem
          key={index}
          text ={game.text}
          completed ={game.completed}
          onComplete = {() => completeGame(game.text)}
          onDelete = {() => deleteGame(game.text)}
          />
        ))}
      </GameList>

      <CreateGameButton
        setInsertedGame = {setInsertedGame}
      />

    </div>
  );
}

export default App;