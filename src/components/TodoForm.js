import React, { useState } from "react";

const TodoForm = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      props.showAlert("Bạn chưa nhập nhiệm vụ");
    } else {
      props.addTodo(value);
      setValue("");
      document.title = "+1 task";
      setTimeout(() => {
        document.title = "Todo List";
      }, 2000);
    }
  };

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="what is the task today ? "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
