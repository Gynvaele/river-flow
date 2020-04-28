import React, { useState } from "react";
import "./style.scss";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { login } from "../../redux/actions/loginActions";
import connect from "react-redux/lib/connect/connect";

const SingIn = ({ isAuth, dispatch }) => {
  const [email, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const Login = event => {
    event.preventDefault();

    console.log("Улетели на сервер");
    console.log("login: " + email);
    console.log("password: " + password);
    dispatch(login(email, password));

    setLogin("");
    setPassword("");
    console.log(isAuth);
  };
  return (
    <div id="SignIn">
      <form onSubmit={Login} className="container">
        <TextField
          type="text"
          label={"Login:"}
          value={email}
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

export default connect(({ isAuth }) => ({ isAuth }))(SingIn);
