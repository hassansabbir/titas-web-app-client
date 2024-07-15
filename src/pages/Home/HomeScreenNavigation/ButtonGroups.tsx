import { Link } from "react-router-dom";
import Button from "../../../utils/Button.tsx";

const ButtonGroups = () => {
  return (
    <div className="my-10 md:w-[50%] mx-auto ">
      {" "}
      <h1 className="text-center text-2xl font-displayOne mb-5">Easy Navigates</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 justify-items-center">
        <Link to="#welcome">
          <Button
            imageSrc="https://i.ibb.co/6JVJMvZ/blank-profile-picture.png"
            variant="tertiary"
            onClick={() => console.log("Primary Button Clicked")}
          >
            Welcome
          </Button>
        </Link>
        <Link to="#gallery">
          <Button
            imageSrc="https://i.ibb.co/6JVJMvZ/blank-profile-picture.png"
            variant="secondary"
            onClick={() => console.log("Primary Button Clicked")}
          >
            Gallery
          </Button>
        </Link>
        <Link to="#alumni">
          <Button
            imageSrc="https://i.ibb.co/6JVJMvZ/blank-profile-picture.png"
            variant="secondary"
            onClick={() => console.log("Primary Button Clicked")}
          >
            Alumni
          </Button>
        </Link>
        <Link to="#updates">
          <Button
            imageSrc="https://i.ibb.co/6JVJMvZ/blank-profile-picture.png"
            variant="secondary"
            onClick={() => console.log("Primary Button Clicked")}
          >
            Updates
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonGroups;
