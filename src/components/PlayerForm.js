import React, { useState } from "react";

export default function PlayerForm(props) {
  console.log("PROPS IN PLAYER FORM:", props);
  // Controlled Form:
  // The values of the form are managed by the state
  const [name, setName] = useState(localStorage.getItem("name") || "");

  function handleNameChange(event) {
    // console.log(event.target.value);
    localStorage.setItem("name", event.target.value);
    setName(event.target.value);
  }

  function handleAddPlayer(event) {
    event.preventDefault(); // do not resfresh, this is 2020
    console.log("add player", name);
    // CALL CALLBACK, PASS IN NAME AS AN ARGUMENT
    props.addPlayerToState(name);
    localStorage.removeItem("name");
    setName("");
  }

  return (
    <div>
      <form>
        <label>Name:</label>
        <input value={name} onChange={handleNameChange} />
        {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
        <button onClick={handleAddPlayer}>Add player</button>
      </form>
    </div>
  );
}
