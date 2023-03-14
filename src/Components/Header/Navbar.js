import React, { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

import Cartcontext from "../../Context/cart-context";
import "./Header.css"

const Navigationbar = (props) => {
  const cartctx = useContext(Cartcontext);
  const handleSelect = (eventKey) => {
    props.Page(eventKey);
  };
  return (
    <>
      <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">The Generics</Navbar.Brand>
          <Nav
            className="gap-5"
            defaultActiveKey="home"
            onSelect={handleSelect}
          >
            <Nav.Link eventKey="home">Home</Nav.Link>
            <Nav.Link eventKey="store">Store</Nav.Link>
            <Nav.Link eventKey="about">About</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={() => cartctx.updateShowcart(prev => !prev)}>Cart</Button>
        </Container>
      </Navbar>
      <div className="header">
        <h1 style={{ fontSize: "6rem" }}>The Generics</h1>
        {props.pagename === "home" && <><button className="latest-album">Get our Latest Album</button><button className="play-btn">►</button></>}
      </div>
    </>
  );
};

export default React.memo(Navigationbar);
