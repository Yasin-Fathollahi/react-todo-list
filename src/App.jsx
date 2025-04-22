import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx';
import Todo from './components/Todo.jsx';
import ControlTodoList from './components/ControlTodoList.jsx';
import Title from './components/Title.jsx';
import FilterButtons from './components/FilterButtons.jsx';

function App() {
  const [todoItems, setTodoItems] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });
  const [theme, setTheme] = useState(() => {
    return JSON.parse(localStorage.getItem('theme')) || 'light';
  });
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoItems));
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [todoItems, theme]);

  return (
    <>
      <Header theme={theme} />
      <main>
        <div className="container centered">
          <Title theme={theme} onSetTheme={setTheme} />

          <AddTodo onAddTodo={setTodoItems} activeTab={activeTab} />
          <section className="todo-list">
            <ul>
              {todoItems.map((todo, todoIndex) => {
                if (!todo.hidden) {
                  return (
                    <Todo
                      key={todoIndex}
                      value={todo.value}
                      done={todo.done}
                      onSetTodoItems={setTodoItems}
                      index={todoIndex}
                    />
                  );
                }
              })}
            </ul>
            <ControlTodoList
              todosLeft={todoItems.filter((todo) => todo.done !== true).length}
              onSetTodos={setTodoItems}
              activeTab={activeTab}
              onSetActiveTab={setActiveTab}
            />
          </section>
          <FilterButtons
            onSetTodos={setTodoItems}
            activeTab={activeTab}
            onSetActiveTab={setActiveTab}
          />
        </div>
      </main>
    </>
  );
}

export default App;
