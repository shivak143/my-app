import { useState } from "react";
import { Child } from "./child";
export function Parent() {
  const [todos, setTodos] = useState(["Task1", "Task2"]);

  const addNew = (task) => {
    setTodos([...todos, task]);
  };
  return (
    <ul>
      <Child add={addNew}></Child>
      {todos.map((t) => (
        <li>{t}</li>
      ))}
    </ul>
  );
}
