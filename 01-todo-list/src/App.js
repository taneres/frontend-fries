import { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.isComplete = !todo.isComplete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, isComplete: false }]
    })
    todoNameRef.current.value = null; // clear out input after adding
  }

  function handleClearComplete() {
    const newTodos = todos.filter(todo => !todo.isComplete); // get all uncompleted todos
    setTodos(newTodos);
  }

  function handleClearAll() {
    setTodos([]); // clear all todos
  }

  return (
    <>
      <header>
        <h1><FontAwesomeIcon icon={icon({name: 'list-check'})} /> My Todo List</h1>
      </header>
      <div>
        <h3>List 1</h3>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <div className="input-m-box">
          <input className="input-m" ref={todoNameRef} type="text" placeholder="Add a todo..."/>
          <button className="input-m" onClick={handleAddTodo} title="Add an item"><FontAwesomeIcon icon={icon({name: 'plus'})} /></button>
          <button className="input-m input-m-broom" onClick={handleClearComplete} title="Clear all completed items"><FontAwesomeIcon icon={icon({name: 'broom'})} /></button>
          <button className="input-m input-m-trash" onClick={handleClearAll} title="Clear all items"><FontAwesomeIcon icon={icon({name: 'trash'})} /></button>
        </div>
        <div className="moti-text">
          {todos.filter(todo => !todo.isComplete).length} left Todo!
        </div>
      </div>
    </>
  );
}

export default App;
