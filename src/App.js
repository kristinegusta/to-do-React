import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import ToDoList from "./ToDoList";

const LOCAL_STORAGE_KEY = "todoApp.todos"


const App = () => {
  const TODOLIST = [
    { id: 1, task: 'Clean the house', done: false },
    { id: 2, task: 'Do the dishes', done: false },
    { id: 3, task: 'Walk the dog', done: false },
    { id: 4, task: 'Call mom', done: false }
  ]
  const [todos, setTodos] = useState(TODOLIST);
  const inputRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [todos])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const handleAddToDo = () => {
    //setTodos here
    const inputElement = inputRef.current;
    if (inputElement.value === "") return

    setTodos(prevToDos => {
      return [...prevToDos, { id: uuidv4(), task: inputElement.value, done: false }]
    })

    //inputElement.value = null;

  }

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.done = !todo.done
    setTodos(newTodos)
  }


  return (
    <div>
      <Title />
      {/* <Input 
        ref={inputRef}
        onClick={handleAddToDo}
      /> */}
      <div>
        <input ref={inputRef} type="text" placeholder="write a to do"></input>
        <br />
        <button onClick={handleAddToDo}>Add To Do</button>
      </div>
      <hr />
      <ToDoList
        todos={todos}
        toggleToDo={toggleTodo}
      />
    </div>
  );
}

const Title = () => {
  const title = 'React';
  return <h1>Hello {title}</h1>
}

/*
const Input = ({ inputRef, clickHandler }) => {
  return (
    <form>
      <input ref={inputRef} type="text" placeholder="write a to do"></input>
      <br />
      <input type="submit" value="Add ToDo" onClick={clickHandler}></input>
    </form>
  )
}
*/





export default App;