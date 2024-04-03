import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants";

const initialState = {
    cartData: []
}

export default function cartItem(state = initialState.cartData, action) {
    console.log("Reducer ", action);
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                { cartData: action.data }
            ]
        case REMOVE_FROM_CART:
            state.pop()
            return [
                ...state,
            ]
        default:
            return state
    }

}