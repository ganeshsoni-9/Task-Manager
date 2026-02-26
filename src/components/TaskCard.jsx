import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskCard({ task }) {
  const { dispatch } = useTasks();
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleUpdate = () => {
    if (!newTitle.trim()) return;

    dispatch({
      type: "UPDATE",
      payload: { ...task, title: newTitle },
    });

    setEditing(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-xl flex justify-between items-center"
      >
        {/* LEFT SIDE */}
        <div className="flex-1">
          {editing ? (
            <input
              className="border p-2 rounded w-full dark:bg-gray-700"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          ) : (
            <>
              <h3
                className={`font-semibold text-lg ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </h3>
              <p className="text-sm text-gray-500">
                Priority: {task.priority}
              </p>
              <p className="text-sm text-gray-500">
                Due: {task.dueDate || "No date"}
              </p>
            </>
          )}
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex gap-2 ml-4">

          {editing ? (
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
            >
              Save
            </button>
          ) : (
            <>
              <button
                onClick={() => setEditing(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "TOGGLE", payload: task.id })
                }
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
              >
                ✓
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "DELETE", payload: task.id })
                }
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              >
                ✕
              </button>
            </>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}