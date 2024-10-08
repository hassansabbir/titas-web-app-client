import { Dropdown, Layout, MenuProps, Tooltip } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useUser } from "../../../Context/useUser";
import { FaArrowLeft } from "react-icons/fa6";
import Logout from "../../../pages/Authentication/Logout";
import EditProfileModal from "../../../pages/Dashboard/Student/StudentProfile/EditProfileModal";

const items: MenuProps["items"] = [
  {
    label: <EditProfileModal />,
    key: "0",
  },
  {
    label: <Logout></Logout>,
    key: "1",
  },
];

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { currentUser } = useUser();

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header
          className="flex items-center justify-between text-white font-semibold lg:text-3xl md:text-2xl text-xl 
        "
        >
          <Tooltip placement="bottom" title="Home">
            <button onClick={() => navigate("/")}>
              <FaArrowLeft className="size-6" />
            </button>
          </Tooltip>
          <Link className="hover:text-blue-400" to={"/"}>
            T I T A S
          </Link>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <div>
                {currentUser && (
                  <div className="avatar">
                    <img
                      className="size-11 object-cover rounded-full p-1"
                      src={currentUser?.image}
                    />
                  </div>
                )}
              </div>
            </a>
          </Dropdown>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
