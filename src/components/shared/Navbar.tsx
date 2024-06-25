// import Container from "../ui/Container";

// import titasLogo from ""
import { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
      <div className="flex fixed w-full z-10 justify-between p-7 px-12  bg-white text-black  ">
        <div>
          <h1 className="text-3xl font-displayTwo font-bold ">T I T A S</h1>
        </div>
        {/* With bigger screen */}
        <div>
          <ul className="lg:flex gap-6 font-displayTwo font-semibold hidden ">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Pages</li>
            <li>Events</li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
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
