import { useState } from "react";
import { Drawer, Dropdown, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import HotlineNavbar from "./HotlineNavbar";
import useScreen from "../../hooks/useScreen";
import { useDashboardUrl } from "../../hooks/useDashboardUrl";
import { motion } from "framer-motion";
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
    label: <Link to={"/messages/head-masters-message"}>Messages</Link>,
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

const resourcesItems: MenuItem[] = [
  {
    label: <Link to={"/events"}>Events</Link>,
    key: "0",
  },
  {
    label: <Link to={"/results"}>Results</Link>,
    key: "1",
  },
  {
    label: <Link to={"/alumni"}>Alumni</Link>,
    key: "2",
  },
];

const Navbar = () => {
  const screenSize = useScreen();
  const [open, setOpen] = useState(false);
  const dashboardUrl = useDashboardUrl();

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
      <li>
        <Dropdown
          menu={{
            items: resourcesItems,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>Resources & Events</Space>
          </a>
        </Dropdown>
      </li>
      <li>
        <Dropdown
          menu={{
            items,
          }}
          overlayClassName="custom-dropdown"
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
        <Link to={dashboardUrl as string}>Dashboard</Link>
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
      <style>
        {`
          .custom-dropdown .ant-dropdown-menu {
            width: 150px !important; 
          }
        `}
      </style>
      <>{screenSize < 768 || screenSize < 1024 ? "" : <HotlineNavbar />}</>
      <div className="flex items-center justify-between py-3 px-12 bg-opacity-60 bg-white text-black  ">
        <div>
          <Link to={"/"} className="font-displayTwo font-bold">
            <motion.div
              initial={{ fontSize: 20, opacity: 0 }}
              animate={{ fontSize: 100, opacity: 2 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              T I T A S
            </motion.div>
          </Link>
        </div>
        {/* With bigger screen */}
        <div>
          <ul className="lg:flex gap-6 text-md font-displayTwo font-semibold hidden">
            {navItems}
          </ul>
        </div>

        {/* TODO: More to do with responsives for other devices */}
        <div className="lg:hidden" onClick={showDrawer}>
          <MenuOutlined />
        </div>
        <Drawer
          className="text-4xl font-displayTwo"
          title="Menu"
          onClose={onClose}
          open={open}
        >
          <ul>{navItems}</ul>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
