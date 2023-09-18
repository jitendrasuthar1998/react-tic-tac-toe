import React, { useContext } from "react";
import AppContext from "../AppContext";
import GameState from "./GameState";

const GameOver = () => {
  const { gameState } = useContext(AppContext);

  switch (gameState) {
    case GameState.inProgress:
      return <></>;

    case GameState.playerOWins:
      return <div className="game-over">O Wins</div>;

    case GameState.playerXWins:
      return <div className="game-over">X Wins</div>;

    case GameState.draw:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }
};

export default GameOver;
