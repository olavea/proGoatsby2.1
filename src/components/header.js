import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/geff-icon.jpg'

const HeaderWrapper = styled.div`
  background: #ffa500;
  margin-bottom: 0.33rem;
  img {
    margin-bottom: 0;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.33rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            style={{
              width: '33px',
            }}
            src={logo}
            alt="Geff Logo"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header

//ffa500 orange
// #ffce00 yellow
