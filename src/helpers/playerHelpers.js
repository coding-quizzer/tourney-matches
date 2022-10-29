export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player =>{
    const playerTag = player.gamerTag;
    const playerWins =  matchData.reduce((counter, current) => {
      if(current.winner === playerTag) {
        return counter + 1;
      } else {
        return counter;
      }
    }, 0);

    player.wins = playerWins;
    return player;
  });
};