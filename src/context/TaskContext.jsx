import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { loadTasks, saveTasks } from "../utils/localStorage";

// ✅ Context create
const TaskContext = createContext();

// ✅ Reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter(task => task.id !== action.payload);

    case "TOGGLE":
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "UPDATE":
      return state.map(task =>
        task.id === action.payload.id ? action.payload : task
      );

    default:
      return state;
  }
};

// ✅ Provider
export const TaskProvider = ({ children }) => {

  const [tasks, dispatch] = useReducer(taskReducer, [], loadTasks);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch, darkMode, setDarkMode }}>
      {children}
    </TaskContext.Provider>
  );
};

// ✅ Custom Hook
export const useTasks = () => useContext(TaskContext);