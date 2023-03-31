import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Cartcontext from "../../Context/cart-context";
import userContext from "../../Context/user-context";
import { removeCartItem } from "../../crudcrudapi";

export default function CartItem(props) {
    const cartctx = useContext(Cartcontext);
    const userctx = useContext(userContext);
    const { item } = props;
    const removeFromCart = async () => {
        const newItem = {
            title : item.title,
            quantity : -1
        }
        const { status } = await removeCartItem(userctx.email,newItem);
        cartctx.updateCartItems();
        console.log(status);
    }

  return (
    <tr key={Math.random().toString()}>
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
