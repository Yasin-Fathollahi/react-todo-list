import { useState } from 'react';
import sunImage from './assets/images/icon-sun.svg';
import moonImage from './assets/images/icon-moon.svg';
import AddTodo from './components/AddTodo.jsx';
import Todo from './components/Todo.jsx';
import ControlTodoList from './components/ControlTodoList.jsx';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  return (
    <main>
      <div className="container centered">
        <div className="title-theme-box">
          <p className="list-title">todo</p>
          <button className="btn-theme">
            <img src={sunImage} alt="change theme button - sun" />
          </button>
        </div>

        <AddTodo onAddTodo={setTodoItems} />
        <section className="todo-list">
          <ul>
            {todoItems.map((todo, todoIndex) => (
              <Todo
                key={todoIndex}
                value={todo.value}
                done={todo.done}
                onSetTodoItems={setTodoItems}
                index={todoIndex}
              />
            ))}
          </ul>
          <ControlTodoList
            todosLeft={todoItems.length}
            onSetTodos={setTodoItems}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
