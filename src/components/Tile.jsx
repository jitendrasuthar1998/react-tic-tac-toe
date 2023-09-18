import React, { useContext } from "react";
import AppContext from "../AppContext";

const Tile = (props) => {
  const { value, index } = props;

  const { handleTileClick, playerTurn } = useContext(AppContext);

  let hoverClass = null;

  if (value === null && playerTurn !== null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }

  return (
    <div
      className={`tile ${hoverClass}`}
      onClick={() => handleTileClick(index)}
    >
      {value}
    </div>
  );
};

export default Tile;
