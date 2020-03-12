import React, { useState } from "react";
import "./style.scss";

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
      <div className="container">
        <form onSubmit={Login}>
          <div>
            <span>Login:</span>
            <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
          </div>
          <div>
            <span>Password:</span>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button onClick={Login}>Confirm</button>
        </form>
      </div>
      {/*<canvas id="rainfall" width="800" height="600" style={{ border: "1px solid black" }}></canvas>*/}
    </div>
  );
};
