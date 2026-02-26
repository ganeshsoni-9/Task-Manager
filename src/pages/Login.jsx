import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPassword = "ganesh@123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      sessionStorage.setItem("isAuth", "true");
      setPassword("");
      navigate("/");
    } else {
      setError("Wrong Password ❌");
      setPassword("");
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      <div className="text-center">

        <h1 className="text-3xl font-bold text-white mb-3">
          Task Manager Project
        </h1>

        <p className="text-gray-300 mb-6">
          Please enter the password to access this project.
        </p>

        <form
          autoComplete="off"
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-2xl w-[350px] mx-auto space-y-5"
        >

          {/* 🔥 Fake hidden fields (Browser Autofill Trick) */}
          <input type="text" name="fakeuser" style={{ display: "none" }} />
          <input type="password" name="fakepass" style={{ display: "none" }} />

          <h2 className="text-xl font-semibold text-center text-gray-800">
            Login
          </h2>

          <input
  type="text"
  name="access-code"
  placeholder="Enter Password"
  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  value={password}
  onChange={(e) => {
    setPassword(e.target.value);
    setError("");
  }}
  autoComplete="off"
  style={{ WebkitTextSecurity: "disc" }} // 🔥 hides text like password
/>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}