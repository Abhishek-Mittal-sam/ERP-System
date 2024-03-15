import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Calendarr from "./pages/calendar/Calendarr";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Order from "./pages/order/Order";
import Product from "./pages/product/Product";
import { orderInputs, productInputs } from "./formData";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/products/:productId",
    element: <Single />,
  },

  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/orders",
    element: <Order />,
  },
  {
    path: "/orders/:orderId/new",
    element: <New inputs={orderInputs} title="Add new Order" />,
  },
  {
    path: "/products/:productId/new",
    element: <New  inputs={productInputs} title="Add new Product"/>,
  },
  {
    path: "/calendar",
    element: < Calendarr/>,
  },


]);


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
