import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const ImageOne = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTit13Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/13_english/" }) {
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
        <Link to="/12_english"> 👈😼 Previous Page / </Link>
        <Link to="/14_english"> Next Page 😺👉</Link>
      </>
    )}
  />
)
export default ImageOne
