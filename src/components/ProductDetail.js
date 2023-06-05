import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://63a5721a318b23efa793a770.mockapi.io/api/produce/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();}, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
  <div className='row'>
    <div className='col-6'>
      <div className='image'>
        <img src={product.avatar} alt={product.name} />
      </div>
    </div>
    <div className='col-6'>
      <div className='content'>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.quantity}</p>
      </div>
    </div>
  </div>
</div>

    
  );
};

export default ProductDetail;
