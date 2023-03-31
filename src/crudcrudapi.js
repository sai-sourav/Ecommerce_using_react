import axios from "axios";

const apiUrl = "https://crudcrud.com/api/6e6a0d5ae6f046d0b2e80abce68508d4";

async function getCarts() {
    try {
        const response = await axios.get(`${apiUrl}/carts`);
        const data = response.data;
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }

}


async function FindorCreateCart(username) {
    try {
        const carts = await getCarts();
        const findCartindex = carts.findIndex((cart) => cart.username === username)
        if (findCartindex >= 0) {
            return carts[findCartindex];
        } else {
            const newCart = {
                username: username,
                items: []
            }
            await axios.post(`${apiUrl}/carts`, newCart);
            const carts = await getCarts();
            const findCartindex = carts.findIndex((cart) => cart.username === username);
            return carts[findCartindex];
        }
    } catch (err) {
        console.log(err);
        return {
            status: "failed"
        }
    }
}


async function addItemToCart(username, newitem) {
    try {
        const Cart = await FindorCreateCart(username);
        const items = Cart.items;
        const cartid = Cart._id;
        // find item if present
        const finditemindex = items.findIndex((item) => item.title === newitem.title);
        if (finditemindex >= 0) {
            items[finditemindex].quantity += 1
        }
        else {
            newitem["quantity"] = 1
            items.push(newitem);
        }
        const newCart = {
            username: username,
            items: items
        }
        await axios.put(`${apiUrl}/carts/${cartid}`, newCart);
        return {
            status: "success"
        }
    } catch (err) {
        console.log(err);
        return {
            status: "failed to add item to cart"
        }
    }
}


async function removeCartItem(username, item) {
    try {
        const Cart = await FindorCreateCart(username);
        const cartitems = Cart.items;
        const cartid = Cart._id;
        const find = cartitems.findIndex((product) => product.title === item.title)
        if (find >= 0) {
            cartitems[find].quantity -= 1
            if (cartitems[find].quantity === 0) {
                cartitems.splice(find, 1)
            }
        }
        const newCart = {
            username: username,
            items: cartitems
        }
        await axios.put(`${apiUrl}/carts/${cartid}`, newCart);
        return {
            status: "success"
        }
    } catch (err) {
        console.log(err);
        return {
            status: "failed"
        }
    }
}


export { FindorCreateCart, addItemToCart, removeCartItem };