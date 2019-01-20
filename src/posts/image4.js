// import React from 'react'
// import PropTypes from 'prop-types'
// import Img from 'gatsby-image'
// import Helmet from 'react-helmet'
// import styled from 'styled-components'
// import { StaticQuery, graphql } from 'gatsby'

// import Header from '../components/header'

// import './layout.css'

// const MainLayout = styled.main`
//   max-width: 90%;
//   margin: 0 auto;
// `

// const Layyout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitQuery {
//         file(relativePath: { regex: "/02_english/" }) {
//           childImageSharp {
//             fluid(maxWidth: 10000) {
//               ...GatsbyImageSharpFluid_tracedSVG
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
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
//         <Img fluid={data.file.childImageSharp.fluid} />
//         <MainLayout>
//           <div>{children}</div>
//         </MainLayout>
//       </>
//     )}
//   />
// )

// Layyout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// Layyout.defaultProps = {
//   location: {},
// }

// export default Layyout
