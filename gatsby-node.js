// const isOnline = require(`is-onLine`)


// exports.sourceNodes = async ({ actions, getNodes }) => {
//   const { touchNode } = actions

//   const online = await isOnline()

//   // If the user knows they are offline, serve them cached result
//   // For prod builds though always fail if we can't get the latest data
//   if (
//     !online &&
//     process.env.GATSBY_CONTENTFUL_OFFLINE === `true` &&
//     process.env.NODE_ENV !== `production`
//   ) {
//     getNodes()
//       .filter(n => n.internal.owner === `gatsby-source-contentful`)
//       .forEach(n => touchNode({ nodeId: n.id }))

//     console.log(`Using Contentful Offline cache ⚠️`)
//     console.log(
//       `Cache may be invalidated if you edit package.json, gatsby-node.js or gatsby-config.js files`
//     )

//     return
//   }
// }

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
