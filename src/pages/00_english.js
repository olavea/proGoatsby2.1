import React from 'react'
import Layout from '../components/layout'
import zero from '../images/forside_english_01.png'
// import Listing from '../components/Listing'
import { Link } from 'gatsby'

import gangster from '../images/neste_side_Kris_norsk_text.png'

const nextPage = '/01_english'

const About = () => (
  <Layout>
    <div>
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
  </Layout>
)

export default About
