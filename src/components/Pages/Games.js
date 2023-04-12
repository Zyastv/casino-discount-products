import React from "react";
import CardItem from "../CardItem";
import Roulette from "../Images/IMG_0569.JPG";
import Placeholder from "../Images/CDPHomePage.JPG";
import Blackjack from "../Images/Blackjack.jpg";
import Poker from "../Images/Poker.jpg";
import Craps from "../Images/Craps.jpg";
import "../Cards.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Games() {
  return (
    <>
      <Navbar />
      <div className='cards'>
        <h1>Choose which game you're looking for!</h1>
        <ul className='cards__items'>
          <CardItem
            src={Blackjack}
            label='Blackjack'
            text='Dealing Shoes and Accessories'
            path='/games/blackjack'
          />
          <CardItem
            src={Poker}
            text='Poker Bases, Poker Drop Slides, Poker Drink carts and Meal Carts'
            label='Poker'
            path='/games/poker'
          />
          <CardItem
            src={Craps}
            text='Craps Bank Cover, Dice Accessories, and Table Rubber'
            label='Craps'
            path='/games/craps'
          />
          <CardItem
            src={Placeholder}
            text='Baccarat size dealing shoes, Discard cans and Pens'
            label='Baccarat'
            path='/games/baccarat'
          />
          <CardItem
            src={Placeholder}
            text='Cups, Dice, and Tiles'
            label='Pai Gow'
            path='/games/paigow'
          />
          <CardItem
            src={Roulette}
            text='Roulette Indicator racks, Balls, Markers, and Finials'
            label='Roulette'
            path='/games/roulette'
          />
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Games;
