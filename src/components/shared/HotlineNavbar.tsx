import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import LiveDate from "../ui/LiveDate";
import { Link } from "react-router-dom";

const HotlineNavbar = () => {
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
      </div>
    </div>
  );
};

export default HotlineNavbar;
