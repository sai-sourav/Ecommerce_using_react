import { useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Navbar";
import Home from "./Components/Home/Home"
import Store from "./Components/Store/Store";

const App = () => {
  const [page, changePage] = useState("home")
  return (
    <>
      <Header Page={(page) => {changePage(page)}} pagename={page}/>
      {page === "home" && <Home></Home>}
      {page === "about" && <About></About>}
      {page === "store" && <Store></Store>}
      <Footer />
    </>
  );
};

export default App;
