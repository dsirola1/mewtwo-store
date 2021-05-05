import React, { useEffect, useState } from 'react';
import './ProductList.css';
import ProductSingle from './ProductListSingle';
import SearchBar from './SearchBar'

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

  return (
    <div className="eachProd">
      {/* <div>
        <input
          className="searchTextBox"
          type="text"
          placeholder="Search by Name"
        ></input>
        <button className="searchButton">Search</button>
      </div> */}
      <SearchBar></SearchBar>
      {list.map(({ id, title, image, price, description }) => {
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
      })}
    </div>
  );
}
