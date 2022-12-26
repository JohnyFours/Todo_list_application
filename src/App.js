import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Toast } from "bootstrap";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";
import Todo from "./components/Todo";

function App() {
    const [todo, setTodo] = useState([]);

    const [newTask, setNewTask] = useState("");
    const [updateData, setUpdateData] = useState("");

    const addTask = () => {
        if (newTask) {
            let num = todo.length + 1
            let newEntry = { id: num, title: newTask, status: false }
            setTodo([...todo, newEntry])
            setNewTask('')
        }
    }

    const deleteTask = (id) => {
        let newTask = todo.filter(task => task.id !== id)
        setTodo(newTask)

    };

    const markDone = (id) => {
        let newTask = todo.map(task => {
            if (task.id === id) {
                return ({ ...task, status: !task.status })
            }
            return task
        })

        setTodo(newTask)

    };

    const cancelUpdate = () => {
        setUpdateData('');

    };
    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id, title: e.target.value, status: updateData.status ? true : false
        }

        setUpdateData(newEntry)

    };

    const updateTask = () => {
        let filterRecords = [...todo].filter(task => task.id !== updateData.id);
        let updatedObject = [...filterRecords, updateData]

        setTodo(updatedObject)
        setUpdateData('')
    };


    return (<div className=" container App">
        <header className='header'>
            <h1>Todo List Project</h1>
        </header>

        {updateData && updateData ? (
            <UpdateTask
                updateData={updateData}
                changeTask={changeTask}
                updateTask={updateTask}
                cancelUpdate={cancelUpdate} />) : (
            <AddTask
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask} />
        )}
        <br />

        {todo && todo.length ? '' : "No Task..."}

        <Todo todo={todo}
            markDone={markDone}
            setUpdateData={setUpdateData}
            deleteTask={deleteTask} />
    </div>);
}

export default App;
