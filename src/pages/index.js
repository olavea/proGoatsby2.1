import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby'

import zero from '../images/forside_english_01.png'

import gangster from '../images/neste_side_Kris_norsk_text.png'
import SEO from '../components/seo'

const nextPage = '/01_english'

const IndexPage = () => (
  <Layout>
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
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <img
      style={{
        width: '1333px',
      }}
      src={zero}
      alt="Geff zero"
    />
  </Layout>
)

export default IndexPage
