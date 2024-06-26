import { useState } from "react";
import { Drawer, Dropdown, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import HotlineNavbar from "./HotlineNavbar";
import useScreen from "../../hooks/useScreen";

type MenuItem =
  | {
      label: JSX.Element;
      key: string;
      type?: undefined;
      children?: MenuItem[];
    }
  | {
      type: "divider";
      label?: undefined;
      key?: undefined;
      children?: undefined;
    };

const items: MenuItem[] = [
  {
    label: <Link to={"/all-staffs"}>Messages</Link>,
    key: "0",
    children: [
      {
        key: "0-1",
        label: (
          <Link to={"/messages/head-masters-message"}>
            Head Teacher's Message
          </Link>
        ),
      },
      {
        type: "divider",
      },
      {
        key: "0-2",
        label: (
          <Link to={"/messages/principals-message"}>Principal's Message</Link>
        ),
      },
    ],
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"/all-staffs/teachers"}>Teaching Staff</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"/all-staffs/official-staffs"}>Office Staff</Link>,
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"/all-staffs/supporting-staffs"}>Supporting Staffs</Link>,
    key: "2",
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
  const screenSize = useScreen();
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
      <li>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
    </>
  );

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className=" fixed w-full z-10 ">
      <>{screenSize < 768 || screenSize < 1024 ? "" : <HotlineNavbar />}</>
      <div className="flex items-center justify-between py-3 px-12 bg-opacity-60 bg-white text-black  ">
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
        <Drawer className="text-4xl font-displayTwo" title="Menu"  onClose={onClose} open={open}>
          <ul>{navItems}</ul>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
