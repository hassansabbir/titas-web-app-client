import { useUser } from "../../../Context/useUser";

const StudentProfile = () => {
  const { currentUser, loading, error } = useUser();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!currentUser) return <div>No user data available</div>;

  console.log(currentUser);
  return (
    <div>
      <img
        className="w-28 h-28"
        src={
          currentUser.image
            ? currentUser.image
            : "https://i.ibb.co/6JVJMvZ/blank-profile-picture.png"
        }
        alt="profile Image"
      />
      <h1 className="text-4xl font-bold">Hii I am {currentUser.fullName}</h1>
    </div>
  );
};

export default StudentProfile;
