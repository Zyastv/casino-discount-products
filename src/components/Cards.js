import React from "react";
import CardItem from "./CardItem";
import Roulette from "./Images/IMG_0569.JPG";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our different Table Acceccories!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Roulette}
              text='LOREM IPSUM'
              label='Games'
              path='/games'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
