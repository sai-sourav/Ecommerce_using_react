import React from "react";
import { Card, Button } from "react-bootstrap";

import "./Card.css";

export default function Product(props) {
  return (
    <Card className="mt-4">
      <Card.Header className="text-center">{props.product.title}</Card.Header>
      <Card.Img variant="top" src={props.product.imageUrl} />
      <Card.Body>
        <div className="card_body">${props.product.price}  <Button variant="primary">Add to Cart</Button></div>
      </Card.Body>
    </Card>
  );
}
