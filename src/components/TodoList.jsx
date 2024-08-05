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
    <div>
      <div className="font-bold text-2xl text-center bg-slate-500 rounded mb-2 p-1">
        DUMB TODO
      </div>
      <div className="bg-slate-500 flex flex-col justify-center items-center gap-3 py-10  rounded border w-[500px] ">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        ))}

        <div className="flex justify-around">
          <input
            className="border"
            placeholder="Add a new Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-green-500 p-2 px-3 font-mono text-xl rounded
"
            onClick={() => addTask(text)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
