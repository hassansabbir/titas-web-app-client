import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useUser } from "../Context/useUser";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { state, dispatch } = useUser();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
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
    return <div>Loading...</div>;
  }

  if (state.user) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
