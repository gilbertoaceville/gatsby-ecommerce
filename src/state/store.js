import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { cartReducer } from "./reducer/cart-reducer"

const isBrowser = typeof window !== "undefined"
const reducer = combineReducers({
  cart: cartReducer,
})

const middleware = [thunk]

const getCartItemsInStorage =
  isBrowser && window.localStorage.getItem("cart")
    ? isBrowser && JSON.parse(window.localStorage.getItem("cart"))
    : []

const INITIAL_STATE = {
  cart: {
    cartItems: getCartItemsInStorage,
  },
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
