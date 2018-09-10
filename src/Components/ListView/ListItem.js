// Modules Import
import React, { Component } from 'react';
import styled from "styled-components"


const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px auto;
  padding: 15px;
  border-radius: 15px;
  width: 90vw;
  height: 10vh;
  background-color: #43484c;
`

const ListItemTextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`
const ListItemTextRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
`
const ListItemImageSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 50%;
`
const HeroNameHeader = styled.h2`
  margin: 5px
  color: white;
`
const HeroNameText = styled.p`
  margin: 10px 5px;
  color: white;
`
const HeroImage = styled.img`
  width: 64px;
  height: 64px;
`

class ListView extends Component {
  constructor(props){
    super(props)
    this.state = {
      heroName: "",
      heroIcon: "",
    };
  }

  capitalizeHeroName = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  render() {
    const { heroName = "Lucio", timePlayed = "", heroIcon = "", onClick, } = this.props;
    return (
      <ListItemContainer onClick={onClick}>
        <ListItemTextSection>
          <ListItemTextRow>
            <HeroNameHeader>{"Hero:"}</HeroNameHeader>
            <HeroNameText>{this.capitalizeHeroName(heroName)}</HeroNameText>
          </ListItemTextRow>
          <ListItemTextRow>
            <HeroNameHeader>{"Time Played:"}</HeroNameHeader>
            <HeroNameText>{timePlayed}</HeroNameText>
          </ListItemTextRow>
        </ListItemTextSection>
        <ListItemImageSection>
          <HeroImage src="./white_overwatch_logo.png"  />
        </ListItemImageSection>
      </ListItemContainer>
    );
  }
}

export default ListView;