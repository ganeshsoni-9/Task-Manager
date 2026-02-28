import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isAuth");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="w-full bg-black/50 backdrop-blur-md px-6 py-4 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
  <img
    src="https://imgs.search.brave.com/zInwR21FTR-TP-FT48RSitxafVAJRBPNFalplYBpPfc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvdGFzay1t/YW5hZ2VtZW50LWls/bHVzdHJhdGlvbi1z/dmctZG93bmxvYWQt/cG5nLTQ0MjM1Mjku/cG5n"
    alt="Task Manager Logo"
    className="w-12 h-12 rounded-full object-cover border-2 border-white"
  />
  <h1 className="text-2xl font-bold text-white">
    Task Manager
  </h1>
</div>
      <div className="flex gap-6 text-white items-center">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/tasks" className="hover:text-blue-400">Tasks</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>

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