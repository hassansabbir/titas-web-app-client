import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  // const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // const handleSidebarCollapse = (collapsed : boolean) => {
  //   setSidebarCollapsed(collapsed);
  // };
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header
          className="flex items-center justify-center text-white font-semibold lg:text-3xl md:text-2xl text-xl 
        "
        >
          <Link className="hover:text-blue-400" to={"/"}>
            T I T A S
          </Link>
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
