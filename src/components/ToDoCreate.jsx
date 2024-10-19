import React, { useState } from 'react'
import "../css/ToDoCreate.css"
function ToDoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState("");
    const clearInput = () => {
        setNewTodo("");
    }
    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        onCreateTodo(request);
        clearInput();
    }
    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" placeholder='Todo giriniz' className='todo-input' />
            <button onClick={createTodo}
                className='todo-create-button'>ToDo Oluştur</button>
        </div>
    )
}

export default ToDoCreate