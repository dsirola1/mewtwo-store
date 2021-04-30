import React from 'react';
import {useParams} from 'react-router-dom';

import useProduct from './_useProduct';

import './Detail.css';

// get id from react router
// fetch data based on id for product

const tempStyle = {
  margin: '0 auto',
  maxWidth: '1200px',
  padding: '30px',
}

function Detail() {
  //get id from router
  const { id } = useParams();

  function handleClick() {
    console.log('ADD TO CART', id);
  };

  const [loading, product] = useProduct(id);

  const title = loading ? <h1 className='mockTitle'></h1> : <h1 className='productTitle'>{product.title}</h1>;
  const description = loading ? <p className='mockDescription'></p> : <p className='productDescription'>{product.description}</p>;

  return (
    <div style={tempStyle}>
      <a className=''>Back to all products</a>
      <div className='productContainer'>
        <div className='productImage'>
          <div className='productImageWrapper'>
            <img src={loading ? '' : product.imageUrl} alt={product ? product.title : ''}></img>
          </div>
        </div>
        <div className='productInfo'>
          {title}
          {description}
          <button className='productButton' onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
