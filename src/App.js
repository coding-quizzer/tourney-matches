import logo from './logo.svg';
import PlayerList from './components/PlayerList';
import Player from './components/Player';
import MatchList from './components/MatchList';
import Match from './components/Match';
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayerList />
      <Player />
      <MatchList />
      <Match />

      
    </div>
  );
}

export default App;
