import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task, showAlert }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      showAlert("Bạn chưa nhập nhiệm vụ cần cập nhật");
    } else {
      document.title = "+ update";
      setTimeout(() => {
        document.title = "Todo List";
      }, 2000);
      editTodo(value, task.id);
      setValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task ?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
