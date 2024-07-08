import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import LiveDate from "../ui/LiveDate";
import { Link } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const HotlineNavbar = () => {
  const { state } = useUser();

  return (
    <div className="bg-gray-900 text-white py-3 uppercase px-12 flex justify-between text-xs">
      <div className="flex gap-10">
        <ul className="flex gap-5">
          <li>
            <LiveDate />
          </li>
          <li>Hotline: +023436543</li>
        </ul>
        <div className="flex gap-2">
          <p>Follow Us</p>
          <p>
            <InstagramFilled />
          </p>
          <p>
            <FacebookFilled />
          </p>
          <p>
            <TwitterCircleFilled />
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <p>
          <Link to={"/login"}>LOGIN</Link>
        </p>
        <p>
          <Link to={"/sign-up"}>REGISTER</Link>
        </p>

        <h1>{state?.user?.fullName}</h1>
      </div>
    </div>
  );
};

export default HotlineNavbar;
