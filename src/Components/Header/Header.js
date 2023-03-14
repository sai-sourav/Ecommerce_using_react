import React, { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import Cartcontext from "../../Context/cart-context";

const Navigationbar = (props) => {
  const cartctx = useContext(Cartcontext);
  let cartQuantity = 0;
  if (cartctx.cartItems.length > 0) {
    cartQuantity = cartctx.cartItems
      .map((item) => item.quantity)
      .reduce((tot, curr) => tot + curr);
  }

  return (
    <>
      <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            The Generics
          </Navbar.Brand>
          <Nav className="gap-5" defaultActiveKey="home">
            <Nav.Link as={NavLink} eventKey="home" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="store" to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="about" to="/about">
              About
            </Nav.Link>
          </Nav>
          <Button
            variant="primary"
            onClick={() => cartctx.updateShowcart((prev) => !prev)}
          >
            Cart ({cartQuantity})
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
