import React from "react";
import { Mover } from "../../../redux/actions/todos";
import { useDispatch } from "react-redux";

export const DropBox = props => {
  const dispatch = useDispatch();
  //Drug and Drop
  const drop = e => {
    e.preventDefault();

    const box_id = props.id;
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    // props.className = "tasks-col";

    dispatch(Mover(box_id, card_id));

    // e.target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();

    // как сделать ховер на блок?
    // props.className = "tasks-col-hover";
  };

  return (
    <div id={props.id} className={props.className} onDrop={drop} onDragOver={dragOver}>
      {props.children}
    </div>
  );
};
