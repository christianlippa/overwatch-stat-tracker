import React, { Component } from 'react';
import styled from "styled-components"

const OverwatchLogo = styled.img`
  display: block;
  margin: 0 auto;
  height: auto;
  width: 25%;
  margin-bottom: 5vh;
`
const LogoContainer = styled.div`
  margin: auto;
`

export default class Header extends Component {
  render() {
    return <OverwatchLogo src="./overwatch-logo.png" alt="overwatch-logo" /> 
  }
}