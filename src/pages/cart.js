import { Link } from "gatsby"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import CartItems from "../components/cart-items"
import {
  addToCart,
  clearCart,
  removeItemFromCart
} from "../state/actions/cart-actions"
import { cartCount } from "../utilities/function"

const Container = styled.section`
  .cartscreen {
    display: flex;
    max-width: 1300px;
    margin: 2rem auto;
  }

  .cartscreen h2 {
    margin-bottom: 1rem;
  }

  .cartscreen__left {
    flex: 0.7;
    margin-right: 1rem;
    background: transparent;
    padding: 1rem;
  }

  .cartscreen__right {
    flex: 0.3;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    height: fit-content;
  }

  .cartscreen__right div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }

  .cartscreen__info p {
    padding: 8px;
  }

  .cartscreen__info p:first-child {
    font-weight: bold;
  }

  .cartscreen__right div:last-child {
    border: none;
  }

  .cartscreen__right div button {
    padding: 10px 17px;
    width: 100%;
    background: #171717;
    color: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
  }

  .cartscreen__right div button:hover {
    opacity: 0.9;
  }

  @media (max-width: 1320px) {
    .cartscreen {
      max-width: 900px;
    }
  }

  @media (max-width: 960px) {
    .cartscreen {
      max-width: 800px;
    }
  }

  @media (max-width: 960px) {
    .cartscreen {
      flex-direction: column;
    }

    .cartscreen__right {
      margin: 1rem;
    }
  }
`

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  // const item = data.contentfulCommerce
  const qtyChangeHandler = (item = {}, qty = 1) => {
    dispatch(addToCart(item, qty))
  }

  //remove item from cart
  const removeFromCartHandler = id => {
    dispatch(removeItemFromCart(id))
  }

  //destroy cart
  const clearItemsFromCart = () => {
    dispatch(clearCart())
  }

  const cartSubTotal = () => {
    return cartItems
      ?.reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2)
  }

  return (
    <Container>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map(item => {
              const { id } = item
              console.log(item)
              return (
                <CartItems
                  key={id}
                  item={item}
                  removeHandler={() => removeFromCartHandler(id)}
                  qtyChangeHandler={qtyChangeHandler}
                />
              )
            })
          )}
          <div>
            {cartItems.length > 0 && (
              <button onClick={clearItemsFromCart} type="button">
                Clear cart
              </button>
            )}
          </div>
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({cartCount(cartItems)}) items</p>
            <p>${cartSubTotal()}</p>
          </div>
          <div>
            <button type="button">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Cart
