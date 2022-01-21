import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import ProductList from "../components/product-list"

const Container = styled.main`
  margin-bottom: 4em;

  .homescreen__title {
    font-size: 1.5rem;
    color: #171717;
    margin-bottom: 1rem;
    margin-left: 8px;
  }

  .homescreen__products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* margin-bottom: 2em; */
  }

  @media (max-width: 1232px) {
    .homescreen__products {
      grid-template-columns: repeat(3, auto);
    }
  }

  @media (max-width: 950px) {
    .homescreen__products {
      grid-template-columns: repeat(2, auto);
    }
  }

  @media (max-width: 630px) {

    margin-bottom: 2em;
    
    .homescreen__products {
      grid-template-columns: 1fr;
    }
  }
`

const Home = () => {
  return (
    <Layout>
      <Container>
        <h2 className="homescreen__title">{null}</h2>
        <div className="homescreen__products">
          <ProductList />
        </div>
      </Container>
    </Layout>
  )
}

export default Home
