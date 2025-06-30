import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const LoginHandler = () => {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded) return;

    const loginToastShown = sessionStorage.getItem("loginToastShown");

    if (user && !loginToastShown) {
      toast.success(`Welcome back, ${user.firstName || "User"}!`, {
        position: "bottom-right",
        style: {
          backgroundColor: "#e6ffed",
          color: "#065f46",
          fontWeight: "bold",
        },
      });
      sessionStorage.setItem("loginToastShown", "true");
    }

    const logoutSuccess = sessionStorage.getItem("logoutSuccess");
    if (logoutSuccess === "true") {
      toast.info("Logged out successfully", {
        position: "bottom-right",
        style: {
          backgroundColor: "#f0f9ff",
          color: "#0369a1",
          fontWeight: "bold",
        },
      });
      sessionStorage.removeItem("logoutSuccess");
      sessionStorage.removeItem("loginToastShown");
    }
  }, [user, isLoaded]);

  return null;
};

export default LoginHandler;
