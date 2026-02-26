import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Dashboard from "../components/Dashboard";
import KanbanBoard from "../components/KanbanBoard";

export default function Tasks() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Dashboard />
      <TaskForm />
      <TaskList />
      <KanbanBoard />
    </div>
  );
}