import React from "react";

const TodoInput = ({ setTodoText, todoText, setTodoList, todoList }) => {
  const onInputChange = e => {
    setTodoText(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault(); //this will prevent submit button's default function
    //which is to refresh on submit

    setTodoList([
      ...todoList,
      {
        text: todoText,
        completed: false,
        id: Math.random() * 10000
      }
    ]); // '...todoList' will keep if any existing value and add new todo after

    setTodoText(""); //to make input box empty after submit
  };

  return (
    <form onSubmit={onSubmitHandler} className="todo-input">
      <input
        onChange={onInputChange}
        type="text"
        value={todoText}
        placeholder="Enter a todo..."
        name="todo-textbox"
        className="form-control-sm"
      />
      <button type="Submit" className="btn btn-warning btn-sm m-2">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
