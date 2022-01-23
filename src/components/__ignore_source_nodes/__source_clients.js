// import { graphql } from "gatsby"
// import React from "react"

// const Content = ({ data, pageContext }) => {

//   const items = data.allProducts.nodes[0]
//   const {
//     name,
//     price,
//     description,
//     currency,
//   } = items
//   return <div>
//     <h1>{name}</h1>
//     <p>{description}</p>
//     <p>{price}</p>
//     <p>{currency}</p>
//   </div>
// }
// export const query = graphql`
// query GetProducts($id: String) {
//   allProducts(filter: {id: {eq: $id}}) {
//     nodes {
//       bestseller
//       category
//       currency
//       description
//       name
//       price
//       id
//     }
//   }
// }
// `
// export default Content
