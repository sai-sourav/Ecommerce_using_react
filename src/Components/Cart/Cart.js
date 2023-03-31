import React, { useContext } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import Cartcontext from "../../Context/cart-context";
import "./Cart.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  const Cartctx = useContext(Cartcontext);
  let totalPrice = 0
  if(Cartctx.cartItems.length > 0){
    totalPrice = Cartctx.cartItems.map(item => item.price * item.quantity).reduce((tot,curr) => tot + curr);
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Cartctx.cartItems.length === 0 && <h2 className="align-middle text-center">No items to Show</h2>}
        {Cartctx.cartItems.length !== 0 && <>
        <Table>
          <thead>
            <tr>
              <th className="text-center">Image</th>
              <th className="text-center">Title</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {Cartctx.cartItems.map((item) => {
              return (
                <CartItem item={item} />
              );
            })}
          </tbody>
        </Table>
        <div className="totalamount"><h4>Total Amount: $ {totalPrice}</h4></div></>}
      </Modal.Body>
      <Modal.Footer>
        <Button disabled={Cartctx.cartItems.length === 0}>Order now</Button>
      </Modal.Footer>
    </Modal>
  );
}
