import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import HeadMastersMessages from "../pages/Administrations/Messages/HeadMastersMessages";
import PrincipalsMessage from "../pages/Administrations/Messages/PrincipalsMessage";
import AdmissionInfo from "../pages/Admission/AdmissionInfo";
import ApplyNow from "../pages/Admission/ApplyNow";
import Teachers from "../pages/Administrations/AllStaffs/Teachers";
import OfficeStaffs from "../pages/Administrations/AllStaffs/OfficeStaffs";
import SupportingStaffs from "../pages/Administrations/AllStaffs/SupportingStaffs";
import DashboardLayout from "../components/layout/Dashboard/DashboardLayout";
import StudentProfile from "../pages/Dashboard/Student/StudentProfile";
import MyResults from "../pages/Dashboard/Student/MyResults";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "messages/head-masters-message",
        element: <HeadMastersMessages />,
      },
      {
        path: "messages/principals-message",
        element: <PrincipalsMessage />,
      },
      {
        path: "all-staffs/teachers",
        element: <Teachers />,
      },
      {
        path: "all-staffs/official-staffs",
        element: <OfficeStaffs />,
      },
      {
        path: "all-staffs/supporting-staffs",
        element: <SupportingStaffs />,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "admission/schoolInfo",
        element: <AdmissionInfo></AdmissionInfo>,
      },
      {
        path: "admission/applyNow",
        element: <ApplyNow></ApplyNow>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "student-profile",
        element: <StudentProfile />,
      },
      {
        path: "my-results",
        element: <MyResults />,
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
