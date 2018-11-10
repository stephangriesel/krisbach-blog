import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import logo from '../images/logo.png';

const HeaderWrapper = styled.div`
  background: #000000;
  margin-bottom: 1.45rem;
  text-align: center;
  h1 {
    img {
      height:200px;
    }
  }
`;

const Header = ({ siteTitle }) => (
<HeaderWrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textTransform: 'uppercase',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Kris Bach Logo" />
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
)

export default Header
