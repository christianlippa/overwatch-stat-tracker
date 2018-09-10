import React, { PureComponent } from 'react';
import styled from "styled-components"

import Header from "../Header/Header"
/*
  In this component I wanted to dynamical render the headings of 
  the stats as well as the data but only got around to doing the 
  data with the 6 hour time limit I gave myself. Since the data headings
  were static in this case anyway it wouldn't add much it would just look 
  much cleaner.
*/

const ListItemDetailContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center; 
  align-content: center;
  width: 100vw;
  height: 100vh;
`

const ListItemDetails = styled.div`
  display: flex;
  width: 90vw;
  height: 30vh;
  padding: 15px;
  background-color: #43484c;
  margin: auto;
  border-radius: 15px;
`
const ListItemDetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`

const ListItemDetailsHeader = styled.h2`
  color: white;
  margin: 2px;
`
const ListItemDetailsText = styled.p`
  color: white;
  margin: 5px;
  margin-top: 10px;
`
const ListItemDetailsTextRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
`

class ListItemDetail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { 
      eliminationsPerLife = 0, 
      gamesWon = 0, 
      multiKillBest = 0,
      objectiveKillsAvg = 0, 
      timePlayed = "",
      weaponAccuracy = 0,
      winPercentage = 0,
    } = this.props.location.state.data
    return (
      <ListItemDetailContainer>
        <Header />
        <ListItemDetails>
          <ListItemDetailsTextContainer>
          <ListItemDetailsTextRow>            
              <ListItemDetailsHeader>{"Elims per Life:"}</ListItemDetailsHeader>
              <ListItemDetailsText>{eliminationsPerLife}</ListItemDetailsText>
            </ListItemDetailsTextRow>
            <ListItemDetailsTextRow>            
              <ListItemDetailsHeader>{"Games Won:"}</ListItemDetailsHeader>
              <ListItemDetailsText>{gamesWon}</ListItemDetailsText>
            </ListItemDetailsTextRow>
            <ListItemDetailsTextRow>            
              <ListItemDetailsHeader>{"Multi-kill Best:"}</ListItemDetailsHeader>
              <ListItemDetailsText>{multiKillBest}</ListItemDetailsText>
            </ListItemDetailsTextRow>
            <ListItemDetailsTextRow>            
              <ListItemDetailsHeader>{"Objective Kills Avg:"}</ListItemDetailsHeader>
              <ListItemDetailsText>{objectiveKillsAvg}</ListItemDetailsText>
            </ListItemDetailsTextRow>
          </ListItemDetailsTextContainer>
          <ListItemDetailsTextContainer>
          <ListItemDetailsTextRow>            
              <ListItemDetailsHeader>{"Time Played:"}</ListItemDetailsHeader>
              <ListItemDetailsText>{timePlayed}</ListItemDetailsText>
            </ListItemDetailsTextRow>
            <ListItemDetailsTextRow>            
              <ListItemDetailsHeader>{"Accuracy:"}</ListItemDetailsHeader>
              <ListItemDetailsText>{weaponAccuracy}</ListItemDetailsText>
            </ListItemDetailsTextRow>
            <ListItemDetailsTextRow>            
              <ListItemDetailsHeader>{"Win Rate:"}</ListItemDetailsHeader>
              <ListItemDetailsText>{winPercentage}</ListItemDetailsText>
            </ListItemDetailsTextRow>
          </ListItemDetailsTextContainer>
        </ListItemDetails>
      </ListItemDetailContainer>
    )
  }
}

export default ListItemDetail;

