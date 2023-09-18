import React, { useContext } from "react";
import Tile from "./Tile";
import Strike from "./Strike";
import AppContext from "../AppContext";

const Board = () => {
  const { tiles } = useContext(AppContext);

  return (
    <div className="board">
      {
        tiles.map((item,i)=>{
         return <Tile value={item} key={i} index={i}/>
        })
      }      
      <Strike />
    </div>
  );
};

export default Board;
