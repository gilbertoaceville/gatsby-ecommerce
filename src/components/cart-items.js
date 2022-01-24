import { FaTrash } from "@react-icons/all-files/fa/FaTrash"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  gap: 8px;
  background: #fff;
  border-radius: 2px;
  place-items: center;
  margin-bottom: 8px;

  .gatsby-image-wrapper {
    height: 50px !important;
    width: 100px !important;
  }

  img {
    height: 100%;
    width: 100%;
  }

  .cartItem__name p{
    text-decoration: none;
    color: #171717;
    margin-bottom: 0;
    text-align: center;
  }

  .cartItem__name:hover {
    color: #dd219e;
  }

  .cartitem__price {
    margin: 0;
  }

  .cartItem__select {
    padding: 10px 17px;
  }

  .cartItem__deleteBtn {
    padding: 10px 17px;
    color: red;
    background: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  .cartItem__deleteBtn:hover,
  .carItem__deleteBtn:active,
  .carItem__deleteBtn:focus {
    background: #171717;
    transform: scale(1.2);
  }

  @media (max-width: 700px) {
    .cartItem__name {
      font-size: 0.8rem;
    }

    .cartItem__select,
    .cartItem__deleteBtn {
      padding: 8px 13px;
    }

    .cartitem__price {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 700px) {
    .cartItem__name {
      font-size: 0.6rem;
    }

    .cartItem__select,
    .cartItem__deleteBtn {
      padding: 5px 8px;
    }

    .cartitem__price {
      font-size: 0.6rem;
    }

    .gatsby-image-wrapper {
      height: 80px !important;
      width: 100px !important;
    }
  }
`

const CartItems = ({ removeHandler, qtyChangeHandler, item }) => {
  // const [qty, setQty] = useState("")
  const { id, name, price, countInStock, image, qty } = item
  const slug = slugify(id, { lower: true })
  const pathToImage = getImage(image)
  return (
    <Container>
      <GatsbyImage
        image={pathToImage}
        alt={name}
        layout="constrained"
        placeholder="blurred"
        className="cartitem__image"
      />
      <Link to={`/${slug}`} className="cartItem__name">
        <p>{name}</p>
      </Link>
      <p className="cartitem__price">${price}</p>
      <select
        value={qty}
        onChange={e => qtyChangeHandler(item, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(countInStock).keys()].map(x => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button onClick={removeHandler} className="cartItem__deleteBtn">
        <FaTrash />
      </button>
    </Container>
  )
}

export default CartItems
