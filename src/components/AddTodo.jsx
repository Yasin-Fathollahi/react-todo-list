import { useState } from 'react';
export default function AddTodo({ onAddTodo }) {
  const [todoValue, setTodoValue] = useState('');
  const arrow = String.fromCodePoint('08594');

  function handleChange(e) {
    setTodoValue(e.target.value);
  }

  function handleAddTodo() {
    if (todoValue.length > 0) {
      onAddTodo((prevTodos) => {
        return [{ value: todoValue, done: false, hidden: false }, ...prevTodos];
      });
      setTodoValue('');
    }
  }

  return (
    <div className="todo todo-new">
      <input
        type="text"
        className="todo-text"
        placeholder="Enter a task"
        value={todoValue}
        onChange={handleChange}
        onKeyDown={(e) => (e.key === 'Enter' ? handleAddTodo() : null)}
      />
      <button onClick={handleAddTodo}>{arrow}</button>
    </div>
  );
}
