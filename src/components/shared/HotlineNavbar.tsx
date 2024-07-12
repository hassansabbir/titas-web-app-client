import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import LiveDate from "../ui/LiveDate";
import { Link } from "react-router-dom";
import Logout from "../../pages/Authentication/Logout";
import { useUser } from "../../Context/useUser";
import { motion } from "framer-motion";
import { Button } from "antd";
const HotlineNavbar = () => {
  const { state } = useUser();

  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      className="bg-gray-900 text-white py-3 uppercase px-12 flex justify-between text-xs"
    >
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-5">
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
      <div className="flex items-center gap-4">
        {state.user ? (
          <div className="flex items-center justify-center gap-5">
            <h1>{state?.user?.fullName}</h1>
            <Button type="primary" size="small">
              <Logout />
            </Button>
          </div>
        ) : (
          <>
            {" "}
            <p>
              <Link to={"/login"}>LOGIN</Link>
            </p>
            <p>
              <Link to={"/sign-up"}>REGISTER</Link>
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default HotlineNavbar;
