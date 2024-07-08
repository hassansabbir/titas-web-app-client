export type TGuardian = {
  guardianName: string;
  guardianContact: string;
  guardianRelation: string;
};
export type TUser = {
  studentId: string;
  image: string;
  email: string;
  address: string;
  guardianDetails: TGuardian;
  phoneNumber: string;
  fullName: string;
  class: string;
  rollNumber: string;
  password: string;
  confirmPassword?: string;
  role: "student";
  isDeleted: boolean;
};

export interface User {
  student_id: string;
  fullName: string;
  password: string;
}

export interface UserState {
  user: User | null;
}

export type UserAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };
