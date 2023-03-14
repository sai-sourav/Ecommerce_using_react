import { useContext, useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Navbar";
import Home from "./Components/Home/Home"
import Store from "./Components/Store/Store";
import Cartcontext from "./Context/cart-context";

const App = () => {
  const cartctx = useContext(Cartcontext);
  const [page, changePage] = useState("home")
  return (
    <>
      <Header Page={(page) => {changePage(page)}} pagename={page}/>
      <Cart
        show={cartctx.showCart}
        onHide={() => cartctx.updateShowcart(prev => !prev)}
      ></Cart>
      {page === "home" && <Home></Home>}
      {page === "about" && <About></About>}
      {page === "store" && <Store></Store>}
      <Footer />
    </>
  );
};

export default App;
