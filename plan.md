## Learning goals

- How to make a form in react
  - What is a controlled form & why do we use it
  - Pitfill to avoid (gotchas)
- Callback props
  - Why do we use them
  - How do your write them step by step

## As a group of players, I want see the name of everyone who is playing, so we know who is playing

### Model:

Player: Object

- id: number
- name: string

Players: Player[]

Storage: State of a component

### Hardcode some players

### Processing / Output

- Map over the array and display them
- Maybe make seperate component for it

### Steps:

- [x] CRA
- [x] Making a component
- [x] Import the component and use it
- [x] Hardcode the players (as state)
- [x] Display the the players, map -> JSX

## As a group of players we want to add a player, so we can play with new people

### Making the input dynamic

- [x] Make a new component
- [x] UI
  - Button
  - Input field
- [x] Eventlisteners & handlers
  - onChange
  - onClick
    - event.preventDefault() -> do not refresh the page
- [x] Define a function (callback prop) in ScoreBoard
- [x] Pass the callback prop down the form
- [x] Call our callback prop and pass in name as an argument
- [x] Data
  - New id for the player
  - name (coming for the input field)
- [] Update the state
  - setter -> setPlayers
