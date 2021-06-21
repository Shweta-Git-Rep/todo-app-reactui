import React from "react";

const Todo = ({ text, todoList, setTodoList, todo }) => {
  const onDelete = () => {
    setTodoList(todoList.filter(todoItem => todoItem.id !== todo.id));
    //filtering out from list based on id
  };

  const onComplete = () => {
    setTodoList(
      todoList.map(todoItem => {
        if (todoItem.id === todo.id) {
          return { ...todoItem, completed: !todoItem.completed };
        }
        return todoItem;
      })
    );
    //updating completed to true/false
  };

  let style = "list-group-item bg-secondary py-0 clearfix";
  style += todo.completed === true ? " completed" : ""; //changing className on complete
  //to update styling based on new className

  let styleText = "todo-text";
  styleText += todo.completed === true ? " completedText" : ""; //changing className on complete
  //to update styling based on new className

  return (
    <div className="todo" style={{ width: "300px", paddingTop: "10px" }}>
      <li className={style}>
        <span className={styleText}>{text}</span>
        <span className="todo-buttons" style={{ float: "right" }}>
          <input
            type="checkbox"
            className="m-2"
            onChange={onComplete}
            checked={todo.completed}
          />
          <button className="btn btn-sm btn-danger m-2" onClick={onDelete}>
            x
          </button>
        </span>
      </li>
    </div>
  );
};

export default Todo;
