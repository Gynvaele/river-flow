import React, { useState } from "react";
import "./style.scss";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const SingIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const Login = event => {
    event.preventDefault();

    console.log("Улетели на сервер");
    console.log("login: " + login);
    console.log("password: " + password);

    setLogin("");
    setPassword("");
  };
  return (
    <div id="SignIn">
      <form onSubmit={Login} className="container">
        <TextField
          type="text"
          label={"Login:"}
          value={login}
          onChange={e => setLogin(e.target.value)}
          className={"singIn-input"}
        />
        <TextField
          type="password"
          label={"Password:"}
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={"singIn-input"}
        />
        <Button onClick={Login} variant={"contained"} size={"small"} color={"primary"} className={"sign-button"}>
          Sign In
        </Button>
      </form>
      {/*container for weather background*/}
      {/*<canvas id="rainfall" width="800" height="600" style={{ border: "1px solid black" }}></canvas>*/}
    </div>
  );
};
