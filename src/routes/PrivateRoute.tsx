// Components/PrivateRoute.tsx
import React, { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { state, dispatch } = useUser();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      // Simulate an async operation like checking auth status from an API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch({ type: "SET_LOADING", payload: false });
    };

    if (state.user === null) {
      checkAuth();
    }
  }, [state.user, dispatch]);

  useEffect(() => {
    if (state.user === null && !state.loading) {
      Swal.fire({
        title: "Please Login",
        text: "You need to login to access this page.",
        icon: "warning",
        confirmButtonText: "OK",
        showCancelButton: false,
      });
    }
  }, [state.user, state.loading]);

  if (state.loading) {
    return <div>Loading...</div>; // Replace this with your actual loading component
  }

  if (state.user) {
    return <>{children}</>;
  }

  // If user is not logged in, navigate to login page
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
