import React from "react";
import { Button } from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <div className='hero-container'>
      <h1>CASINO DISCOUNT PRODUCTS</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          TAKE A LOOK
        </Button>
      </div>
    </div>
  );
}

export default Hero;
