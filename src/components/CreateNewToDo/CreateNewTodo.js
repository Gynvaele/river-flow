import React, { useState } from "react";
import { CreateNewTask } from "../../redux/Todos/action";
import connect from "react-redux/lib/connect/connect";

const CreateNewTodo = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [fullText, setFullText] = useState("");
  const [description, setDescription] = useState("");

  const SubmitToDo = event => {
    event.preventDefault();
    if (title.length > 3 || fullText.length > 3) {
      const post = {
        title: title,
        fullText: fullText,
        description: description,
      };

      dispatch(CreateNewTask(post));

      setTitle("");
      setFullText("");
      setDescription("");
      console.log(post);
    }
  };

  return (
    <form onSubmit={SubmitToDo}>
      <div>
        Title:
        <input placeholder={"Title"} value={title} type="text" onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        Full text:
        <input placeholder={"Text"} value={fullText} type="text" onChange={e => setFullText(e.target.value)} />
      </div>
      <div>
        Description:
        <input
          placeholder={"Description"}
          value={description}
          type="text"
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <button disabled={title.length < 3 || fullText.length < 3} onClick={SubmitToDo}>
        Create todos
      </button>
    </form>
  );
};

export default connect(() => ({}))(CreateNewTodo);
