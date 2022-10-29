
import './App.css';
import playerData from './data/playerData';
import matchData from './data/matchData';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers";


function App() {
  const playerDataArray = addWinsToPlayers(preparePlayerData(playerData), matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches{" "} 
        <span>Where Coding and tournaments found their Match!</span>
      </h1>
          <PlayerList playerDataArray={playerDataArray} />
          <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
