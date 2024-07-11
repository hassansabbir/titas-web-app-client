import { useUser } from "../Context/useUser";

export const useDashboardUrl = () => {
  const { state } = useUser();

  const userRole = state.user?.role;

  if (userRole === "admin") {
    return "/dashboard/manage-users";
  }
  return "/dashboard/student-profile";
};
