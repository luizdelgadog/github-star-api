import React, { Component } from 'react';
import styled from 'styled-components';

export default class Navbar extends Component {
  render () {
      return (
          <NavWrapper className="navbar">
              GitHub Api Search Tool
          </NavWrapper>
        )};
}

const NavWrapper = styled.nav`
height: 100px;
font-family: "Sans-serif";
font-size: 1.6em;
font-weight: bold;
color: white;
background: rgb(26, 140, 255);

display: flex;
justify-content: center;
align-items: center;
`