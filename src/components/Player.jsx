import { useState } from "react";

export default function Player({
  initialName,
  symble,
  isActive,
  onChangeName,
}) {
  const [playerName, isPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handelEditClick() {
    setIsEditing(!isEditing);

    if (isEditing) {
      onChangeName(symble, playerName);
    }
  }

  function handleChange(event) {
    isPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symble}</span>
      </span>
      <button onClick={handelEditClick}>{btnCaption}</button>
    </li>
  );
}
