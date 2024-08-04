import React from "react";

const TodoItem = ({task, deleteTask, toggleCompleted}) => {
  function handleChange() {
    toggleCompleted(task.id);
  }
  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p>{task.text}</p>
      <button
        className="bg-red-400 p-1 rounded"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
