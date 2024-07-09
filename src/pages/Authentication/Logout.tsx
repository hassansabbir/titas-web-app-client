import { Button } from "antd";
import Swal from "sweetalert2";
import { useUser } from "../../Context/useUser";

const Logout = () => {
  const { dispatch } = useUser();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Logged out successfully.",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <Button size="small" type="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
