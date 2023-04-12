import React from "react";
import Hero from "../Hero";
import CardItem from "../CardItem";
import Roulette from "../Images/IMG_0569.JPG";
import Shoe from "../Images/IMG_0644.JPG";
import Terms from "../Images/Terms.jpg";
import ContactUs from "../Images/ContactUs.jpg";
import "../Cards.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='cards'>
        <h1>See What We Have to Offer!</h1>
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
            path='/table-accessories'
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
      <Footer />
    </>
  );
}

export default Home;
