// Modules Import
import React, { Component } from 'react';
import styled from "styled-components"
import { Router, Route, Link, Redirect } from "react-router-dom";
// API
import { getPlayerData } from "../../API/OverwatchAPI"
// Components
import Header from "../Header/Header"

const UserEntryContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center; 
  align-content: center;
  width: 100vw;
  height: 100vh;
`
const UserEntryForm = styled.div`
  flex: 1;
  padding: 15px;
  margin-top: 5vh;  
  background-color:	#43484c;
  flex-direction: column;
  justify-content: center; 
  align-content: center;
  align-self: center;
  width: 50vw;
  height: 30vh;
  margin: auto;
  border-radius: 15px;
`
const InputContainer = styled.div`
  margin: auto;
`
const InputLabel = styled.p`
  margin: 5px;
  color: white;
`
const UserEntryFormInput = styled.input`
  margin: auto;
  width: 100%;
  margin: 0 0 3vh;
  height: 30px;
  border-radius: 15px;
`
const UserEntryFormButton = styled.button`
  background-color: #f99e1a;
  width: 50vw;
  height: 4vh;
  border-radius: 15px;
  color: white;
`
const ErrorText = styled.h4`
  color: red;
`

const UserInfoSection = styled.div``

class UserEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      tag: "",
      error: false,
      errorMessage: "",
      redirect: false,
    };
  }

  handleChangeUsername = (event)  => {
    this.setState({ username: event.target.value });
  }

  handleChangeTag = (event) => {
    this.setState({ tag: event.target.value });
  }

  handleClick = (event) => {
    event.preventDefault();
    if(this.state.username === "" || this.state.tag === "") {
      this.setState({ error: true, errorMessage: "Form cannot be left empty." })
      return
    }
    this.props.history.push({
      pathname: '/data',
      state: { username: this.state.username, tag: this.state.tag }
    })
  }

  render() {
    return (
      <UserEntryContainer>
        <Header />
        <UserEntryForm>
            <InputLabel>{"Username:"}</InputLabel>
            <UserEntryFormInput value={this.state.username} onChange={(e) => this.handleChangeUsername(e)}/>
            <InputLabel>{"Tag:"}</InputLabel>
            <UserEntryFormInput value={this.state.tag} onChange={(e) => this.handleChangeTag(e)} />
            <UserEntryFormButton onClick={this.handleClick}>{"Search"}</UserEntryFormButton>
            {this.state.error ? <ErrorText>{`Error: ${this.state.errorMessage}`}</ErrorText> : null }
        </UserEntryForm>
      </UserEntryContainer>
    );
  }
}

export default UserEntry;