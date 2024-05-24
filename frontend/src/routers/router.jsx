import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Pages/Home";
import Fav from "../components/Pages/Fav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fav",
        element: <Fav />,
      },
    ]
  },
]);

export default router