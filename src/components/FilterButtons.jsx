export default function FilterButtons({
  onSetTodos,
  activeTab,
  onSetActiveTab,
}) {
  function stateDeepCopy(prevState) {
    return [
      ...prevState.map((todo) => {
        return { ...todo };
      }),
    ];
  }

  function filterVisibleTodos(filter) {
    onSetActiveTab(filter);
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
    <div className="btns-filter-mobile">
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
  );
}
