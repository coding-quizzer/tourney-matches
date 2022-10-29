import logo from './logo.svg';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import Match from './components/Match';
import './App.css';

function App() {
  return (
    <div className="App">
      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;
