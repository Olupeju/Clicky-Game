/* eslint-disable no-undef */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
   // Setting this.state.cards to the cards json array
   state = {
     cards:cards,
     message:"Click an image to begin!",
     topScore:0,
     currentScore:0,
     unselectedCards:Cards
     


  // When the page loads and the component mounts,
  // display starting message
  componentDidMount() {
    
  }
  shuffleArray = array =>{
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  }

  // When a Card gets clicked,
  // increase points and add id of element to array.
  selectCard = (id) => {
    const findCard = this.state.unselectedCards.find(item => item.id===id);
    if (findCard=== undefined){
      this.setState({
        message:"Your guessed is wrong!",
        topScore:(this.state.currentScore > this.state.topScore)? this.state.currentScore:this.state.topScore,
        currentScore:0,
        cards:cards,
        unselectedCards:cards
      });
    }
    else{
      const newCards = this.state.unselectedCards.filter(item => item.id !== id);
      this.setState({
        message:"You guessed right",
        currentScore:this.state.currentScore + 1,
        cards:cards,
        unselectedCards:newCards
      });
    }
    this.shuffleArray(cards);
  };
  render() {
    return(
      <Wrapper>
        <Navpills
           message={this.state.message}
           currentScore={this.state.currentScore}
           topScore=
           />
           <Title/>
           {
             this.state.cards.map(card => (
             <Card
             id ={card.id}
             image={card.image}
             selectCard={this.selectCard}
             currentScore={this.state.currentScore}
             />
             ))

           }
           

      </Wrapper>
    );
  }
  }

 export default APP;