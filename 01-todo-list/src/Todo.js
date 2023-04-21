function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.isComplete} onChange={handleTodoClick} />
        <span className={todo.isComplete ? "strike" : ""}>{todo.name}</span>
      </label>
    </div>
  );
}

export default Todo;