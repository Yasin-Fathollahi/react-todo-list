import { useState } from 'react';
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx';
import Todo from './components/Todo.jsx';
import ControlTodoList from './components/ControlTodoList.jsx';
import Title from './components/Title.jsx';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [theme, setTheme] = useState('light');
  return (
    <>
      <Header theme={theme} />
      <main>
        <div className="container centered">
          <Title theme={theme} onSetTheme={setTheme} />

          <AddTodo onAddTodo={setTodoItems} />
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
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
