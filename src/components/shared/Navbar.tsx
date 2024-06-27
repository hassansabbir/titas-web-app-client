import { useState } from "react";
import { Drawer, Dropdown, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

type MenuItem =
  | {
      label: JSX.Element;
      key: string;
      type?: undefined;
    }
  | {
      type: "divider";
      label?: undefined;
      key?: undefined;
    };

const items: MenuItem[] = [
  {
    label: <Link to={"/administrations"}>Teaching Staff</Link>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"/administrations"}>Office Staff</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"/administrations"}>Supporting Staff</Link>,
    key: "2",
  },
  {
    type: "divider",
  },
];

const admissionItems: MenuItem[] = [
  {
    label: <Link to={"/admission/schoolInfo"}>Admission Info</Link>,
    key: "0",
  },
  {
    label: <Link to={"/admission/applyNow"}>Apply Now</Link>,
    key: "1",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Dropdown
          menu={{
            items: admissionItems,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>Admission</Space>
          </a>
        </Dropdown>
      </li>
      <li>Events</li>
      <li>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>Administrations</Space>
          </a>
        </Dropdown>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li>Login</li>
    </>
  );

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center fixed w-full z-10 justify-between py-3 px-12 bg-opacity-60 bg-white text-black">
        <div>
          <h1 className="text-3xl font-displayTwo font-bold">
            <Link to={"/"}>T I T A S</Link>
          </h1>
        </div>
        {/* With bigger screen */}
        <div>
          <ul className="lg:flex gap-6 text-lg font-displayTwo font-semibold hidden">
            {navItems}
          </ul>
        </div>

        {/* TODO: More to do with responsives for other devices */}
        <div className="lg:hidden" onClick={showDrawer}>
          <MenuOutlined />
        </div>
        <Drawer title="DRAWER" onClose={onClose} open={open}>
          <ul>{navItems}</ul>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
