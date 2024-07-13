export type TGuardian = {
  guardianName?: string | undefined;
  guardianContact?: string | undefined;
  guardianRelation?: string | undefined;
};
export type TUser = {
  studentId: string;
  image?: string | undefined;
  email?: string | undefined;
  address?: string | undefined;
  guardianDetails?: TGuardian | undefined;
  phoneNumber?: string | undefined;
  age?: string | undefined;
  gender?: string | undefined;
  dateOfBirth?: string | undefined;
  fullName: string;
  class: string;
  rollNumber: string;
  password: string;
  confirmPassword?: string;
  role: "superAdmin" | "admin" | "teacher" | "student";
  isDeleted: boolean;
};

export interface User {
  studentId: string;
  fullName: string;
  password: string;
  role: "superAdmin" | "admin" | "teacher" | "student";
}

export interface UserState {
  user: User | null;
  loading: boolean;
}

export type UserAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; payload: boolean };
