import React from "react";
import { DeleteTask } from "../../redux/actions/todos";
import { Post } from "../DrugAndDrop/Post/Post";
import { DropBox } from "../DrugAndDrop/DropBox/DropBox";
import connect from "react-redux/lib/connect/connect";

const Task = ({ tasks, dispatch, currentBox }) => {
  const Delete = id => {
    dispatch(DeleteTask(id));
  };

  const taskInBox = tasks.filter(tasks => tasks.flag === currentBox);

  return (
    <DropBox id={"todoTasks"} className={"tasks-col"}>
      {taskInBox.length === 0 && (
        <div className={"tasks"}>
          <div className="title">You have no eny started tasks.</div>
        </div>
      )}
      {taskInBox.length !== 0 && (
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
                    <h4>{elm.description}</h4>
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

export default connect(({ tasks }) => ({ tasks }))(Task);
