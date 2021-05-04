import React, { useEffect, useState } from 'react';
import './ProductList.css';
import ProductSingle from './ProductListSingle';

export default function ProductList() {
	const [list, setList] = useState([]);
	useEffect(() => {
		loadData();
	}, []);
	const loadData = async () => {
		const response = await fetch('https://fakestoreapi.com/products');
		const data = await response.json();
		setList(data);
		// console.log(data)
	};

	const product = list.map(({ id, title, image, price, description }) => {
		// console.log(title)
		return (
			<ProductSingle
				key={id}
				id={id}
				title={title}
				image={image}
				price={price}
				description={description}
			/>
		);
	});
	return (
		<div className='eachProd'>
			<div>
				{/* <label htmlFor="search">Search by Name</label> */}
				<input
					className='searchTextBox'
					type='text'
					placeholder='Search by Name'
				></input>
				<button className='searchButton'>Search</button>
			</div>
			<div className='product'>{product}</div>
		</div>
	);
}
