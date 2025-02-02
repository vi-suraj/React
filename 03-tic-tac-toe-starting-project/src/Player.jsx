import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [defaultInput, setDefaultInput] = useState(name);

  const handleEditing = () => {
    setIsEditing((setEdit) => !setEdit);
  };

  const handleInputValue = (e) => {
    setDefaultInput(e.target.value);
  };

  let playerName = <span className="player-name">{defaultInput}</span>;
  if (isEditing) {
    playerName = <input type="text" value={defaultInput} onChange={handleInputValue} required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
