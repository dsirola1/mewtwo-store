import React, { useEffect, useState } from 'react';
import './ProductList.css';
import ProductSingle from './ProductListSingle';
// import SearchBar from './SearchBar'

export default function ProductList() {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
	useEffect(() => {
		loadData();
	}, []);
	const loadData = async () => {
		const response = await fetch('https://fakestoreapi.com/products');
		const data = await response.json();
    setList(data);
	};

  return (
    <div className="eachProd">
      <input
        value = {searchInput}
        className="searchTextBox"
        type="text"
        placeholder="Search by Name"
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      <button 
        className="searchButton" 
        onClick={() => console.log('search button clicked')}
        >Search
      </button>
      {list.filter((val) => {
        if (searchInput == '') {
          return val;
        } else if (val.title.toLowerCase().includes(searchInput.toLowerCase())) {
          return val;
        }
      }).map(({ id, title, image, price, description }) => {
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
