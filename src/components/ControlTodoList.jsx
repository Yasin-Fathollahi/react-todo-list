export default function ControlTodoList({ todosLeft, onSetTodos }) {
  return (
    <div className="control-list">
      <p>
        <span className="todos-left">{todosLeft}</span>{' '}
        {todosLeft > 1 || todosLeft === 0 ? 'Tasks' : 'Task'} left
      </p>
      <div className="btns-filter">
        <button className="active">all</button>
        <button>active</button>
        <button>completed</button>
      </div>
      <button className="btn-clear">clear completed</button>
    </div>
  );
}
