import React, { useContext } from "react";
import { FindorCreateCart } from "../crudcrudapi";
import userContext from "./user-context";
const { useState } = require("react");

const Cartcontext = React.createContext({
  showCart : "",
  updateShowcart : () => {},
  cartItems: [],
  updateCartItems: () => {},
});

export const CartcontextProvider = (props) => {
  const userctx = useContext(userContext);
  const [showCart, changeShowcart] = useState(false);
  const [cartItems, ChangeCartItems] = useState([
    // {
    //   title: "Colors",
    //   price: 100,
    //   imageUrl:
    //     "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    //   quantity: 2,
    // },
    // {
    //   title: "Black and white Colors",
    //   price: 50,
    //   imageUrl:
    //     "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    //   quantity: 3,
    // },
    // {
    //   title: "Yellow and Black Colors",
    //   price: 70,
    //   imageUrl:
    //     "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    //   quantity: 1,
    // },
  ]);

  const updateCartItems = async () => {
    const cart = await FindorCreateCart(userctx.email);
    ChangeCartItems(cart.items);
  };

  const updateShowcart = async (bool) => {
    const cart = await FindorCreateCart(userctx.email);
    ChangeCartItems(cart.items);
    if(bool === false){
      changeShowcart(false);
    }else{
      changeShowcart((prevState) => !prevState);
    }
  }

  const values = {
    showCart : showCart,
    updateShowcart : updateShowcart,
    cartItems: cartItems,
    updateCartItems: updateCartItems,
  };

  return (
    <Cartcontext.Provider value={values}>{props.children}</Cartcontext.Provider>
  );
};

export default Cartcontext;
