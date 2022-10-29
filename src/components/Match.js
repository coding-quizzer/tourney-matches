const Match = (props) => {
  const [player1, player2] = props.players;
  const winner = props.lastName;
  const scoreDifference = props.scoreDifference;
  return (
    <article className="Match">
      <h1>

        {player1} <span>vs</span> {player2}

      </h1>
      {/* To be shown when there is a winner */}
      <h2>{winner} is the winner by {props.scoreDifference}!</h2>
      {/* To be whown when there is no winner */}
      <h2>No winners yet!</h2>
    </article>
  );
};

export default Match;