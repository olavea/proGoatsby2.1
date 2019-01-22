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
      <Link to="/"> Previous Page.../ </Link>
      <Link to="/01_english"> / Or go to the Next Page </Link>
    </div>
    <Listing />
  </Layout>
)

export default About
