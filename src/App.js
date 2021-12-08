import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css"

const App = () => {
  
  const [todos, setTodos] = React.useState([
    {
      title: "Check List Item One",
      isCompleted: false
    },
    {
      title: "Check List Item Two",
      isCompleted: false
    },
    {
      title: "Check List Item Three",
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { title: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let currentTodos = [...todos];
    currentTodos.splice(index, 1);
    setTodos(currentTodos);
  };

  return (
    <div className="main">
     <h2 className="header">MIT Todo List w Material UI </h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, i) => (
        <TodoList index={i} key={i} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default App;

