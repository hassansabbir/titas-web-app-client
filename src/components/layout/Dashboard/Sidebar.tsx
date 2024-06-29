import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const items = [
    {
      label: <Link to={"/dashboard/student-profile"}>Student Profile</Link>,
      key: "Student Profile1",
    },
    {
      label: <Link to={"/dashboard/teaching-staff"}>Teaching Staff</Link>,
      key: "Teaching Staff",
    },
  ];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      className="flex flex-col h-screen sticky top-0 left-0"
    >
      <div className="mt-10 text-white h-16 flex justify-center items-center">
        <h1>T I T A S</h1>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
        <div className="mt-auto mb-4 text-center">
          <Link to="/">
            <Button type="primary" className="w-11/12 ">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
