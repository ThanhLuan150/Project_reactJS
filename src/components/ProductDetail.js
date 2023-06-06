import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link} from 'react-router-dom';
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
      <br></br>
      <div className='row'>
        <div className='col-md-4'>
          <div className='image'>
          <img src={product.avatar} alt={product.name} className="card-img-top" />
          </div>
        </div>
        <div className='col-md-8'>
          <div className='content'>
            <h2 className="card-title">{product.name}</h2><br></br>
            <p className="card-text">{product.description}</p>
            <p className="card_price"> {product.quatity}</p>
          </div>
          <div className='function'>
            <Link className="button1"to={`/shopping/${product.id}`}>
                THÊM GIỎ HÀNG
            </Link>
            <button className='button'>Mua ngay</button>
          </div>
        </div>
      </div>
  <br></br>
</div>
    
  );
};

export default ProductDetail;
