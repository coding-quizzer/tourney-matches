import Player from "./Player";

const PlayerList = (props) => {
  const matches = props.playerDataArray.map(player => <Player key={player.gamerTag} gamerTag={player.gamerTag} firstName={player.firstName} lastName={player.lastName} wins={player.wins}></Player>);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {matches}
    </section>
  )
  
};

export default PlayerList;