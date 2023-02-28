import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addTask = (newTask) => {
    setTasks((tasks) => [...tasks, { name: newTask, done: false }]);
    setCount(count + 1);
    setValue("");
  };

  const completeTask = (taskId) => {
    const newTasks = tasks.map((task, i) => {
      if (i === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div>
        <input value={value} onChange={handleChange}></input>
        <button onClick={() => addTask(value)}>Add</button>
      </div>
      <h2>
        {tasks.filter((task) => !task.done).length} completed of {count} tasks
      </h2>
      <div>
        <ul>
          {tasks.map((task, i) => {
            return (
              <li key={i} onClick={() => completeTask(i)} className={task.done ? "is-done" : ""}>
                {task.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
