import React from "react";
const { useState } = require("react");

const Cartcontext = React.createContext({
  showCart : "",
  updateShowcart : () => {},
  cartItems: [],
  updateCartItems: (newItem) => {},
});

export const CartcontextProvider = (props) => {
  const [showCart, changeShowcart] = useState(false);
  const [cartItems, ChangeCartItems] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const updateCartItems = (newitem) => {
    ChangeCartItems((prevState) => {
      const find = prevState.findIndex((product) => product.title === newitem.title)
      if(find >= 0 && newitem.quantity === -1){
        prevState[find].quantity -= 1
        if(prevState[find].quantity === 0){
          prevState.splice(find,1)
        }
        return [...prevState]
      } 
      else if(find >= 0){
        prevState[find].quantity += 1
        return [...prevState]
      }else{
        newitem["quantity"] = 1
        return [...prevState, newitem]
      }
    });
  };

  const updateShowcart = () => {
    changeShowcart((prevState) => !prevState)
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
