import React, { useEffect, useState } from 'react'
import './Products.css'
import ProductSingle from './ProductSingle.jsx'

export default function Product() {
  const [list, setList] = useState([])
  useEffect(() => {
    loadData();
  }, [])
  const loadData = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    setList(data)
    // console.log(data)
  }
    
  return (
    <div className="totalProds">
      <div>
        {/* <label htmlFor="search">Search by Name</label> */}
        <input className="searchTextBox" type="text" placeholder="Search by Name"></input>
        <button className="searchButton">Search</button>
      </div>
      {
        list.map(({ id, title, image, price, description }) => { 
          // console.log(title)
          return <ProductSingle key={id} title={title} image={image} price={price} description={description}/>
        })
      }
    </div>
  );
}
