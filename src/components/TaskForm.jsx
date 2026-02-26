import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskForm() {
  const { dispatch } = useTasks();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    dispatch({
      type: "ADD",
      payload: {
  id: Date.now(),
  title,
  priority,
  dueDate,
  completed: false,
  createdAt: new Date().toISOString(),
}
    });

    setTitle("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      <input
        type="text"
        placeholder="Task title"
        className="w-full border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="w-full border p-2 rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <input
        type="date"
        className="w-full border p-2 rounded"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Add Task
      </button>
    </form>
  );
}