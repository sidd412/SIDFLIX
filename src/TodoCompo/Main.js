import React, { useState } from "react";
const tasks = JSON.parse(localStorage.getItem("todos")) || [];

export default function Main() {
  const [task, setTask] = useState("");

  function addTask() {
    tasks.push(task);
    localStorage.setItem("todos", JSON.stringify(tasks));
    alert("task is stored locally in todos array");
  }

  return (
    <div>
      <h1>To Do tasks Chart APP</h1>
      <h3>
        <label htmlFor="task">Mention new Task : </label>
      </h3>
      <input
        type="text"
        id="task"
        value={task}
        required
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" id="btn" onClick={addTask}>
        Add TASK
      </button>
    </div>
  );
}
