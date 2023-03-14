import { useContext } from "react";
import "./App.css";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import Cartcontext from "./Context/cart-context";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
  {path: "/",
   element: <Root />,
   children: [
    {path: "/", element: <Home />},
    {path: "/about", element: <About />},
    {path: "/store", element: <Store />}
   ]
  }
]);

const App = () => {
  const cartctx = useContext(Cartcontext);
  return (
    <>
      <Cart
        show={cartctx.showCart}
        onHide={() => cartctx.updateShowcart((prev) => !prev)}
      ></Cart>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
