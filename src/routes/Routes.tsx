import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Administrations from "../pages/Administrations/Administrations";
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
        path: "/administrations",
        element: <Administrations />,
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
