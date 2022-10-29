import Match from "./Match";
const MatchList = (props) => {
  const matches = props.matchData.map(match => <Match key={match.matchNumber} players={match.players} winner={match.winner} scoreDifference={match.scoreDifference}></Match>)
  const oneMatch = props.matchData[0];
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  )
}

export default MatchList;