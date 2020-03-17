import React, { useState } from "react";
import { CreateNewTask } from "../../redux/Todos/action";
import connect from "react-redux/lib/connect/connect";
import "./createStyle.scss";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  input: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const CreateNewTodo = ({ dispatch }) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [fullText, setFullText] = useState("");
  const [description, setDescription] = useState("");
  const [contributor, setContributor] = useState("");

  const SubmitToDo = event => {
    event.preventDefault();
    if (title.length > 3 || fullText.length > 3) {
      const post = {
        title: title,
        fullText: fullText,
        description: description,
        contributor: contributor,
        flag: "toDo",
      };

      dispatch(CreateNewTask(post));

      setTitle("");
      setFullText("");
      setDescription("");
      console.log(post);
    }
  };

  const handleChange = event => {
    setContributor(event.target.value);
  };

  return (
    <form className={"create-form " + classes.input} onSubmit={SubmitToDo}>
      <TextField label={"Task title"} value={title} type="text" onChange={e => setTitle(e.target.value)} />
      <TextField
        label={"Task text"}
        multiline
        rowsMax={4}
        value={fullText}
        type="text"
        onChange={e => setFullText(e.target.value)}
      />
      <TextField label={"Description"} value={description} type="text" onChange={e => setDescription(e.target.value)} />
      <TextField select label="Contributor" value={contributor} onChange={handleChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {/*Add select for developers*/}
        {/*{devs.map((elm, i) => (*/}
        {/*  <MenuItem value={elm.contributor} key={"contributor" + i}>{elm.contributor}</MenuItem>*/}
        {/*))}*/}

        {/*Пока что заглушка*/}
        <MenuItem value={"Pasha"}>Pasha</MenuItem>
        <MenuItem value={"Sasha"}>Sasha</MenuItem>
        <MenuItem value={3}>Third</MenuItem>
      </TextField>
      <Button
        disabled={title.length < 3 || fullText.length < 3}
        onClick={SubmitToDo}
        variant={"contained"}
        size={"small"}
        color={"primary"}
        className={"createTask-button"}
      >
        Create
      </Button>
    </form>
  );
};

export default connect(() => ({}))(CreateNewTodo);
