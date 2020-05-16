import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//components
import { Index } from "./pages/TodoList";
import { SingIn } from "./pages/SingIn/SingIn";
import { Nav } from "./components/Nav/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path={"/singIn"} render={() => <SingIn />} />
        <Route exact path={"/"} component={Index} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
