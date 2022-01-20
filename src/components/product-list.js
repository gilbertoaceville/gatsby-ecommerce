import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import styled from "styled-components"
import { DataContext } from "./layout"

const Product = styled.section`
  width: 300px;
  padding: 1rem;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;
  ${'' /* z-index: -2; */}

  .product-img-container {
    width: 100%;
    height: 170px;
    border-radius: 8px;
  }

  .product__info > p {
    margin-bottom: 8px;
  }

  .info__price {
    font-weight: bold;
  }

  .info__name {
    font-size: 1rem;
    overflow: hidden;
  }

  .info__description {
    font-size: 0.8rem;
  }

  .info__button {
    display: block;
    text-decoration: none;
    text-align: center;
    color: #171717;
    width: 100%;
    padding: 8px 16px;
    background-color: #f4f4f4;
    border: 1px solid #171717;
    font-size: 1rem;
  }

  .info__button:hover {
    background: #171717;
    color: #f4f4f4;
  }

  @media (max-width: 1232px) {
    width: 360px;
  }

  @media (max-width: 1115px) {
    width: 330px;
  }

  @media (max-width: 1028px) {
    width: 300px;
  }

  @media (max-width: 950px) {
    width: 400px;
  }

  @media (max-width: 830px) {
    width: 330px;
  }

  @media (max-width: 700px) {
    width: 290px;
  }

  @media (max-width: 630px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 300px;
  }
`

const ProductList = () => {
  const { products } = useContext(DataContext)

  return (
    <>
      {products.map(items => {
        const {
          id,
          name,
          price,
          description: { description },
          image,
        } = items
        const imageData = getImage(image)
        return (
          <Product key={id}>
            <GatsbyImage
              image={imageData}
              alt={name}
              className="product-img-container"
            />
            <div className="product__info">
              <p className="info__name">{name}</p>

              <p className="info__description">
                {description.substring(0, 100)}...
              </p>

              <p className="info__price">${price}</p>

              <Link to={`/${id}`} className="info__button">
                View
              </Link>
            </div>
          </Product>
        )
      })}
    </>
  )
}

export default ProductList
