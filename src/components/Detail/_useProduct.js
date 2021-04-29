import React, {useState, useEffect} from 'react';

const title = 'Product Title';
const description = 'Description';
const imageUrl = 'https://media.everlane.com/image/upload/c_fill,dpr_2.0,f_auto,g_face:center,q_auto,w_auto:100:1200/v1/i/d73675f2_3f4b.jpg';


function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      // fetch data for product
      //const productData = fetchProduct(1);
      const productData = {
        title,
        description,
        imageUrl
      }
      setTimeout(() => {
        setProduct(productData);
        setLoading(false);
      }, 1000);
      // put result in state if success
      
  }, []);
  // fetch data
  return [loading, product];
};

export default useProduct;