import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isAuth");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="w-full bg-black/50 backdrop-blur-md px-6 py-4 flex justify-between items-center sticky top-0 z-40">
      
      <h1 className="text-xl font-bold text-white">Task Manager</h1>

      <div className="flex gap-6 text-white items-center">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/tasks" className="hover:text-blue-400">Tasks</Link>

        {/* 🔥 Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}