const WinsMessage = (props) => {
  if (!props.wins) {
    return <h2 className="zero">Currently with no wins</h2>
  } else if (props.wins === 1) {
    return <h2>Currently at 1 win.</h2>
  } else {
    return <h2>Currently at {props.wins} wins </h2>
  }

};
const Player = (props) => {
  return (
    <article className="Player">
      <h1>

        {props.firstName} <span>{props.gamerTag}</span> {props.lastName}

      </h1>
      <WinsMessage wins={props.wins} />
    </article>
    )
};

export default Player;

