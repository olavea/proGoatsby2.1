import React from 'react'

import Layout from '../components/layout'
import Listing from '../components/listing'
import Image from '../components/image'
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

    <Listing />
  </Layout>
)

export default IndexPage
