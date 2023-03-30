import { useContext } from "react";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import Cartcontext from "./Context/cart-context";

import { Route, Routes, Navigate} from "react-router-dom";
import Contactus from "./Components/ContactUs/Contactus";
import ProductDetail from "./Components/Store/productDetail";
import Footer from "./Components/Footer/Footer";
import Navigationbar from "./Components/Header/Header";
import AuthForm from "./Components/Login/Login";
import userContext from "./Context/user-context";

const App = () => {
  const cartctx = useContext(Cartcontext);
  const userctx = useContext(userContext);
  return (
    <>
      <Navigationbar />
      <Routes>
        {console.log(userctx.isloggedIn)}
        {!userctx.isloggedIn && <Route path="/Login" element={<AuthForm />} />}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {userctx.isloggedIn && <Route exact path="/store" element={<Store /> } />}
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/store/:id" element={<ProductDetail />} />
        <Route path="*" element={ <Navigate to="/home" /> } />
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
