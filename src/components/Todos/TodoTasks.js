import connect from "react-redux/lib/connect/connect";
import React from "react";
import { DeleteNEWTask, moveToInWorkTodo } from "../../redux/Todos/action";

const TodoTasks = ({ todoTasks, dispatch }) => {
  const DeleteNewTodo = i => {
    dispatch(DeleteNEWTask(i));
  };
  const PinnedToWork = (elm, i) => {
    dispatch(moveToInWorkTodo(elm));
    DeleteNewTodo(i);
  };

  const DrugAndDrop = (event, i) => {
    console.log(event);
    console.log(i);
    let postId = document.getElementById("post" + i);
    let startCursorX;
    let startCursorY;
    let startX;
    let startY;

    postId.addEventListener("dragstart", function() {
      startCursorX = event.pageX;
      startCursorY = event.pageY;
      startX = postId.style.marginLeft.replace("px", "") * 1;
      startY = postId.style.marginTop.replace("px", "") * 1;
    });
    postId.addEventListener("dragend", function() {
      postId.style.position = "absolute";
      postId.style.marginLeft = startX + event.pageX - startCursorX; //позиция элемента + позиция курсора - позиция курсоа в начале перетаскивания
      postId.style.marginTop = startY + event.pageY - startCursorY; // Так же как и в предыдущем случае, только по другой оси
    });
  };

  return (
    <div className={"tasks-col"}>
      {todoTasks.length === 0 && (
        <div className={"tasks"}>
          <div className="title">No new todos yet.</div>
        </div>
      )}
      {todoTasks.length !== 0 && (
        <div className="tasks">
          <div className={"title"}>New ToDos ({todoTasks.length}):</div>
          {todoTasks.map((elm, i) => {
            return (
              <div
                key={"post" + i}
                id={"post" + i}
                className={"posts"}
                draggable={true}
                onMouseDown={event => DrugAndDrop(event, i)}
              >
                <div className="container">
                  <div className="post-title">{elm.title}</div>
                  <div className="post-content">
                    <h4>{elm.description}</h4>
                    <p>{elm.fullText}</p>
                  </div>
                  <button onClick={() => PinnedToWork(elm, i)}>InWork</button>
                  <button onClick={() => DeleteNewTodo(i)}>Delete {"todo"}</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default connect(({ todoTasks }) => ({ todoTasks }))(TodoTasks);
