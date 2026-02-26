import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const { tasks = [] } = useTasks(); // safety default
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((task) =>
      filter === "All"
        ? true
        : filter === "Completed"
        ? task.completed
        : !task.completed
    );

  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border dark:border-gray-600 p-2 rounded w-full bg-white dark:bg-gray-800"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-800"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No tasks found
        </p>
      ) : (
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}