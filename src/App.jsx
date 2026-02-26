import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>

        <Routes>

          {/* ✅ Login Route */}
          <Route path="/login" element={<Login />} />

          {/* ✅ Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                  <Navbar />
                  <main className="w-full px-4 md:px-10 lg:px-16 py-8">
                    <Home />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                  <Navbar />
                  <main className="w-full px-4 md:px-10 lg:px-16 py-8">
                    <Tasks />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;