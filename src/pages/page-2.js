import React from 'react'
import { Link } from 'gatsby'

import Layyout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layyout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layyout>
)

export default SecondPage

// {
//   file(relativePath: {
//     regex: "/02_english/"
//   }) {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
