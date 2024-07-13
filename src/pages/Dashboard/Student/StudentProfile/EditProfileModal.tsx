import { useState } from "react";
import { Input, InputNumber, Modal, Select } from "antd";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
  FieldError,
} from "react-hook-form";
import { useUser } from "../../../../Context/useUser";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

interface EditProfileData {
  studentId: string;
  fullName: string;
  class: string;
  rollNumber: string;
  phoneNumber: string;
  age: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  address: string;
  guardianDetails: {
    guardianName: string;
    guardianContact: string;
    guardianRelation: string;
  };
  role: "student";
  password: string | undefined;
  isDeleted: boolean;
}

const EditProfileModal = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { state, currentUser, loading, error, refetch } = useUser();
  const studentId = state.user?.studentId;
  const password = state.user?.password;
  const { mutate } = useMutation<unknown, unknown, EditProfileData>({
    mutationFn: async (data: EditProfileData) => {
      const { data: response } = await axios.patch(
        `/api/user/${studentId}`,
        data
      );
      return response;
    },
    onSuccess: () => {
      Swal.fire({
        title: "Success",
        text: "Profile updated successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      setIsModalOpen(false);
      refetch();
    },
    onError: (error) => {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Failed to update profile.",
        icon: "error",
        confirmButtonText: "Done",
      });
    },
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const finalData: EditProfileData = {
      studentId: studentId!,
      fullName: data.fullName,
      class: data.class,
      rollNumber: data.rollNumber.toString(),
      phoneNumber: data.phoneNumber,
      age: data.age,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
      email: data.email,
      address: data.address,
      guardianDetails: {
        guardianName: data.guardianName,
        guardianContact: data.guardianNumber,
        guardianRelation: data.guardianRelation,
      },
      role: "student",
      password: password,
      isDeleted: false,
    };

    console.log(finalData);
    mutate(finalData);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!currentUser) return <div>No user data available</div>;

  return (
    <>
      <p onClick={showModal}>Edit Profile</p>
      <Modal
        width={"100%"}
        title="Edit Your Profile"
        visible={isModalOpen}
        onOk={handleSubmit(onSubmit)}
        onCancel={handleCancel}
      >
        <form>
          <div className="flex gap-2">
            <div className="flex w-1/2 my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">Full Name:</label>
              <Controller
                name="fullName"
                control={control}
                defaultValue={currentUser.fullName}
                rules={{ required: "Full Name is required!" }}
                render={({ field }) => (
                  <>
                    <Input placeholder="Your Name" {...field} />
                    {errors.fullName && (
                      <span className="text-red-500">
                        {(errors.fullName as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex w-1/2 my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">Student Id:</label>
              <Controller
                name="studentId"
                defaultValue={currentUser.studentId}
                control={control}
                rules={{ required: "Student Id is required!" }}
                render={({ field }) => (
                  <>
                    <Input readOnly {...field} />
                    {errors.studentId && (
                      <span className="text-red-500">
                        {(errors.studentId as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <div className="flex w-1/3 my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">Class:</label>
              <Controller
                name="class"
                control={control}
                defaultValue={currentUser.class}
                rules={{ required: "Class is required!" }}
                render={({ field }) => (
                  <>
                    <Select {...field} className="w-full">
                      <Select.Option value="01">Class 1</Select.Option>
                      <Select.Option value="02">Class 2</Select.Option>
                      <Select.Option value="03">Class 3</Select.Option>
                      <Select.Option value="04">Class 4</Select.Option>
                      <Select.Option value="05">Class 5</Select.Option>
                      <Select.Option value="06">Class 6</Select.Option>
                      <Select.Option value="07">Class 7</Select.Option>
                      <Select.Option value="08">Class 8</Select.Option>
                      <Select.Option value="09">Class 9</Select.Option>
                      <Select.Option value="10">Class 10</Select.Option>
                    </Select>
                    {errors.class && (
                      <span className="text-red-500">
                        {(errors.class as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex w-1/3 my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">Roll Number:</label>
              <Controller
                name="rollNumber"
                control={control}
                defaultValue={currentUser.rollNumber}
                rules={{ required: "Roll Number is required!" }}
                render={({ field }) => (
                  <>
                    <InputNumber
                      {...field}
                      min={1}
                      max={200}
                      className="w-full"
                      stringMode
                      placeholder="Roll Number"
                    />
                    {errors.rollNumber && (
                      <span className="text-red-500">
                        {(errors.rollNumber as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex w-1/3 my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">
                Phone Number:
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue={currentUser.phoneNumber}
                rules={{ required: "Phone Number is required!" }}
                render={({ field }) => (
                  <>
                    <Input placeholder="Phone Number" {...field} />
                    {errors.phoneNumber && (
                      <span className="text-red-500">
                        {(errors.phoneNumber as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <div className="flex w-1/3 my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">Age:</label>
              <Controller
                name="age"
                control={control}
                defaultValue={currentUser.age}
                rules={{ required: "Age is required!" }}
                render={({ field }) => (
                  <>
                    <Input placeholder="Age" {...field} />
                    {errors.age && (
                      <span className="text-red-500">
                        {(errors.age as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex w-1/3 my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">Gender:</label>
              <Controller
                name="gender"
                control={control}
                defaultValue={currentUser.gender}
                rules={{ required: "Gender is required!" }}
                render={({ field }) => (
                  <>
                    <Select {...field} className="w-full">
                      <Select.Option value="male">Male</Select.Option>
                      <Select.Option value="female">Female</Select.Option>
                    </Select>
                    {errors.gender && (
                      <span className="text-red-500">
                        {(errors.gender as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex w-1/3 my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">
                Date of Birth
              </label>
              <Controller
                name="dateOfBirth"
                control={control}
                defaultValue={currentUser.dateOfBirth}
                rules={{ required: "Date of Birth is required!" }}
                render={({ field }) => (
                  <>
                    <Input placeholder="Date of Birth" {...field} />
                    {errors.dateOfBirth && (
                      <span className="text-red-500">
                        {(errors.dateOfBirth as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className="flex gap-1 w-full">
            <div className="flex w-1/2 my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">Email:</label>
              <Controller
                name="email"
                control={control}
                defaultValue={currentUser.email}
                rules={{ required: "Email is required!" }}
                render={({ field }) => (
                  <>
                    <Input placeholder="Email" {...field} />
                    {errors.email && (
                      <span className="text-red-500">
                        {(errors.email as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex w-1/2 my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">Address:</label>
              <Controller
                name="address"
                control={control}
                defaultValue={currentUser.address}
                rules={{ required: "Address is required!" }}
                render={({ field }) => (
                  <>
                    <Input placeholder="Address" {...field} />
                    {errors.address && (
                      <span className="text-red-500">
                        {(errors.address as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-2xl font-semibold text-center">
              Guardian Information
            </h1>

            <div className="flex my-2 flex-col gap-1">
              <label className="ms-1 font-semibold text-lg">
                Guardian Name:
              </label>
              <Controller
                name="guardianName"
                control={control}
                defaultValue={currentUser.guardianDetails?.guardianName}
                rules={{ required: "Guardian Name is required!" }}
                render={({ field }) => (
                  <>
                    <Input placeholder="Guardian Name" {...field} />
                    {errors.guardianName && (
                      <span className="text-red-500">
                        {(errors.guardianName as FieldError).message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>

            <div className="flex gap-2">
              <div className="flex w-1/2 my-2 flex-col gap-1">
                <label className="ms-1 font-semibold text-lg">
                  Contact Number:
                </label>
                <Controller
                  name="guardianNumber"
                  control={control}
                  defaultValue={currentUser.guardianDetails?.guardianContact}
                  rules={{ required: "Guardian Number is required!" }}
                  render={({ field }) => (
                    <>
                      <Input {...field} />
                      {errors.guardianNumber && (
                        <span className="text-red-500">
                          {(errors.guardianNumber as FieldError).message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="flex w-1/2 my-2 flex-col gap-1">
                <label className="ms-1 font-semibold text-lg">
                  Guardian Relation:
                </label>
                <Controller
                  name="guardianRelation"
                  control={control}
                  defaultValue={currentUser.guardianDetails?.guardianRelation}
                  rules={{ required: "Guardian Relation is required!" }}
                  render={({ field }) => (
                    <>
                      <Input placeholder="e.g.: Father, Mother" {...field} />
                      {errors.guardianRelation && (
                        <span className="text-red-500">
                          {(errors.guardianRelation as FieldError).message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditProfileModal;
