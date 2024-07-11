import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useUser } from "../../../Context/useUser";
import { FaArrowLeft } from "react-icons/fa6";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { currentUser } = useUser();

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header
          className="flex items-center justify-between text-white font-semibold lg:text-3xl md:text-2xl text-xl 
        "
        >
          <button onClick={() => navigate(-1)}>
            <FaArrowLeft className="size-6" />
          </button>
          <Link className="hover:text-blue-400" to={"/"}>
            T I T A S
          </Link>
          <div>
            {currentUser && (
              <div className="flex gap-3 text-lg cursor-pointer items-center">
                <div className="avatar">
                  <img
                    className="size-11 object-cover rounded-full p-1"
                    src={currentUser?.image}
                  />
                </div>
              </div>
            )}
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
