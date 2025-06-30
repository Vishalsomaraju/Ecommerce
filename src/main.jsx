import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { DataProvider } from "./context/DataContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="#/Ecommerce"
    >
      <DataProvider>
        <CartProvider>
          <App />
          {/* Scroll To Top Button */}
          <ScrollToTop
            smooth
            color="black"
            component={<FaArrowUp size={20} />}
            style={{
              backgroundColor: "#00FFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
              marginBottom: "-20px",
            }}
          />
          {/* Toast Notification Container */}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </CartProvider>
      </DataProvider>
    </ClerkProvider>
  </StrictMode>
);
