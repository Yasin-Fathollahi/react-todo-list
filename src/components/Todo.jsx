import checkImage from '../assets/images/icon-check.svg';
import crossImage from '../assets/images/icon-cross.svg';

export default function Todo({ value, done = false, onSetTodoItems, index }) {
  function handleCompelete(index) {
    onSetTodoItems((prevTodoItems) => {
      const newTodoItems = [...prevTodoItems];
      newTodoItems[index].done = !newTodoItems[index].done;

      return newTodoItems;
    });
  }

  function deleteTodo(index) {
    onSetTodoItems((prevTodoItems) => {
      const newTodoItems = [...prevTodoItems];
      newTodoItems.splice(index, 1);

      return newTodoItems;
    });
  }

  return (
    <li>
      <div className={`todo todo-list-item ${done ? 'done' : ''}`}>
        <button
          className="checkbox"
          onClick={handleCompelete.bind(null, index)}
        >
          <img src={checkImage} alt="check image" />
        </button>
        <input type="text" className="todo-text" value={value} readOnly />
        <button
          onClick={deleteTodo.bind(null, index)}
          className="btn-delete-todo"
        >
          <img src={crossImage} alt="X icon inside todo delete button" />
        </button>
      </div>
    </li>
  );
}
