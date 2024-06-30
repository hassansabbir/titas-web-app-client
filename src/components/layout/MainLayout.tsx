import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { FloatButton } from "antd";

const MainLayout = () => {
  return (
    <div className="md:flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <FloatButton.BackTop />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
