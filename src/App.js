import React, { useState, useRef } from "react";


const App = () => {
  return (
    <div>
      <Title />
      <Input />
      <hr />
      <ToDoList />
    </div>
  );
}
const Title = () => {
  const title = 'React';
  return <h1>Hello {title}</h1>
}
const Input = () => {
  const inputRef = useRef();
  const clickHandler = () => {
    const inputElement = inputRef.current;
    console.log(inputElement.value);
  }
  return (
    <form>
      <input ref={inputRef} type="text" placeholder="write a to do"></input>
      <br />
      <input type="submit" value="Add ToDo" onClick={clickHandler}></input>
    </form>
  )
}
const ToDoList = () => {
  const TODOLIST = [
    { task: 'Clean the house', done: false },
    { task: 'Do the dishes', done: false },
    { task: 'Walk the dog', done: false },
    { task: 'Call mom', done: false }
  ]
  const [todos, setTodos] = useState(TODOLIST);

  const [checked, setChecked] = useState(new Array(TODOLIST.length).fill(false));

  const handleChange = (position) => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item)

    setChecked(updatedCheckedState)
  };

  return (
    <ul>
      {todos.map((task, index) =>
        <li key={index}>
          <Checkbox
            label={task.task}
            value={checked[index]}
            onChange={() => handleChange(index)}
          />
        </li>
      )}
    </ul>
  )
}

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  )
}

export default App;