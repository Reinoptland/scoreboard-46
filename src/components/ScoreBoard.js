import React, { useState } from "react";
import Player from "./Player";
import PlayerForm from "./PlayerForm";

export default function ScoreBoard() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "David",
    },
    {
      id: 2,
      name: "Alexandra",
    },
  ]);

  // DEFINE CALLBACK PROP
  function addPlayerToState(playerName) {
    const newId = Math.floor(Math.random() * 1000000000);
    console.log("DO WE HAVE THE DATA", newId, playerName);

    const newPlayer = {
      id: newId,
      name: playerName,
    };

    // players.push(newPlayer) -> it works, but you shouldn't
    // players.push(newPlayer);
    // console.log(players);

    // YES, like this
    // create a new array with all the players from before
    // [...players], add another player, [...players, newPlayer]
    const updatedPlayers = [...players, newPlayer];

    setPlayers(updatedPlayers);
  }

  console.log(players);
  return (
    <div>
      ScoreBoard
      <div>
        {players.map((player) => {
          return <Player key={player.id} name={player.name} />;
        })}
      </div>
      {/* PASS CALLBACK PROP DOWN */}
      <PlayerForm addPlayerToState={addPlayerToState} />
    </div>
  );
}
