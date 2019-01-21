import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'

const ImageOne = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTit8Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/8_english/" }) {
          childImageSharp {
            fluid(maxWidth: 10000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Img fluid={data.file.childImageSharp.fluid} />

        <div>{children}</div>
        <Link to="/07_english"> 👈😼 Previous Page / </Link>
        <Link to="/09_english"> Next Page 😺👉</Link>
      </>
    )}
  />
)
export default ImageOne
