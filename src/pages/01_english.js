import React from 'react'
// import Layout from '../components/layout'
// import one from '../images/01_english.png'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'

import gangster from '../images/neste_side_Kris_norsk_text.png'

const nextPage = '/02_english'

const ImageOne = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/01_english/" }) {
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
        <Link to="/00_english"> Previous Page.../ </Link>
      </>
    )}
  />
)
export default ImageOne

// const About = () => (
//   <Layout>
//     <div>
//       <img
//         style={{
//           width: '1333px',
//         }}
//         src={one}
//         alt="Geff one"
//       />

//       <p>bla bla</p>
//     </div>
//   </Layout>
// )

// export default About

// delete from line 27
// <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             {
//               name: 'description',
//               content: data.site.siteMetadata.description,
//             },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} />

//         delete from line xxcx
