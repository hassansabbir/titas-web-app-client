import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

interface SidebarProps {
  onCollapse?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const items = [
    {
      label: <Link to={"/dashboard/student-profile"}>Student Profile</Link>,
      key: "StudentProfile",
    },
    {
      label: <Link to={"/dashboard/my-results"}>My Results</Link>,
      key: "myResults",
    },
  ];

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
