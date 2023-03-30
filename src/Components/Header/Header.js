import React, { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import Cartcontext from "../../Context/cart-context";
import "./Header.css";
import userContext from "../../Context/user-context";

const Navigationbar = (props) => {
  const cartctx = useContext(Cartcontext);
  const userctx = useContext(userContext);
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
          <Nav className="gap-5">
            {!userctx.isloggedIn && <NavLink exact to="/login" activeClassName="active" className="navlink">Login</NavLink>}
            <NavLink exact to="/home" activeClassName="active" className="navlink">Home</NavLink>
            {userctx.isloggedIn && <NavLink exact to="/store" activeClassName="active" className="navlink">Store</NavLink>}
            <NavLink exact to="/about" activeClassName="active" className="navlink">About</NavLink>
            <NavLink exact to="/contactus" activeClassName="active" className="navlink">Contact Us</NavLink>
            {/* <Nav.Link as={NavLink} exact eventKey="Login" to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="home" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} exact eventKey="store" to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="about" to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} eventKey="contactus" to="/contactus">
              ContactUs
            </Nav.Link> */}
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
