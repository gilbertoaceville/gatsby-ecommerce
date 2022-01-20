import * as actionTypes from "../constants/cart-constants"

const INITIAL_STATE = {
  cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload

      //   check if item exists
      const itemExists =
        Array.isArray(state.cartItems) &&
        state.cartItems?.find(x => x.id === item.id)

      if (itemExists) {
        return {
          ...state,
          cartItems:
            Array.isArray(state.cartItems) &&
            state.cartItems?.map(x => (x.id === itemExists.id ? item : x)),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems:
          Array.isArray(state.cartItems) &&
          state.cartItems?.filter(v => v.id !== action.payload),
      }

    case actionTypes.CLEAR_CART:
      return {
        cartItems: [],
      }
    default:
      return state
  }
}
