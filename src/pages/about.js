import React from 'react'
import Layout from '../components/layout'
import five from '../images/5_english.png'

const About = () => (
  <Layout>
    <div>
      <img
        style={{
          width: '1333px',
        }}
        src={five}
        alt="Geff Logo"
      />

      <p>bla bla</p>
    </div>
  </Layout>
)

export default About

// const About = () => <Img fluid={data.file.childImageSharp.fluid} />
