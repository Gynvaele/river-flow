import React, { useEffect } from "react";
import { DeleteTask, obtainTasks } from "../../redux/actions";
import { Post } from "../DrugAndDrop/Post/Post";
import { DropBox } from "../DrugAndDrop/DropBox/DropBox";
import { useDispatch, useSelector } from "react-redux";

const TodoList = ({ currentBox, taskInBox }) => {
  const dispatch = useDispatch();

  function Delete(id) {
    dispatch(DeleteTask(id));
  }

  return (
    <DropBox id={currentBox} className={"tasks-col"}>
      {!taskInBox.length && (
        <div className={"tasks"}>
          <div className="title">You have no eny started tasks.</div>
        </div>
      )}
      {taskInBox.length && (
        <div className="tasks">
          <div className={"title"}>New ToDos ({taskInBox.length}):</div>
          {taskInBox.map((elm, i) => {
            return (
              <Post
                key={"post_" + elm.title + i}
                id={elm.id}
                className={"posts"}
                draggable={true}
                // PinnedToWork={PinnedToWork}
              >
                <div className="container">
                  <div className="post-title">{elm.title}</div>
                  <div className="post-content">
                    <p>{elm.fullText}</p>
                  </div>
                  <button onClick={() => Delete(elm.id)}>Delete {"todo"}</button>
                </div>
              </Post>
            );
          })}
        </div>
      )}
    </DropBox>
  );
};

TodoList.defaultProps = {
  taskInBox: [],
};

export default TodoList;
