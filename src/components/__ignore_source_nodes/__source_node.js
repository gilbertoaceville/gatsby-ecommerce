// const path = require("path")
// const fetch = require("node-fetch")
// const NODE_TYPE = "Products"

// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const { createNode } = actions

//   const response = await fetch(
//     "https://bejamas-commerce-heroku.herokuapp.com/api/products"
//   )
//   const results = await response.json()

//   results.forEach((node, index) => {
//     createNode({
//       ...node,
//       id: createNodeId(`${NODE_TYPE}-${node._id}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: `${NODE_TYPE}`,
//         content: JSON.stringify(node),
//         contentDigest: createContentDigest(node),
//       },
//     })
//   })
// }

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   //making use of the products created from sourceNodes above
//   const results = await graphql(`
//     query GetProducts {
//       allProducts {
//         nodes {
//           id
//         }
//       }
//     }
//   `)

//   // Handle errors
//   if (results.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   results.data.allProducts.nodes.forEach(({ id }) => {
//     createPage({
//       path: `/content/${id}`,
//       component: path.resolve(`src/templates/content-id.js`),
//       context: {
//         id: id,
//       },
//     })
//   })
// }
