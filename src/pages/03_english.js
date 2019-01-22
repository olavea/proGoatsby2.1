import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'

const ImageOne = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTit3Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/03_english/" }) {
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
        <Link to="/02_english"> Previous Page.../ </Link>
        <Link to="/04_english"> / Or go to the Next Page </Link>
      </>
    )}
  />
)
export default ImageOne
