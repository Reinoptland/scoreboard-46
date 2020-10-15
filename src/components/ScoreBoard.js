import React, { useState } from "react";

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
  return <div>ScoreBoard</div>;
}
