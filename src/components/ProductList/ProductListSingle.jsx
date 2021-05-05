import React from 'react';

const ProductListSingle = ({ id, title, price, image }) => {
	return (
		<a className='productLink' href={`/products/${id}`}>
			<div className={'prodSingle'}>
				{/* <h2>{id}</h2> */}
				<h2>{title}</h2>
				<h2>Price: ${price}</h2>
				{/* <h3>{description}</h3> */}
				<img className={'imgProd'} src={image} alt={title} />
				<h3>Free Two Day Delivery with Mewtwo Store Prime</h3>
			</div>
		</a>
	);
};
export default ProductListSingle;
