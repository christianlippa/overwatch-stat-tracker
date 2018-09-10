import React, { Component } from 'react';
import styled from "styled-components"

const UserHeaderContainer = styled.div`
  display: flex;
  width: 90vw;
  height: 30vh;
  padding: 15px;
  background-color: #43484c;
  margin: auto;
  border-radius: 15px;
`
const UserHeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
const UserHeaderRegionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-end;
`

const UserHeaderImageContainer = styled.div`
  display: flex;
  width: 50%;
  height: 80%;
`

const UserHeaderText = styled.h2`
  color: white;
  margin: 5px;
`
const UserStatText = styled.p`
  color: white;
  margin: 0 5px 15px 5px;
`
const UserRegionText = styled.p`
  color: white;
  margin: 0 5px 5px 5px;
`
const UserImage = styled.img`
  border-radius: 15px;
  width: 30%;
  height: auto;
  margin: auto;
  margin-top: 5px;
  margin-right: 5px;
`

class UserHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: "",
    };
  };
  static defaultState = {};
  static defaultProps = {};

  componentDidMount() {
    const newApiString = "https://ow-api.com/v1/stats/pc/us/cats-11481/heroes/soldier76,dVa"
    fetch(newApiString)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({ data })
    })
    .catch(err => console.error(err.toString()));
  }

  parseUserHeaderData = () => {
    console.log(this.state.data)
  }

  render() {
    const { icon = "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/season-2/rank-7.png", username = "Kiid", rating = "Grandmaster", gamesWon = "1249", region = "North America" } = this.props;
    return (
      <UserHeaderContainer>
        <UserHeaderTextContainer>
          <UserHeaderText>{"Username:"}</UserHeaderText>
          <UserStatText>{username}</UserStatText> 
          <UserHeaderText>{"Rating:"}</UserHeaderText>
          <UserStatText>{rating}</UserStatText>
          <UserHeaderText>{"Games Won:"}</UserHeaderText>
          <UserStatText>{gamesWon}</UserStatText>
        </UserHeaderTextContainer>
        <UserHeaderRegionContainer>
          <UserHeaderImageContainer>
            <UserImage src={icon}/>
          </UserHeaderImageContainer>
          <UserHeaderText>{"Region:"}</UserHeaderText>
          <UserRegionText>{region}</UserRegionText>
        </UserHeaderRegionContainer>
      </UserHeaderContainer>
    )
  }
}

export default UserHeader;