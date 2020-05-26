import React, { useState } from "react";
import "./style.scss";

// REDUX IMPORT
import { useDispatch, useSelector } from "react-redux";
import { CreateNewTask } from "../../redux/actions";

// MATERIAL IMPORT
import { Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "50vw",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

export const NewTaskModal = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = useState("");
  const [fullText, setFullText] = useState("");
  const [performer, setPerformer] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let tasksCount = useSelector(({ todos }) => todos.tasks).length;

  const SubmitToDo = event => {
    event.preventDefault();
    const id = "_" + ++tasksCount;
    if (title.length > 1 || fullText.length > 1) {
      const post = {
        id: id,
        performer: performer,
        title: title,
        fullText: fullText,
        flag: "todoTasks",
      };

      dispatch(CreateNewTask(post));
      setTitle("");
      setFullText("");
      return handleClose();
    }
  };

  const handleChange = event => {
    setPerformer(event.target.value);
  };
  return (
    <div>
      <Tooltip title={"Add new Task"}>
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>Create new Task</div>
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
              <TextField select label="performer" value={performer} onChange={handleChange}>
                {/*Add select for developers*/}
                {/*{devs.map((elm, i) => (*/}
                {/*  <MenuItem value={elm.performer} key={"performer" + i}>{elm.performer}</MenuItem>*/}
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
            </form>{" "}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
