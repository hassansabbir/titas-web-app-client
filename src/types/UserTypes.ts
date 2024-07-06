export type TUser = {
  studentId: string;
  fullName: string;
  class: string;
  rollNumber: string;
  password: string;
  confirmPassword?: string;
  role: "student";
  isDeleted: boolean;
};
