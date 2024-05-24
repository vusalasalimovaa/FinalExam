import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Pages/Home";
import Fav from "../components/Pages/Fav";
import Detail from "../components/Pages/Detail";
import Admin from "../components/Pages/AdminPanel";
import CreateProduct from "../components/Pages/AdminPanel/CreateProduct";

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
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/post",
        element: <CreateProduct />,
      },

    ]
  },

]);

export default router