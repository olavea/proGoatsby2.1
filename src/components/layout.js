import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Archive from './archive'
import './layout.css'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/4_english/" }) {
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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />

        <MainLayout>
          <div>{children}</div>
          <Archive />
        </MainLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout

// delete from
// const MainLayout = styled.main`
// in line 12 video 16 tutScott
// display: grid;
// grid-template-columns: 4fr 1fr;

// video 7
// query SiteTitleQuery {
//   site {
//     siteMetadata {
//       title
//       description
//     }
//   }
//   allFile {
//     edges {
//       node {
//         name
//       }
//     }
//   }
// }

// video 8

// query BlaBla  {
//   site {
//     siteMetadata {
//       title
//       description
//     }
//   }
//   allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           slug
//         }
//       }
//     }
//   }
// }
