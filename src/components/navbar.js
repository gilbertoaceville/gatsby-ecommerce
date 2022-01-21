import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart"
import { IoCube } from "@react-icons/all-files/io5/IoCube"
import { Link } from "gatsby"
import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { cartCount } from "../utilities/function"
import Backdrop from "./backdrop"

const Container = styled.nav`
  width: 100%;
  height: 90px;
  background-color: #171717;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 50;

  .logo header h1 {
    display: flex;
    color: #f4f4f4;
    font-size: 25px;
    margin-bottom: 0;
    align-items: center;
  }

  .logo header h1 p {
    padding: 0 0.2em;
    margin: 0;
  }

  .navbar__links {
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navbar__links > li {
    padding-left: 1.5rem;
    margin: 0;
  }

  .navbar__links > li > a {
    text-decoration: none;
    color: #f4f4f4;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .navbar__links > li > a > span {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }

  .cart__link {
    background: #333;
    padding: 10px;
    border-radius: 8px;
  }

  .cart__link:hover {
    background: #dd219e;
    color: #f4f4f4;
  }

  .cartlogo__badge {
    width: 30px;
    height: 30px;
    background-color: #f4f4f4;
    border-radius: 50%;
    margin-left: 8px;
    color: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  .hamburger__menu {
    display: none;
    width: 30px;
    height: 30px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .hamburger__menu:hover > div {
    background: #dd219e;
  }

  .hamburger__menu > div {
    width: 100%;
    height: 3px;
    background: #f4f4f4;
  }

  @media (max-width: 960px) {
    .navbar__links {
      display: none;
    }

    .hamburger__menu {
      display: flex;
    }
  }

  @media (max-width: 500px) {
    .navbar__logo h2 {
      font-size: 1rem;
    }
  }
`

const NavBar = ({ toggleBackdrop, setToggleBackdrop }) => {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  return (
    <Container>
      <Backdrop click={setToggleBackdrop} show={toggleBackdrop} />
      <Link to="/" className="logo">
        <header>
          <h1>
            <IoCube color="#4640b3" size={45} />
            <p>bluecube</p>
          </h1>
        </header>
      </Link>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <FaShoppingCart />
            <span>
              Cart <span className="cartlogo__badge">{cartCount(cartItems)}</span>
            </span>
          </Link>
        </li>
        {/* <li>
          <Link to="/shop">Shop</Link>
        </li> */}
      </ul>

      <div
        className="hamburger__menu"
        role="button"
        tabIndex={0}
        onClick={setToggleBackdrop}
        onKeyDown={setToggleBackdrop}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  )
}

export default NavBar
