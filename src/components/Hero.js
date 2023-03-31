import React from "react";
import { Button } from "./Button";
import "./Hero.css";
import fadeIn from "react-animations/lib/fade-in";

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
          LOOK AT OUR PRODUCTS
        </Button>
      </div>
    </div>
  );
}

export default Hero;
