/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { UserState, UserAction, TUser } from "../types/UserTypes";
import axios from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

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

  const fetchCurrentUser = async (): Promise<TUser> => {
    if (!userId) {
      throw new Error("No user ID available");
    }

    const response = await axios.get<ApiResponse<TUser>>(`/api/user/${userId}`);
    return response.data.data;
  };

  const { data, isLoading, error, refetch }: UseQueryResult<TUser, any> =
    useQuery({
      queryKey: ["currentUser"],
      queryFn: fetchCurrentUser,
    });

  return {
    state,
    dispatch,
    currentUser: data,
    loading: isLoading,
    error,
    refetch,
  } as {
    state: UserState;
    dispatch: React.Dispatch<UserAction>;
    currentUser: TUser | null;
    loading: boolean;
    error: any;
    refetch: () => void;
  };
};
