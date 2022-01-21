import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart"
import { Link } from "gatsby"
import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { cartCount } from "../utilities/function"

const Container = styled.section`
  .sidedrawer {
    width: 70%;
    background: #fff;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    transform: translateX(-100%);
    transition: all 0.3s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sidedrawer-hide {
    width: 70%;
    background: #fff;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    transform: translateX(0);
    transition: all 0.3s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sidedrawer.show {
    transform: translateX(0);
  }

  .sidedrawer__links {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .sidedrawer__links > li {
    display: flex;
    align-items: center;
  }

  .sidedrawer__links > li > a:hover {
    background: #333;
    color: #f4f4f4;
  }

  .sidedrawer__links > li > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    padding: 1rem;
    text-decoration: none;
    color: #171717;
    font-size: 1.6rem;
  }

  .sidedrawer__links > li > a > span {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }

  .sidedrawer__cartbadge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #171717;
    border-radius: 50%;
    margin-left: 8px;
    color: #fff;
    font-size: 1rem;
  }

  .sidedrawer__links > li > a:hover .sidedrawer__cartbadge {
    background-color: #fff;
    color: #171717;
  }

  @media (min-width: 960px) {
    .sidedrawer {
      display: none;
    }
  }
`
const SideDrawer = ({ click, show }) => {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  return (
    <Container>
      <div className={show ? "sidedrawer-hide" : "sidedrawer"}>
        <ul
          className="sidedrawer__links"
          role="button"
          // tabIndex={0}
          onClick={click}
          onMouseDown={click}
        >
          <li>
            <Link to="/cart">
              <FaShoppingCart />
              <span>
                Cart{" "}
                <span className="sidedrawer__cartbadge">{cartCount(cartItems)}</span>
              </span>
            </Link>
          </li>
          {/* <li>
            <Link to="/shop">Shop</Link>
          </li> */}
        </ul>
      </div>
    </Container>
  )
}

export default SideDrawer