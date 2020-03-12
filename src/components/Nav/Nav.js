import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export const Nav = () => {
  return (
    <div id={"navigation"}>
      <NavLink exact to={"/"} className={"navButton"}>
        SignIn page
      </NavLink>
      <NavLink exact to={"/todos"} className={"navButton"}>
        ToDo list.
      </NavLink>
      <NavLink exact to={"/createTodo"} className={"navButton"}>
        Create new task.
      </NavLink>
    </div>
  );
};
