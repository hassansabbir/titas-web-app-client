import { useContext } from "react";

import { UserState, UserAction } from "../types/UserTypes";
import { UserContext } from "./UserContext";

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context as { state: UserState; dispatch: React.Dispatch<UserAction> };
};
