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
