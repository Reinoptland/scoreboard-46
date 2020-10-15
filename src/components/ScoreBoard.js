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

  console.log(players);
  return (
    <div>
      ScoreBoard
      <div>
        {players.map((player) => {
          return <Player key={player.id} name={player.name} />;
        })}
      </div>
      <PlayerForm />
    </div>
  );
}
