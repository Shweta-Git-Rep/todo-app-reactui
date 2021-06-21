import "./App.css";
import React, { useState, useEffect } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App() {
  const [todoText, setTodoText] = useState(""); //holds new todo input
  const [todoList, setTodoList] = useState([]); //holds a list of todos

  return (
    <div className="App">
      <h1 className="todo-header">My ToDo List</h1>
      <TodoInput
        setTodoText={setTodoText}
        todoText={todoText}
        setTodoList={setTodoList}
        todoList={todoList}
      />
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
