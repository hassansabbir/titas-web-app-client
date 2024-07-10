import { Button } from "antd";
import { useUser } from "../../../Context/useUser";

const StudentProfile = () => {
  const { currentUser, loading, error } = useUser();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!currentUser) return <div>No user data available</div>;

  console.log(currentUser);
  return (
    <div>
      <div className="text-center mb-5">
        <Button type="primary" className="shadow-lg">
          Edit Details
        </Button>
      </div>
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
          <h1 className="text-3xl font-bold">{currentUser.fullName}</h1>
          <p className="font-semibold">
            Student ID:{" "}
            <span className="text-xl font-bold hover:text-blue-800 hover:underline hover:cursor-pointer">
              {currentUser.studentId}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
