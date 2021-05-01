import React from 'react'

const ProductSingle = ({id, title, price, image}) => {
  return (
    <a className="productLink" href={`/products/${id}`}>
      <div className={'prodSingle'}>
        {/* <h2>{id}</h2> */}
        <h2>{title}</h2>
        <h2>Price: ${price}</h2>
        {/* <h3>{description}</h3> */}
        <img className={'imgProd'} src={image} alt={title}/>
      </div>
    </a>
  )
}
export default ProductSingle