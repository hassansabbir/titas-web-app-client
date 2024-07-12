import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useUser } from "../../../Context/useUser";

interface SidebarProps {
  onCollapse?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const { state } = useUser();

  const userRole = state.user?.role;

  const studentItems = [
    {
      label: <Link to={"/dashboard/student-profile"}>Student Profile</Link>,
      key: "StudentProfile",
    },
    {
      label: <Link to={"/dashboard/my-results"}>My Results</Link>,
      key: "myResults",
    },
  ];

  const adminItems = [
    {
      label: <Link to={"/dashboard/admin-profile"}>Admin Profile</Link>,
      key: "adminProfile",
    },
  ];
  const superAdminItems = [
    {
      label: (
        <Link to={"/dashboard/superAdmin-profile"}>Super Admin Profile</Link>
      ),
      key: "adminProfile",
    },
    {
      label: <Link to={"/dashboard/manage-users"}>Manage Users</Link>,
      key: "manageUsers",
    },
  ];

  const items =
    userRole === "superAdmin"
      ? superAdminItems
      : userRole === "admin"
      ? adminItems
      : studentItems;

  return (
    <>
      <Sider
        width={250}
        breakpoint="xl"
        collapsedWidth={"0"}
        className="flex flex-col sticky top-0 left-0 "
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="mt-10 text-white h-16 flex justify-center items-center">
              <h1>UserName</h1>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["4"]}
                items={items}
              />
            </div>
          </div>
          <div className="mt-auto mb-4 text-center">
            <Link to="/">
              <Button type="primary" className="w-11/12 mb-4">
                <AiOutlineHome /> Home
              </Button>
            </Link>
          </div>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
