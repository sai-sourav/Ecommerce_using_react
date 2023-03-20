import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cartcontext from "../../Context/cart-context";
import "./Card.css";

export default function Product(props) {
  const cartctx = useContext(Cartcontext);
  const todetail = `/store/${props.product.id}`;
  return (
    <Card className="mt-4">
      <Card.Header className="text-center">{props.product.title}</Card.Header>
      <Card.Img variant="top" src={props.product.imageUrl} />
      <Card.Body>
        <div className="card_body">${props.product.price}  <Button variant="primary" onClick={() => cartctx.updateCartItems(props.product)}>Add to Cart</Button> <Button variant="primary" as={Link} to={todetail}>Details</Button></div>
      </Card.Body>
    </Card>
  );
}
