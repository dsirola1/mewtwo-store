import { useState, useEffect } from 'react';

function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch data for product
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data -->', data);
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('we got err', err);
      });
  }, [id]);
  // fetch data
  return [loading, product];
}

export default useProduct;
