import React, { useState } from "react";
import Editable from "./components/Editable";

export const Test = () => {
    // State for the input
    const [task, setTask] = useState("");

    /*
      Enclose the input element as the children to the Editable component to make it as inline editable.
    */

    const HandleChange = (e) => {
        console.log(task)
        setTask(e.target.value)

    }

    return (

            <input
                type="text"
                name="task"
                placeholder="Write a task name"
                value={task}
                onChange={e => HandleChange(e)}
            />
            );
};
