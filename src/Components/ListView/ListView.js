// Modules Import
import React, { Component } from 'react';
import styled from "styled-components"
import { Router, Route, Link } from "react-router-dom";
// API
import { getPlayerData } from "../../API/OverwatchAPI"
// Components
import Header from "../Header/Header"
import UserHeader from "../UserHeader/UserHeader"
import ListItem from "./ListItem"


const ListViewContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center; 
  align-content: center;
  width: 100vw;
  height: 100vh;
`

const UserInfoSection = styled.div``

class ListView extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: "",
      tag: "",
      topHeroes: {},
    };
  }

  componentDidMount() {
    const username = this.props.location && this.props.location.state.username
    const tag = this.props.location && this.props.location.state.tag
    const apiString = `https://ow-api.com/v1/stats/pc/us/${username}-${tag}/heroes/lucio,moira,ana`
    fetch(apiString)
    .then(response => response.json())
    .then(data => {
      this.setState(() => ({ 
        topHeroes: data.competitiveStats.topHeroes,
        rating: data.rating,
        icon: data.ratingIcon,
        gamesWon: data.gamesWon,
        username: data.name,
      }))
    })
    .catch(err => {
      console.error(err.toString())
      this.setState({ error: true })
    });
  }

  onPressListItem = hero => {
    const heroData = this.state.topHeroes[hero]
    this.props.history.push({
      pathname: '/hero',
      state: { data: heroData }
    })
  }

  renderListItems = () => {
    const { topHeroes } = this.state;
    const heroKeys = Object.keys(topHeroes)
    return heroKeys.map(hero => {
      return <ListItem heroName={hero} timePlayed={topHeroes[hero].timePlayed} onClick={() => this.onPressListItem(hero)} />
    })
  }

  render() {
    const { rating = "Loading...", icon = "", gamesWon = "Loading...", username = "Loading..." } = this.state
    return (
      <ListViewContainer>
        <Header />
        <UserHeader rating={rating} icon={icon} gamesWon={gamesWon} username={username} />
        {this.renderListItems()}
      </ListViewContainer>
    );
  }
}

export default ListView;