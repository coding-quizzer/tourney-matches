import playerData from "../data/playerData";
import matchData from "../data/matchData";
import Player from "./Player";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

const PlayerList = (props) => {
  console.log(playerData);
  const playerDataArray = preparePlayerData(playerData);
  console.log(playerDataArray);
  console.log(addWinsToPlayers(playerDataArray, matchData));
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  )
  
};

export default PlayerList;