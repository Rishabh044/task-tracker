import React from "react"
import { useState, useEffect } from "react";
import Header from "./Components/Header.js";
import Tasks from "./Components/Tasks.js"
import AddTask from "./Components/AddTask";
import task from "./Components/Task";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        const getTasks = async function (){
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer)
        }
        getTasks() //not felt the need to add .then()
    },[])

    //Fetch tasks
    const fetchTasks = async function (){
        const res = await fetch("http://localhost:5000/tasks")
        const data = res.json()

        return data;
    }

    //fetch tasks
    const fetchTask = async function (id){
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = res.json()

        return data;
    }

    const addTask = async function (task){
        // const id = Math.floor(Math.random()*10000) + 1
        // const newTask = {id, ...task}
        // setTasks([...tasks, newTask])
        const res = await fetch("http://localhost:5000/tasks", {
                method:"POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(task)
            },
        )
        const data = await res.json();
        setTasks([...tasks, data])
    }
    //for adding the task

    //for deleting the task
    const deleteTask = async function(id){
        await fetch(`http://localhost:5000/tasks/${id}`,
            {method:"DELETE"}
        )


        setTasks(tasks.filter((task)=>task.id !== id))
    }

    //for toggling the reminder
    const toggleReminder = async function (id){
        const taskToToggle = await fetchTask(id)
        const updTask = {...taskToToggle, reminder:taskToToggle.reminder}

        const res = await fetch (`http://localhost:5000/${id}`,
            {
                method:"PUT",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify(updTask)
            }

        )

        const data = await res.json()

       setTasks(tasks.map((task)=> task.id === id ? {...task, reminder : !data.reminder} :task ))
    }

  return (
    <div className="container">
        < Header title = "header" onAdd = {()=>setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/> : "No Tasks to show"};

    </div>
  );
}

export default App;
