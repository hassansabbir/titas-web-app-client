import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
interface SidebarProps {
  onCollapse?: (collapsed: boolean) => void;
}
const Sidebar: React.FC<SidebarProps> = () => {
  // const [collapsed, setCollapsed] = useState(false);
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

  // const handleMenuOpen = () => {
  //   setCollapsed(!collapsed);
  //   if (onCollapse) {
  //     onCollapse(!collapsed);
  //   }
  // };

  // const handleMenuOpen = () => {
  //   setCollapsed(true);
  //   if (collapsed) {
  //     onCollapse(!collapsed);
  //   }
  // };

  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth={"0"}
        className="flex flex-col h-screen sticky top-0 left-0 "
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="mt-10 text-white h-16 flex justify-center items-center">
              <h1>UserName</h1>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["4"]}
                items={items}
              />
            </div>
          </div>
          <div className="mt-auto mb-4 text-center ">
            <Link to="/">
              <Button type="primary" className="w-11/12 ">
                <AiOutlineHome /> Home
              </Button>
            </Link>
          </div>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
