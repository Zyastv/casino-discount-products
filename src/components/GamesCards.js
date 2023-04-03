import React from "react";
import CardItem from "./CardItem";
import Roulette from "./Images/IMG_0569.JPG";
import Placeholder from "./Images/CDPHomePage.JPG";
import "./Cards.css";

function GamesCards() {
  return (
    <div className='cards'>
      <h1>Choose which game you're looking for!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src={Placeholder} text='Blackjack' path='/blackjack' />
            <CardItem
              src={Placeholder}
              text='Look for a specific Item!'
              label='Poker'
              path='/poker'
            />
            <CardItem
              src={Placeholder}
              text='Let us know any questions you have!'
              label='Craps'
              path='/craps'
            />
            <CardItem
              src={Placeholder}
              text='Check our terms and conditions for Freight, Sales, and Website use'
              label='Baccarat'
              path='/baccarat'
            />
            <CardItem
              src={Placeholder}
              text='Check our terms and conditions for Freight, Sales, and Website use'
              label='Pai Gow'
              path='/paigow'
            />
            <CardItem
              src={Roulette}
              text='Check our terms and conditions for Freight, Sales, and Website use'
              label='Roulette'
              path='Roulette'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GamesCards;
