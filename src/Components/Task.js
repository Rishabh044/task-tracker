import React from "react"
import {FaTimes} from "react-icons/fa";

const Task = function ({task, onDelete, onToggle}){
    return (<div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick = {()=>onToggle(task.id)}>
        <h3>
            {task.text}
            <FaTimes style = {{color: "#ef6161", cursor:"pointer", alignItems:"center"}} onClick={()=>onDelete(task.id)}/>
        </h3>
        <p>{task.day}</p>
    </div>)
}

export default Task