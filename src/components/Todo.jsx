import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import "../css/ToDoCreate.css";
import { FaCheck } from "react-icons/fa6";


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);
    const removeTodo = () => {
        onRemoveTodo(id);
    };
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    };
    return (
        <div className='todo-main'>
            <div>
                {
                    editable ? <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' style={{ height: "15px" }} /> : content
                }</div>
            <div><CiCircleRemove className='todo-icons' onClick={removeTodo} />
                {
                    editable ? <FaCheck className='todo-icons' onClick={updateTodo} /> : <CiEdit className='todo-icons' onClick={() => setEditable(true)} />

                }
            </div>

        </div>
    )
}

export default Todo