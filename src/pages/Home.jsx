import { useTasks } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

export default function Home() {

  const { tasks } = useTasks();

  // 🔔 Alarm States
  const [showPopup, setShowPopup] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);

  // 📅 Monthly Data
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const monthlyData = months.map((month, index) => {

    const created = tasks.filter(task => {
      if (!task.dueDate) return false;
      const date = new Date(task.dueDate);
      return date.getMonth() === index;
    }).length;

    const completed = tasks.filter(task => {
      if (!task.dueDate) return false;
      const date = new Date(task.dueDate);
      return task.completed && date.getMonth() === index;
    }).length;

    return { month, created, completed };
  });

  // 🔥 Alarm Logic
  useEffect(() => {

    const savedDay = Number(localStorage.getItem("currentDay")) || 1;
    const lastCompletedDate = localStorage.getItem("lastCompletedDate");
    const today = new Date().toDateString();

    // Agar kal complete hua tha aur aaj new day hai
    if (lastCompletedDate && lastCompletedDate !== today) {
      const nextDay = savedDay + 1;

      setCurrentDay(nextDay);
      setShowPopup(true);

      localStorage.setItem("currentDay", nextDay);
      localStorage.setItem("lastCompletedDate", today);
    } else {
      setCurrentDay(savedDay);
    }

  }, []);

  // ✅ Complete Day Function
  const completeDayTasks = () => {

    const allCompleted = tasks.length > 0 && tasks.every(task => task.completed);

    if (!allCompleted) {
      alert("Complete all tasks first ❌");
      return;
    }

    const today = new Date().toDateString();
    localStorage.setItem("lastCompletedDate", today);

    alert("Day Completed ✅");
  };

  return (
    <div className="w-full flex flex-col items-center">

      {/* 🔔 Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-8 rounded-xl text-center space-y-4">
            <h2 className="text-2xl font-bold text-blue-600">
              🎉 Day {currentDay} Started!
            </h2>
            <p>New tasks are ready to complete 🚀</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 📊 Monthly Analytics */}
      <div className="w-full max-w-4xl h-96 mb-10">
        <h2 className="font-bold mb-4 text-center text-xl">
          Monthly Analytics
        </h2>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="created" fill="#3b82f6" />
            <Bar dataKey="completed" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Complete Day Button */}
      <button
        onClick={completeDayTasks}
        className="bg-green-600 px-6 py-2 rounded mb-8"
      >
        Complete Today Tasks
      </button>

      {/* Task Form */}
      <div className="w-full max-w-2xl mb-8">
        <TaskForm />
      </div>

      {/* Task List */}
      <div className="w-full max-w-2xl">
        <TaskList />
      </div>

    </div>
  );
}