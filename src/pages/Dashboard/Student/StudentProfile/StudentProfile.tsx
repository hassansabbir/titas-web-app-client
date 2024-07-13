import { Progress, ProgressProps, Table, TableColumnsType } from "antd";
import { useUser } from "../../../../Context/useUser";

const StudentProfile = () => {
  const { currentUser, loading, error } = useUser();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!currentUser) return <div>No user data available</div>;

  console.log(currentUser);

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
      key: "7",
      field: "Age",
      value: currentUser.age,
    },
    {
      key: "7",
      field: "Birth Date",
      value: currentUser.dateOfBirth,
    },
    {
      key: "7",
      field: "Roll Number",
      value: currentUser.gender,
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

  return (
    <div className="font-displayOne">
      <div className="flex flex-col gap-5 items-center">
        <img
          className="w-52 h-52 rounded-2xl object-cover"
          src={
            currentUser.image
              ? currentUser.image
              : "https://i.ibb.co/6JVJMvZ/blank-profile-picture.png"
          }
          alt="profile Image"
        />
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
    </div>
  );
};

export default StudentProfile;
