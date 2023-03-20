import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Cartcontext from "../../Context/cart-context";
import StoreContext from "../../Context/store-context";

import "./productDetail.css";

export default function ProductDetail() {
  const [showdelivery, changeDelivery] = useState(false);
  const { id } = useParams();
  const productctx = useContext(StoreContext);
  const cartctx = useContext(Cartcontext);
  const products = productctx.products;
  const find = products.findIndex((product) => {
    return product.id === Number(id);
  });
  const product = products[find];
  return (
    <Container style={{ minHeight: "81vh" }}>
      <div className="product_detail_div">
        <Card style={{ width: "25rem" }}>
          <Card.Img className="image" variant="top" src={product.imageUrl} />
          <Card.Body>
            <div className="card_body">
              <Button variant="success" size="lg" style={{ width: "11.2rem" }}>
                Buy Now
              </Button>
              <Button
                variant="success"
                onClick={() => cartctx.updateCartItems(product)}
                size="lg"
                style={{ width: "11.2rem" }}
              >
                Add to Cart
              </Button>{" "}
            </div>
          </Card.Body>
        </Card>
        <div className="details">
          <h2 className="text-center">{product.title}</h2>
          <div className="rating_div">
            <h4>Rating:</h4>
            <h5 className="showrating">4 ✶</h5>
          </div>
          <h2>₹ {product.price}</h2>
          <h4>Available offers:</h4>
          <p>
            {" "}
            ✶ Buy this Product and Get Extra ₹500 Off on Bikes & Scooters.{" "}
          </p>
          <p>
            ✶ Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift
            Card worth up to ₹500 Bank Offer.
          </p>
          <p>
            ✶ 5% Cashback on Flipkart Axis Bank Card Partner OfferShop With
            Flipkart Pay Later & stand a chance to win ₹5,000 Gift Card* during
            the offer period.
          </p>
          <Form className="mt-3">
            <Form.Group className="mb-3" controlId="pincode">
              <Form.Label>Deliver to:</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Enter pincode" />
                <Button
                  onClick={() => {
                    changeDelivery(true);
                  }}
                  variant="primary"
                >
                  check
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>
          {showdelivery && (
            <p style={{ marginTop: "0" }}>
              Delivery by 23 Mar, Thursday if ordered before 7:35 PM.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}
