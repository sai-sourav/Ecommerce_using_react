import { useContext } from "react";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import Cartcontext from "./Context/cart-context";

import { Route, Routes} from "react-router-dom";
import Contactus from "./Components/ContactUs/Contactus";
import ProductDetail from "./Components/Store/productDetail";
import Footer from "./Components/Footer/Footer";
import Navigationbar from "./Components/Header/Header";

const App = () => {
  const cartctx = useContext(Cartcontext);
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/store" element={<Store />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/store/:id" element={<ProductDetail />} />
      </Routes>
      <Cart
        show={cartctx.showCart}
        onHide={() => cartctx.updateShowcart((prev) => !prev)}
      ></Cart>
      <Footer />
    </>
  );
};

export default App;
