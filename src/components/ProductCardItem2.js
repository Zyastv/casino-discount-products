import React from "react";

function ProductCardItem2(props) {
  return (
    <>
      <h2 className='cards__title'>{props.title}</h2>
      <li className='cards__item'>
        <div className='cards__image__wrap'>
          <a
            className='cards__item__link'
            href={props.path1}
            target='_blank'
            rel='noreferrer'
          >
            <figure
              className='cards__item__pic-wrap'
              data-category={props.label1}
            >
              <img
                src={props.src1}
                alt='Product'
                className='cards__item__img'
              />
            </figure>
          </a>
          <a
            className='cards__item__link'
            href={props.path2}
            target='_blank'
            rel='noreferrer'
          >
            <figure
              className='cards__item__pic-wrap'
              data-category={props.label2}
            >
              <img
                src={props.src2}
                alt='Product'
                className='cards__item__img'
              />
            </figure>
          </a>
        </div>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </li>
    </>
  );
}

export default ProductCardItem2;
