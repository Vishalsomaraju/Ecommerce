import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

let toastShown = false;

const ProtectedRoute = ({ children }) => {
  const { user, isLoaded } = useUser();
  const location = useLocation();

  if (!isLoaded) return null;

  if (!user) {
    if (!toastShown) {
      toast.error("Please login first", {
        position: "bottom-right",
        style: {
          backgroundColor: "#ffe5e5",
          color: "#b91c1c",
          fontWeight: "bold",
        },
      });
      toastShown = true;
    }
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  toastShown = false;
  return children;
};

export default ProtectedRoute;
