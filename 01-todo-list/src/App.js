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
      <h1><FontAwesomeIcon icon={icon({name: 'list-check'})} /> My Todo List</h1>
      <h3>List 1</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" placeholder="Add a todo..."/>
      <button id="fa-icon-beat" onClick={handleAddTodo}><FontAwesomeIcon icon={icon({name: 'plus'})} /></button>
      <button onClick={handleClearComplete}>Clear Complete</button>
      <button onClick={handleClearAll}>Clear All</button>
      <div className="moti-text">{todos.filter(todo => !todo.isComplete).length} left Todo!</div>
    </>
  );
}

export default App;
