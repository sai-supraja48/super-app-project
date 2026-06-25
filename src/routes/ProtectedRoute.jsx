import { Navigate } from "react-router-dom";
import useStore from "../store/useStore";

function ProtectedRoute({ children }) {
  const user = useStore((state) => state.user);
  const categories = useStore((state) => state.categories);

  if (!user.name) {
    return <Navigate to="/" replace />;
  }

  if (categories.length < 3) {
    return <Navigate to="/categories" replace />;
  }

  return children;
}

export default ProtectedRoute;