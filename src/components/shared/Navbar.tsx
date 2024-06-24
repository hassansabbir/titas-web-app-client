// import Container from "../ui/Container";

// import titasLogo from ""
import { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex fixed w-full z-10 justify-between p-7 px-12 bg-opacity-50 bg-black text-white ">
        <div>
          <h1 className="text-3xl font-displayTwo font-medium ">T I T A S</h1>
        </div>
        {/* With bigger screen */}
        <div>
          <ul className="lg:flex gap-6 font-displayTwo font-semibold hidden ">
            <li>Home</li>
            <li>Pages</li>
            <li>Events</li>
            <li>Blog</li>
          </ul>
        </div>
        {/* Hamburger for smaller devices */}
        {/* TODO: More to do with responsives for other devices */}
        <div className=" lg:hidden " onClick={showDrawer}>
          <MenuOutlined />
        </div>
        <Drawer title="DRAWER" onClose={onClose} open={open}>
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>Events</li>
            <li>Blog</li>
          </ul>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
