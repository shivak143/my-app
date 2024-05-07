import { useState } from "react";

export function Child(props) {
  const [newTask, setNewTask] = useState("");
  return (
    <>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add Task..."
      />
      <button onClick={() => props.add(newTask)}>Add Task</button>
    </>
  );
}
