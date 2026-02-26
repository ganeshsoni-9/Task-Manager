import { useTasks } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

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

  // 📅 Monthly Data
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const monthlyData = months.map((month, index) => {
  const created = tasks.filter(task => {
    if (!task.dueDate) return false;
    const date = new Date(task.dueDate);   // 👈 YEH CHANGE KARO
    return date.getMonth() === index;
  }).length;

  const completed = tasks.filter(task => {
    if (!task.dueDate) return false;
    const date = new Date(task.dueDate);   // 👈 YEH BHI CHANGE KARO
    return task.completed && date.getMonth() === index;
  }).length;

  return {
    month,
    created,
    completed
  };
});

  return (
    <div className="w-full flex flex-col items-center">

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