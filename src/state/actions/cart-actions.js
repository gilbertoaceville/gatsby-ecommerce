import * as actionTypes from "../constants/cart-constants"

const isBrowser = typeof window !== "undefined"
export const addToCart = (payload, qty) => (dispatch, getState) => {
  const dataToData = payload.contentfulCommerce
    ? payload.contentfulCommerce
    : payload
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: dataToData.id,
      image: dataToData.image,
      name: dataToData.name,
      price: dataToData.price,
      countInStock: dataToData.countInStock,
      qty,
    },
  })

  // //   set items to cart in local storage
  if (isBrowser) {
    window.localStorage.setItem(
      "cart",
      JSON.stringify(getState().cart.cartItems)
    )
  }
}

export const removeItemFromCart = id => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  })

  // reset items to cart in local storage
  if (isBrowser) {
    window.localStorage.setItem(
      "cart",
      JSON.stringify(getState().cart.cartItems)
    )
  }
}

export const clearCart = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.CLEAR_CART,
    payload: [],
  })

  //   set [] to cart in local storage
  if (isBrowser) {
    window.localStorage.setItem(
      "cart",
      JSON.stringify(getState().cart.cartItems)
    )
  }
}
