import React, {useState} from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete my homework",
      completed: false,
    },
    {
      id: 2,
      text: "Going to Collge",
      completed: true,
    },
    {
      id: 3,
      text: "Solve 1 DSA question",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          return {...task, completed: !task.completed};
        } else {
          return task;
        }
      })
    );
  }
  return (
    <div className="bg-blue-400 text-center w-1/2 flex flex-col justify-center items-center ">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
      <input
        className="border"
        placeholder="Add a new Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <button
          className="bg-green-500 p-2 rounded
"
          onClick={() => addTask(text)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoList;
