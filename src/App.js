import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
// import {createStore} from "redux";
// import {Provider} from "react-redux";

//reducers
// import {todo} from "./redux/ToDo/ToDoReducer";

//components
import {CreateNewTask} from "./pages/CreateNewTask";
import {TodoList} from "./pages/TodoList";

//
// export const store = createStore(
//     todo,
// );

const App = () => {
    return (
        <BrowserRouter>
            {/*<Provider store={store}>*/}
                <NavLink to={"/"}>ToDo list.</NavLink>
                <NavLink to={"/createTodo"}>Create new task.</NavLink>
                <Switch>
                    <Route exact path={"/"} component={TodoList}/>)}/>
                    <Route exact path={"/createTodo"} render={(props) => (<CreateNewTask props={props}/>)}/>
                </Switch>
            {/*</Provider>*/}
        </BrowserRouter>
    );
};

export default App;
