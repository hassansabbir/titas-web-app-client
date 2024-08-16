import React, { useRef } from "react";
import {
  Progress,
  ProgressProps,
  Table,
  TableColumnsType,
  Tooltip,
} from "antd";
import { useUser } from "../../../../Context/useUser";
import Swal from "sweetalert2";
import axios from "axios";

const StudentProfile = () => {
  const { currentUser, loading, error, refetch } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!currentUser) return <div>No user data available</div>;

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  interface DataType {
    key: React.Key;
    field: string;
    value: string | undefined;
  }

  const conicColors: ProgressProps["strokeColor"] = {
    "0%": "#FF0303",
    "50%": "#FFE403",
    "100%": "#00B419",
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "field",
      width: "25%",
    },
    {
      title: "",
      dataIndex: "value",
      width: "75%",
      render: (text: string) => <span className="font-semibold">{text}</span>,
    },
  ];

  const studentData: DataType[] = [
    {
      key: "1",
      field: "Full Name",
      value: currentUser.fullName,
    },
    {
      key: "2",
      field: "Student ID",
      value: currentUser.studentId,
    },
    {
      key: "3",
      field: "Email",
      value: currentUser.email,
    },
    {
      key: "4",
      field: "Address",
      value: currentUser.address,
    },
    {
      key: "5",
      field: "Phone Number",
      value: currentUser.phoneNumber,
    },
    {
      key: "6",
      field: "Class",
      value: currentUser.class,
    },
    {
      key: "7",
      field: "Roll Number",
      value: currentUser.rollNumber,
    },
    {
      key: "8",
      field: "Age",
      value: currentUser.age,
    },
    {
      key: "9",
      field: "Birth Date",
      value: currentUser.dateOfBirth,
    },
    {
      key: "10",
      field: "Gender",
      value: currentUser.gender,
    },
    {
      key: "11",
      field: "Blood Group",
      value: currentUser.bloodGroup,
    },
  ];

  const filteredStudentData = studentData.filter((item) => item.value);

  const guardianData: DataType[] = [
    {
      key: "1",
      field: "Guardian Name",
      value: currentUser?.guardianDetails?.guardianName,
    },
    {
      key: "2",
      field: "Guardian Contact",
      value: currentUser?.guardianDetails?.guardianContact,
    },
    {
      key: "3",
      field: "Guardian Relation",
      value: currentUser?.guardianDetails?.guardianRelation,
    },
  ];

  const filteredGuardianData = guardianData.filter((item) => item.value);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      Swal.fire({
        icon: "error",
        title: "No image file selected for upload",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", file);
      const imgResponse = await axios.post(
        "https://api.imgbb.com/1/upload?key=bc0cdf94b03f16289e4ecc89abac5049",
        formData
      );

      if (imgResponse.data.success) {
        const photoUrl = imgResponse.data.data.display_url;
        console.log(photoUrl);

        // Update the image URL in the database
        await axios.patch(`/api/update-studentImg/${currentUser?.studentId}`, {
          image: photoUrl,
        });

        Swal.fire({
          icon: "success",
          title: "Image uploaded successfully",
        });
        refetch();
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Image upload failed",
      });
    }
  };

  return (
    <div className="font-displayOne relative">
      <div className="flex flex-col gap-5 items-center">
        <Tooltip
          placement="right"
          title="Students must upload a professional image wearing school uniform"
        >
          <div className="relative group" onClick={handleImageClick}>
            <img
              className="w-52 h-52 rounded-2xl object-cover"
              src={
                currentUser?.image
                  ? currentUser?.image
                  : "https://i.ibb.co/6JVJMvZ/blank-profile-picture.png"
              }
              alt="profile Image"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-2xl cursor-pointer">
              <span className="text-white text-lg font-semibold">
                Upload Image
              </span>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>
        </Tooltip>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">{currentUser.fullName}</h1>
          <p className="font-semibold">
            Student ID:{" "}
            <span className="text-xl font-semibold hover:text-blue-800 hover:underline hover:cursor-pointer">
              {currentUser.studentId}
            </span>
          </p>
        </div>
      </div>
      <div className="md:flex gap-5 my-10 w-full">
        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold text-center">
            Student Details
          </h1>
          <Table
            columns={columns}
            dataSource={filteredStudentData}
            size="middle"
            pagination={false}
          />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-2xl font-semibold text-center">
            Guardian Details
          </h1>
          <Table
            columns={columns}
            dataSource={filteredGuardianData}
            size="middle"
            pagination={false}
          />
          <div className="mt-10">
            <h1 className="text-2xl font-semibold text-center">
              Attendance Parentage
            </h1>
            <div className="flex gap-3 flex-col items-center my-5">
              <p>Attendance Before Half-Yearly Exam 2024:</p>
              <Progress
                type="dashboard"
                percent={87}
                strokeColor={conicColors}
              />
              <p>
                <span className="font-semibold">Feedback:</span> Your Attendance
                parentage is good.
              </p>
            </div>
          </div>
        </div>
      </div>
      {!currentUser?.guardianDetails && (
        <>
          <div className=" absolute top-0 right-4 rotate-45 bg-red-300 w-10 h-10"></div>
          <div className="absolute top-5 right-0 p-2 w-52 bg-red-300">
            <h1 className="text-sm">
              Please EDIT your profile data from here to complete registration
              on this site.
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentProfile;
