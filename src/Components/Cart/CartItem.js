import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Cartcontext from "../../Context/cart-context";

export default function CartItem(props) {
    const cartctx = useContext(Cartcontext)
    const { item } = props;
    const removeFromCart = () => {
        const newItem = {
            title : item.title,
            quantity : -1
        }
        cartctx.updateCartItems(newItem);
    }

  return (
    <tr>
      <td className="text-center">
        <Image fluid src={item.imageUrl} width="70"></Image>
      </td>
      <td className="align-middle text-center">{item.title}</td>
      <td className="align-middle text-center">{item.price}</td>
      <td className="align-middle text-center">{item.quantity}</td>
      <td className="align-middle text-center">
        <Button variant="danger" onClick={removeFromCart}>
          Remove
        </Button>
      </td>
    </tr>
  );
}
