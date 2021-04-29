import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import useProduct from './_useProduct';

import './Detail.css';

// get id from react router
// fetch data based on id for product

const tempStyle = {
  margin: '0 auto',
  maxWidth: '1200px',
}

const productContainer = {
  display: 'flex',
}

function Detail() {
  //get id from router
  const { id } = useParams();

  const [loading, product] = useProduct(id);

  if(loading) return <div style={tempStyle}>loading...</div>;

  const {title, description, imageUrl} = product;

  function handleClick() {
    console.log('ADD TO CART', id);
  };

  return (
    <div style={tempStyle}>
      <a>Back to all products</a>
      <div style={productContainer}>
        <div style={{flex: '0 1 50%'}}>
          <img src={imageUrl} alt={title}></img>
        </div>
        <div style={{flex: '0 1 50%', padding: '0 0 0 30px'}}>
          <h1>{title}</h1>
          <p>{description}</p>
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
