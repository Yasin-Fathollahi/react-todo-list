import { useState } from 'react';

export default function ControlTodoList({ todosLeft, onSetTodos }) {
  const [activeTab, setActiveTab] = useState('all');
  function stateDeepCopy(prevState) {
    return [
      ...prevState.map((todo) => {
        return { ...todo };
      }),
    ];
  }
  function clearCompleted() {
    onSetTodos((prevTodos) => {
      let updatedTodos = stateDeepCopy(prevTodos);
      updatedTodos = prevTodos.filter((todo) => !todo.done);
      return updatedTodos;
    });
  }

  function filterVisibleTodos(filter) {
    setActiveTab(filter);
    onSetTodos((prevTodos) => {
      let updatedTodos = stateDeepCopy(prevTodos);
      updatedTodos.forEach((todo) => {
        if (filter === 'all') {
          todo.hidden = false;
        } else if (filter === 'active') {
          todo.hidden = todo.done;
        } else if (filter === 'completed') {
          todo.hidden = !todo.done;
        }
      });
      return updatedTodos;
    });
  }

  return (
    <div className="control-list">
      <p>
        <span className="todos-left">{todosLeft === 0 ? 'No' : todosLeft}</span>{' '}
        {todosLeft > 1 || todosLeft === 0 ? 'Tasks' : 'Task'} left
      </p>
      <div className="btns-filter">
        <button
          onClick={filterVisibleTodos.bind(null, 'all')}
          className={activeTab === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={filterVisibleTodos.bind(null, 'active')}
          className={activeTab === 'active' ? 'active' : ''}
        >
          Ongoing
        </button>
        <button
          onClick={filterVisibleTodos.bind(null, 'completed')}
          className={activeTab === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
      </div>
      <button onClick={clearCompleted} className="btn-clear">
        clear completed
      </button>
    </div>
  );
}
