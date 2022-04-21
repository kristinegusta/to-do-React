import React from 'react';

const ToDoItem = ({ id, label, value, toggleToDo }) => {
    const handleToDoClick = () => {
        toggleToDo(id)
    }
    return (
        <li key={id}>
            <label>
                <input type="checkbox" checked={value} onChange={handleToDoClick} />
                {label}
            </label>
        </li>
    )
}

export default ToDoItem;