import React from "react";
import CardItem from "./CardItem";
import Roulette from "./Images/IMG_0569.JPG";
import Shoe from "./Images/IMG_0644.JPG";
import Terms from "./Images/Terms.jpg";
import ContactUs from "./Images/ContactUs.jpg";
import "./Cards.css";

function HomeCards() {
  return (
    <div className='cards'>
      <h1>See What We Have to Offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Roulette}
              text='Look for Items by games!'
              label='Games'
              path='/games'
            />
            <CardItem
              src={Shoe}
              text='Look for a specific Item!'
              label='Table Accessories'
              path='/table-Accessories'
            />
            <CardItem
              src={ContactUs}
              text='Let us know any questions you have!'
              label='Contact us'
              path='/contact'
            />
            <CardItem
              src={Terms}
              text='Check our terms and conditions for Freight, Sales, and Website use'
              label='Terms and Conditions'
              path='/terms'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeCards;
