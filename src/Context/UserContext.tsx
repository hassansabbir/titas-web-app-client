// src/context/UserContext.tsx

import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { UserState, UserAction } from "../types/UserTypes";

const UserContext = createContext<
  | {
      state: UserState;
      dispatch: React.Dispatch<UserAction>;
    }
  | undefined
>(undefined);

const initialState: UserState = {
  user: null,
};

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
