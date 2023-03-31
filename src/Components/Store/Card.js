import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Cartcontext from "../../Context/cart-context";
import userContext from "../../Context/user-context";
import "./Card.css";
// import axios from "axios";

import { addItemToCart } from "../../crudcrudapi";

export default function Product(props) {
  // const cartctx = useContext(Cartcontext);
  const userctx = useContext(userContext);
  const todetail = `/store/${props.product.id}`;
  const addtocartHandler = async () => {
    // cartctx.updateCartItems(props.product);
    const { status } = await addItemToCart(userctx.email, props.product);
    console.log(status);
  }
  return (
    <Card className="mt-4">
      <Card.Header className="text-center">{props.product.title}</Card.Header>
      <Card.Img variant="top" src={props.product.imageUrl} />
      <Card.Body>
        <div className="card_body">${props.product.price}  <Button variant="primary" onClick={addtocartHandler}>Add to Cart</Button> <Button variant="primary" as={Link} to={todetail}>Details</Button></div>
      </Card.Body>
    </Card>
  );
}
