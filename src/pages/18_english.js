import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'

const ImageOne = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTit18Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/18_english/" }) {
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
        <Link to="/17_english"> 👈😼 Previous Page / </Link>
        <Link to="/19_english"> Next Page 😺👉</Link>
      </>
    )}
  />
)
export default ImageOne
