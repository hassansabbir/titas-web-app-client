import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import AllStaffs from "../pages/Administrations/AllStaffs";
import HeadMastersMessages from "../pages/Administrations/Messages/HeadMastersMessages";
import PrincipalsMessage from "../pages/Administrations/Messages/PrincipalsMessage";
import AdmissionInfo from "../pages/Admission/AdmissionInfo";
import ApplyNow from "../pages/Admission/ApplyNow";

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
        path: "all-staffs",
        element: <AllStaffs />,
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
    ],
  },
]);

export default router;
