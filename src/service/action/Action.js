import { ADD_TO_CART } from "../Constants";
import { REMOVE_FROM_CART } from "../Constants";

export function addToCart(data) {
    console.log("Action Add cart data", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export function removeFromCart() {
    console.log("Action remove Cart");
    return {
        type: REMOVE_FROM_CART,
    }
}