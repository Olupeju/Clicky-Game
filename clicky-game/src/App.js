/* eslint-disable no-undef */
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Navpills from "./components/Navpills"
import card from "./card.json";

class App extends Component {
   // Setting this.state.cards to the cards json array
   state = {
     card, 
     message:"Click an image to begin!",
     topScore:0,
     currentScore:0,
     unselectedCards: card
   }


  // When the page loads and the component mounts,
  // display starting message
  // componentDidMount() {

    
  // }
  shuffleArray = array =>{
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // When a Card gets clicked,
  // increase points and add id of element to array.
  selectCard = (id) => {
    let findCard = this.state.unselectedCards.find(item => item.id === id);
    if (findCard === undefined){
      this.setState({
        message:"Your guessed is wrong!",
        topScore:(this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        // topScore: 0,
        currentScore:0,
        card:card,
        unselectedCards:card
      });
    }
    else{
      const newCards = this.state.unselectedCards.filter(item => item.id !== id);
      this.setState({
        message:"You guessed right",
        currentScore:this.state.currentScore + 1,
        card:card,
        unselectedCards:newCards
      });
    }
    this.shuffleArray(card);
  };
  render() {
    return(
      <Wrapper>
        <Navpills
           message={this.state.message}
           currentScore={this.state.currentScore}
           topScore={this.state.topScore}
        />
           <Title/>
           {
             this.state.card.map(card => (
             <Card
             key = {card.id}
             id ={card.id}
             name = {card.name}
             image={card.image}
             selectCard={this.selectCard}
             currentScore={this.state.currentScore}
             selectCard= {this.selectCard}
             />
             ))
           }

        </Wrapper>
    );
  }
  }

 export default App;