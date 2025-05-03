import { createBrowserRouter } from "react-router";
import Header from "../Components/Header/Header";
import Latest from "../Components/Latest/Latest";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import HomeLayout from "../Components/HomeLayouts/HomeLayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component:HomeLayout,
      children:[
        {
          path:"",
          Component:Home
        },
        {
          path:"/category/:id",
          Component:CategoryNews
        }
      ]
    },
    
    {
      path: "/auth",
      element: <h2>Authentication Layout</h2>
    },
    {
      path: "/news",
      element: <h2>News Layout</h2>
    },
    {
      path: "/*",
      element: <h2>Error 404</h2>
    }

  ]
);


export default router;