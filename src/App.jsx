import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import About from "./pages/About";
import ProtectedRoute from "./components/ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";

function Layout({ children }) {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      <main className="w-full px-4 md:px-10 lg:px-16 py-8">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Home */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Tasks */}
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Layout>
                  <Tasks />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* ✅ About Route Added */}
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <Layout>
                  <About />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
  path="/profile/:name"
  element={
    <ProtectedRoute>
      <Layout>
        <ProfileDetails />
      </Layout>
    </ProtectedRoute>
  }
/>

          <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Layout>
        <Profile />
      </Layout>
    </ProtectedRoute>
  }
/>

        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;