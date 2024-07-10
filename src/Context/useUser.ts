/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { UserState, UserAction, TUser } from "../types/UserTypes";
import axios from "axios";

type ApiResponse<T> = {
  data: T;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  const { state, dispatch } = context;
  const userId = state.user?.studentId;

  const [currentUser, setCurrentUser] = useState<TUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!userId) {
      console.log("No user ID available");
      return;
    }

    const fetchCurrentUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<ApiResponse<TUser>>(
          `/api/user/${userId}`
        );
        setCurrentUser(response.data.data);
        // console.log("User fetched successfully:", response.data.data);
      } catch (err) {
        setError(err);
        // console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [userId]);

  return {
    state,
    dispatch,
    currentUser,
    loading,
    error,
  } as {
    state: UserState;
    dispatch: React.Dispatch<UserAction>;
    currentUser: TUser | null;
    loading: boolean;
    error: any;
  };
};
