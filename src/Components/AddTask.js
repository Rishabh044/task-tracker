import {useState} from "react";
import React from "react"

const AddTask = function ({onAdd}){
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = function (e){
        e.preventDefault()
        if (!text){
            alert ("Please add text!")
            return
        }
        onAdd({text, day, reminder});

        setText("")
        setReminder(false)
        setDay("")

    }
    return (<form className="add-form" onSubmit={onSubmit}>
        <div className= "form-control">
            <label htmlFor="">Task</label>
            <input type="text" placeholder="Add Text Here" value = {text} onChange = {(e)=>{
                setText(e.target.value)
            }}/>
        </div>
        <div className= "form-control">
            <label htmlFor="">Day and time</label>
            <input type="text" placeholder="Add Day and time Here" value={day} onChange={(e)=>{
                setDay(e.target.value)
            }}/>
        </div>
        <div className= "form-control form-control-check">
            <label htmlFor="">Reminder</label>
            <input type="checkbox" checked ={reminder}  value = {reminder.toString()} onChange={(e)=>{
                setReminder(e.currentTarget.checked)
            }}/>
        </div>

        <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>)
}

AddTask.defaultProps = {
    fontColor: "#ffffff"
}

export default AddTask