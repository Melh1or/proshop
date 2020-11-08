import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS
} from "../constants/cartConstants";

export const cartReducers = (
  state = { cartItems: [], shippingAddress: {} },
  { type, payload }
) => {
  switch (type) {
    case CART_ADD_ITEM:
      const existItem = state.cartItems.find(item => item.product === payload.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item => item.product === existItem.product
            ? payload
            : item
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload]
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.product !== payload)
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: payload
      };
    default:
      return state;
  }
};
