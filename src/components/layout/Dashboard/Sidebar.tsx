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
      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="mt-20"
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>T I T A S</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        style={{ flex: 1 }}
      />
      <div style={{ marginBottom: "16px", textAlign: "center" }}>
        <Link to="/">
          <Button type="primary" style={{ width: "90%" }}>
            Home
          </Button>
        </Link>
      </div>
    </Sider>
  );
};

export default Sidebar;
