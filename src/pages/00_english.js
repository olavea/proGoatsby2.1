import React from 'react'
import Layout from '../components/layout'
import zero from '../images/forside_english_01.png'
import Listing from '../components/Listing'
import { Link } from 'gatsby'

const About = () => (
  <Layout>
    <div>
      <img
        style={{
          width: '333px',
        }}
        src={zero}
        alt="Geff zero"
      />
      <Link to="/"> Previous Page </Link>
      <Link to="/1_english"> Next Page</Link>

      <Listing />
    </div>
  </Layout>
)

export default About
