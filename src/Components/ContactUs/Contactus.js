import React, { useRef, useCallback } from "react";
import { Form, Button, Container } from "react-bootstrap";

import "./contactus.css";

export default function Contactus() {
  const submitHandler = useCallback(async (event) => {
    event.preventDefault();
    const form = event.target;
    const obj = {
      name: nameref.current.value,
      email: emailref.current.value,
      phone: phoneref.current.value,
    };
    try {
      await fetch(
        "https://react-http-2467f-default-rtdb.asia-southeast1.firebasedatabase.app/contactus.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    form.reset();
  }, []);

  const nameref = useRef(undefined);
  const emailref = useRef(undefined);
  const phoneref = useRef(undefined);
  return (
    <Container style={{ minHeight: "77.5vh" }}>
      <div className="contactdiv">
        <br></br>
        <h3>Share your Details:</h3>
        <Form onSubmit={submitHandler} className="mt-4">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" ref={nameref} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailref}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone no:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone number"
              ref={phoneref}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{marginLeft: "3rem"}}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}
