import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
const isAuth = sessionStorage.getItem("isAuth") === "true";
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}