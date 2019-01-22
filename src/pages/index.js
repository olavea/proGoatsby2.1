import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby'

import zero from '../images/forside_english_01.png'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <img
      style={{
        width: '1333px',
      }}
      src={zero}
      alt="Geff zero"
    />
    <Link to="/00_english"> Go to the Next Page </Link>
  </Layout>
)

export default IndexPage
