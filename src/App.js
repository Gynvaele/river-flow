import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {CreateNewTask} from "./pages/CreateNewTask";
import {TodoList} from "./pages/TodoList";

const App = () => {
    return (
        <BrowserRouter>
            <NavLink to={"/"}>ToDo list.</NavLink>
            <NavLink to={"/newTask"}>Create new task.</NavLink>
            <Switch>
                <Route exact path={"/"} render={(props) => (<TodoList props={props}/>)}/>
                <Route exact path={"/newTask"} render={(props) => (<CreateNewTask props={props}/>)}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
