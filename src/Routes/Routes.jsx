import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "../Views/Add";
import Dashboard from "../Views/Dashboard";
import Home from "../Views/Home";
import List from "../Views/List";
import NotFound from "../Views/NotFound";
import Setting from "../Views/Setting";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/List",
        element: <List />,
      },
      {
        path: "/Add",
        element: <Add />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
