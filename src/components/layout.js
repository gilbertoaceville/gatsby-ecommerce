/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import "../assets/css/main.css"
import NavBar from "./navbar"
import Footer from "./footer"
import SideDrawer from "./side-drawer"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulCommerce(sort: { fields: name, order: ASC }) {
      nodes {
        name
        price
        description {
          description
        }
        countInStock
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        id
      }
    }
  }
`
export const DataContext = React.createContext(null)
const Layout = ({ children }) => {
  const [toggleBackdrop, setToggleBackdrop] = React.useReducer(
    state => !state,
    false
  )
  const { allContentfulCommerce } = useStaticQuery(query)

  const data = allContentfulCommerce.nodes
  return (
    <React.Fragment>
      <DataContext.Provider value={{products: data}}>
        <NavBar
          toggleBackdrop={toggleBackdrop}
          setToggleBackdrop={setToggleBackdrop}
        />
        <SideDrawer click={setToggleBackdrop} show={toggleBackdrop} />
        {children}
        <Footer />
      </DataContext.Provider>
    </React.Fragment>
  )
}

export default Layout
