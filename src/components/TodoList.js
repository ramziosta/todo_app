import DeleteIcon from "./DeleteIcon"
const Todo = ({ todo, index, removeTodo }) => {
  function handle() {
    removeTodo(index);
  }
  return (
    <div className="todo" onClick={handle}>
      <DeleteIcon /> {todo.title} </div>
  );
};

export default Todo;

