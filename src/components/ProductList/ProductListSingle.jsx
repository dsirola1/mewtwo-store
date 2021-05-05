import React from 'react';
import { Link } from 'react-router-dom';
const ProductListSingle = ({ id, title, price, image }) => {
  return (
    <Link className='productLink' exact to={`/products/${id}`}>
      <div className={'prodSingle'}>
        <h2>{title}</h2>
        <h2>Price: ${price}</h2>
        <img className={'imgProd'} src={image} alt={title} />
        <h3>Free Two Day Delivery with Mewtwo Store Prime</h3>
      </div>
    </Link>
  );
};
export default ProductListSingle;
