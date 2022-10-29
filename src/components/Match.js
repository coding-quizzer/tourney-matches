const WinnerMessage = (props) => {
  return (props.winner 
    ? <h2>{props.winner} is the winner by {props.scoreDifference}!</h2> 
    : <h2> No winners yet!</h2>);
} 

const Match = (props) => {
  return (
    <article className="Match">
      <h1>

        {props.players[0]} <span>vs</span> {props.players[1]}

      </h1>
     <WinnerMessage winner={props.winner} scoreDifference={props.scoreDifference}/>
    </article>
  );
};

export default Match;