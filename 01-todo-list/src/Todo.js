function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.isComplete} onChange={handleTodoClick} />
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;