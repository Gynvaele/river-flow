import React, {useState} from "react";
// import {SubmitToDo} from "../../redux/ToDo/ToDoAction";
// import {connect} from "react-redux";
import {defaultData} from "../../default/data";

export const CreateNewTask = ({dispatch}) => {
    const [description, setDescription] = useState([]);


    const [post, setPost] = useState([]);

    const SetDefaultData = () => {
        const data = defaultData;
        localStorage.setItem("data", JSON.stringify(data));
    };
    SetDefaultData();

    const GetData = () => {
        const data = localStorage.getItem("data");
        setPost(JSON.parse(data));
        console.log("description", JSON.parse(data));
    };

    return (
        <div>
            <div>
                <h3>Create new task:</h3>
                <input type="text" placeholder={"Description"} value={description}
                       onChange={(e) => setDescription(e.target.value)}/>
                {/*<input type={"text"} placeholder={"Add your new task."}/>*/}
                {/*add some check*/}
                {/*<button onSubmit={Confirm}>Create</button>*/}
            </div>
            <div>
                <button onClick={GetData}>Refresh data</button>
                {post.map((elm, i) => {
                    return (
                        <div key={"newPost_" + ++i}>
                            <h4>{elm.description}</h4>
                            <p>{elm.taskText}</p>
                        </div>)
                })}
            </div>
        </div>
    )
};

// export default connect(() => ({}))(CreateNewTask);