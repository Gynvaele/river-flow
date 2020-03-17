import React from "react";
import { Mover } from "../../../redux/Todos/action";

export const DropBox = props => {
  //Drug and Drop
  const drop = e => {
    e.preventDefault();

    const box_id = props.id;
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";

    Mover(box_id, card_id);

    e.target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div id={props.id} className={props.className} onDrop={drop} onDragOver={dragOver}>
      {props.children}
    </div>
  );
};
