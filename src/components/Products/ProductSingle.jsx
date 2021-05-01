import React from 'react'

const ProductSingle = ({id, title, price, description, category, image}) => {
  return (
    <a className="productLink" href="www.google.com">
      <div className={'prodSingle'}>
        <h2>{title}</h2>
        <h2>Price: ${price}</h2>
        {/* <h3>{description}</h3> */}
        <img className={'imgProd'} src={image} alt={title}/>
      </div>
    </a>
  )
}
export default ProductSingle