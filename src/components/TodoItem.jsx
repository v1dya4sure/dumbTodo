import React from "react";

const TodoItem = ({task, deleteTask, toggleCompleted}) => {
  function handleChange() {
    toggleCompleted(task.id);
  }
  return (
    <div className="flex gap-2 border w-2/3 p-2 justify-between">
      <div>
        <p className="font-mono font-semibold text-xl text-white">
          {task.text}
        </p>
      </div>

      <div className="">
        <input
          className="mr-4"
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
        />

        <button
          className="bg-red-400 p-1 rounded"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
