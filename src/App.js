import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {createStore} from "redux";
import Provider from "react-redux/lib/components/Provider";


//reducers
import {todo} from "./redux/Todos/reducer";

//components
import {NewToDo} from "./pages/NewToDo/NewToDo";
import {TodoList} from "./pages/TodoList";


export const store = createStore(
    todo,
);

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavLink to={"/"}>ToDo list.</NavLink>
                <NavLink to={"/createTodo"}>Create new task.</NavLink>
                <Switch>
                    <Route exact path={"/"} component={TodoList}/>)}/>
                    <Route exact path={"/createTodo"} render={() => (<NewToDo/>)}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;