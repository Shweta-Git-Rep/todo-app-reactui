import React from "react";
import Todo from "./todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div className="todo-list">
      <ul className="list-group list-unstyled">
        {todoList.map(todoItem => (
          <Todo
            text={todoItem.text}
            key={todoItem.text}
            todo={todoItem}
            setTodoList={setTodoList}
            todoList={todoList}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
