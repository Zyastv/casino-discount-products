import React from "react";
import CardItem from "../CardItem";
import Apr10 from "../Images/Apr10.JPG";
import Apr30 from "../Images/Apr30.JPG";
import B6C10 from "../Images/B6C10.JPG";
import B6C20 from "../Images/B6C20.JPG";
import B6C30 from "../Images/B6C30.JPG";
import B6PN from "../Images/B6PN.JPG";
import B6PNS from "../Images/B6PNS.JPG";
import "../Cards.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function TableAccessories() {
  return (
    <>
      <Navbar />
      <div className='cards'>
        <h1>Aprons</h1>
        <ul className='cards__items'>
          <CardItem
            src={Apr10}
            label='Apr10'
            text='Dealing Apron'
            path='/apr30'
          />
          <CardItem
            src={Apr30}
            text='Dealing Apron Belt'
            label='Apr30'
            path='/apr30'
          />
        </ul>
        <h1>Big Six Accessories</h1>
        <ul className='cards__items'>
          <CardItem
            src={B6C10}
            label='Apr10'
            text='Dealing Apron'
            path='/apr30'
          />
          <CardItem
            src={B6C20}
            text='Dealing Apron Belt'
            label='Apr30'
            path='/apr30'
          />
          <CardItem
            src={B6C30}
            label='Apr10'
            text='Dealing Apron'
            path='/apr30'
          />
          <CardItem
            src={B6PN}
            text='Dealing Apron Belt'
            label='Apr30'
            path='/apr30'
          />
          <CardItem
            src={B6PNS}
            text='Dealing Apron Belt'
            label='Apr30'
            path='/apr30'
          />
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default TableAccessories;
