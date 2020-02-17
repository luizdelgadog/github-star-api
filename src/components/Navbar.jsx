import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../worcLogo.jpg';

export default class Navbar extends Component {
  render () {
      return (
          <NavWrapper className="navbar">
            <img src={logo} className="App logo" alt="logo" style={{height: '100%', width: 'auto'}}></img>
              GitHub Api Search Tool
          </NavWrapper>
        )};
}


const NavWrapper = styled.nav`
height: 100px;
width: auto;
font-family: "Sans-serif";
font-size: 1.6em;
font-weight: bold;
color: white;
background: rgb(41, 146, 192);

display: flex;
justify-content: center;
align-items: center;
`