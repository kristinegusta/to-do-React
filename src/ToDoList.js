import React from 'react';
import ToDoItem from './ToDoItem';



const ToDoList = ({ todos, toggleToDo }) => {

    return (
        <ul>
            {todos.map((task) =>
                <ToDoItem
                    key={task.id}
                    id={task.id}
                    label={task.task}
                    toggleToDo={toggleToDo}
                    value={task.done}
                />
            )}
        </ul>
    )
}

export default ToDoList;