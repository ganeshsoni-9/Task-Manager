import { useTasks } from "../context/TaskContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
} from "recharts";

export default function Dashboard() {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return (
      <div className="text-center mt-6 text-gray-500">
        No task data available
      </div>
    );
  }

  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;
  const percent = Math.round((completed / tasks.length) * 100);

  const pieData = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weeklyData = days.map((day, index) => {
    const count = tasks.filter((task) => {
      const taskDate = new Date(task.createdAt);
      return taskDate.getDay() === index;
    }).length;

    return { day, tasks: count };
  });

  const completionTrend = days.map((day, index) => {
    const count = tasks.filter((task) => {
      const taskDate = new Date(task.createdAt);
      return task.completed && taskDate.getDay() === index;
    }).length;

    return { day, completed: count };
  });

  // 🔥 Productivity Score (simple logic)
  const productivityScore = percent;

  // 🔥 Streak Logic (consecutive days with at least 1 completed task)
  let streak = 0;
  for (let i = 0; i < 7; i++) {
    const today = new Date();
    today.setDate(today.getDate() - i);

    const hasCompleted = tasks.some((task) => {
      const taskDate = new Date(task.createdAt);
      return (
        task.completed &&
        taskDate.toDateString() === today.toDateString()
      );
    });

    if (hasCompleted) {
      streak++;
    } else {
      break;
    }
  }

  return (
    <div className="space-y-12 mt-8">

      {/* 🔥 Productivity Score & Streak */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-blue-100 dark:bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="font-bold text-lg mb-2">Productivity Score</h2>
          <p className="text-3xl font-bold text-blue-600">
            {productivityScore} / 100
          </p>
        </div>

        <div className="bg-orange-100 dark:bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="font-bold text-lg mb-2">Current Streak</h2>
          <p className="text-3xl font-bold text-orange-500">
            🔥 {streak} Days
          </p>
        </div>

      </div>

      {/* Progress Bar */}
      <div>
        <h2 className="font-bold mb-2">Completion Progress</h2>
        <div className="w-full bg-gray-200 rounded-full h-6">
          <div
            className="bg-green-500 h-6 rounded-full text-white text-sm flex items-center justify-center transition-all duration-500"
            style={{ width: `${percent}%` }}
          >
            {percent}%
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="w-full h-80">
        <h2 className="font-bold mb-4 text-center">Task Distribution</h2>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={pieData} outerRadius={100} dataKey="value" label>
              <Cell fill="#22c55e" />
              <Cell fill="#f59e0b" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Weekly Bar Chart */}
      <div className="w-full h-80">
        <h2 className="font-bold mb-4 text-center">Weekly Created Tasks</h2>
        <ResponsiveContainer>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tasks" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Completion Line Chart */}
      <div className="w-full h-80">
        <h2 className="font-bold mb-4 text-center">Weekly Completion Trend</h2>
        <ResponsiveContainer>
          <LineChart data={completionTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#8b5cf6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}