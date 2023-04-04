import React from "react";
import ProductCardItem2 from "../ProductCardItem2";
import "../ProductCard.css";
import Apr10 from "../Images/Apr10.JPG";
import Apr30 from "../Images/Apr30.JPG";

function TableAccessories() {
  return (
    <>
      <h1 className='title'>Table Accessories</h1>
      <ul className='cards__items'>
        <ProductCardItem2
          title='Aprons'
          src1={Apr10}
          src2={Apr30}
          text='Apr10 and Apr30'
          label1='Apr10'
          label2='Apr30'
          path1=''
          path2=''
        />
      </ul>
    </>
  );
}

export default TableAccessories;
