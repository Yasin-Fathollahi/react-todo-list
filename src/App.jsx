import sunImage from './assets/images/icon-sun.svg';
import moonImage from './assets/images/icon-moon.svg';
import checkImage from './assets/images/icon-check.svg';
import crossImage from './assets/images/icon-cross.svg';

function App() {
  return (
    <main>
      <div className="container centered">
        <div className="title-theme-box">
          <p className="list-title">todo</p>
          <button className="btn-theme">
            <img src={sunImage} alt="change theme button - sun" />
          </button>
        </div>

        <div className="todo todo-new">
          <button className="checkbox">
            <img src={checkImage} alt="check image" />
          </button>
          <input type="text" className="todo-text" placeholder="Enter a task" />
          <button className="btn-delete-todo">
            <img src={crossImage} alt="X icon inside todo delete button" />
          </button>
        </div>

        <section className="todo-list">
          <ul>
            <li className="todo todo-list-item">
              <button className="checkbox">
                <img src={checkImage} alt="check image" />
              </button>
              <input
                type="text"
                className="todo-text"
                value="helllo"
                readOnly
              />
              <button className="btn-delete-todo">
                <img src={crossImage} alt="X icon inside todo delete button" />
              </button>
            </li>
          </ul>
          <div className="control-list">
            <p>
              <span className="todos-left">5</span> todos left
            </p>
            <div className="btns-filter">
              <button className="active">all</button>
              <button>active</button>
              <button>completed</button>
            </div>
            <button className="btn-clear">clear completed</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
