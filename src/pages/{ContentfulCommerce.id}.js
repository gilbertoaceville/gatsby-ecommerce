import { navigate } from "@reach/router"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import Layout from "../components/layout"
import { addToCart } from "../state/actions/cart-actions"

const Container = styled.article`
  max-width: 1300px;
  margin: 1rem auto;
  display: flex;
  height: 100vh;

  .productscreen__left {
    display: flex;
    flex: 0.8;
  }

  .left__image {
    margin: 1rem;
    flex: 0.6;
  }

  .left__info {
    margin: 1rem;
    flex: 0.4;
    background: #fff;
    height: fit-content;
    font-size: 0.9rem;
  }

  .left__name {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .left__info > p,
  .right__info > p {
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .left__info > p:last-child,
  .right__info > p:last-child {
    border: none;
  }

  .productscreen__right {
    flex: 0.2;
  }

  .right__info {
    width: 250px;
    margin: 1rem;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  }

  .right__info p {
    padding: 1rem;
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .right__info p > button {
    grid-column: 1/-1;
    width: 100%;
    padding: 10px 16px;
    background: #171717;
    color: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
    border-radius: 5px;
  }

  .right__info select {
    padding: 10px 16px;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    .productscreen__left {
      flex-direction: column;
      flex: 1;
    }

    .left__image {
      flex: 1;
      display: none;
    }

    .left__info {
      flex: 1;
    }

    .productscreen__right {
      flex: 1;
      padding: 1rem;
    }

    .right__info {
      width: 100%;
      margin: 0;
    }
  }
`

const Product = ({ data }) => {
  const [qty, setQty] = useState(1)
  let dispatch = useDispatch()
  const {
    contentfulCommerce: {
      countInStock,
      image,
      name,
      price,
      description: { description },
    },
  } = data
  const imagePath = getImage(image)

  const addItemToCart = () => {
    dispatch(addToCart(data, qty));
    navigate('/cart')
  }

  return (
    <Layout>
      <Container>
        <div className="productscreen__left">
          <GatsbyImage image={imagePath} alt={name} className="left__image" />
          <div className="left__info">
            <p className="left__name">{name}</p>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
          </div>
        </div>
        <div className="productscreen__right">
          <div className="right__info">
            <p>
              Price:
              <span>${price}</span>
            </p>
            <p>
              Status:
              <span>{countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
            </p>
            <p>
              Qty
              <select value={qty} onChange={e => setQty(e.target.value)}>
                {[...Array(countInStock).keys()].map(x => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </p>
            <p>
              <button onClick={addItemToCart} type="button">
                Add To Cart
              </button>
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query getCommerce($id: String) {
    contentfulCommerce(id: { eq: $id }) {
      name
      price
      countInStock
      image {
        gatsbyImageData(layout: FIXED, placeholder: BLURRED)
      }
      id
      description {
        description
      }
    }
  }
`

export default Product
