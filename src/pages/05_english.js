import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'

import gangster from '../images/neste_side_Kris_norsk_text.png'

const nextPage = '/06_english'

const ImageOne = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTit5Query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/05_english/" }) {
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
        <Link
          to={nextPage}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            style={{
              width: '800px',
              marginBottom: `0rem`,
            }}
            src={gangster}
            alt="Gatsby astronaut"
          />
        </Link>
        <Img fluid={data.file.childImageSharp.fluid} />

        <div>{children}</div>
        <Link to="/04_english"> Previous Page.../ </Link>
      </>
    )}
  />
)
export default ImageOne
