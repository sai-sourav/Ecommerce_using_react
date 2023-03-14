import React, { useContext } from "react";
import { Button, Image, Modal, Table } from "react-bootstrap";
import Cartcontext from "../../Context/cart-context";
import "./Cart.css";
export default function Cart(props) {
  const Cartctx = useContext(Cartcontext);
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
                <tr>
                  <td className="text-center"><Image fluid src={item.imageUrl} width="70"></Image></td>
                  <td className="align-middle text-center">{item.title}</td>
                  <td className="align-middle text-center">{item.price}</td>
                  <td className="align-middle text-center">{item.quantity}</td>
                  <td className="align-middle text-center">
                    <Button variant="danger">Remove</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button>Order now</Button>
      </Modal.Footer>
    </Modal>
  );
}
