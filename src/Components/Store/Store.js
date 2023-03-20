import React, { useContext } from "react";
import StoreContext from "../../Context/store-context";
import Card from "./Card";

import "./Store.css";

export default function Store() {
  const productctx = useContext(StoreContext);
  const productsArr = productctx.products;

  return (
    <>
    <div className="header">
        <h1 style={{ fontSize: "6rem" }}>The Generics</h1>
    </div>
    <div className="products_div">
      {productsArr.map((product, index) => {
        return <Card product={product}></Card>;
      })}
    </div>
    </>
  );
}
