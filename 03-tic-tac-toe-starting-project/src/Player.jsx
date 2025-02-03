import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditing = () => {
    setIsEditing((setEdit) => !setEdit);
  };

  const handleInputValue = (e) => {
    setPlayerName(e.target.value);
  };

  let playerNameValue = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerNameValue = <input type="text" value={playerName} onChange={handleInputValue} required />;
  }

  return (
    <li>
      <span className="player">
        {playerNameValue}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
