import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prevValue) => !prevValue);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleKeyDown(event) {
    const key = event.key;
    if (key === "Enter") {
      handleEditClick();
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    setPlayerName(value);
  }

  let editqablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editqablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editqablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
