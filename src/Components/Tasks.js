
import React from "react"
import Task from "./Task.js"

const Tasks = function ({tasks, onDelete, onToggle}){

    return (
        <>
            <ul>
                {tasks.map((task)=> (
                    <Task key = {task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle}/>

                ))}
            </ul>
        </>
    );
}

export default Tasks;