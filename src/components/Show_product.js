import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import '../style/Show.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Show = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://63a5721a318b23efa793a770.mockapi.io/api/produce');
      setData(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButton = () => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const addToCart = async (item) => {
    try {
      await axios.post(`https://63a5721a318b23efa793a770.mockapi.io/api/Type_Product`, item);
      setCartItems([...cartItems, item]);
      console.log("Thêm vào giỏ hàng thành công");
    } catch (error) {
      console.log("Lỗi khi thêm vào giỏ hàng:", error);
    }
  };
  return (
    <div className="container">
      <br />
      <h3 className="colection">SẢN PHẨM NỔI BẬT</h3>
      <br />
      <input type="text" placeholder="Vui lòng nhập từ khóa cần tìm" value={searchTerm} onChange={handleSearch} className='input' />
      <button className='button' onClick={handleSearchButton}>Tìm kiếm</button>
      <br /><br />
      <div className="row">
        {searchResults.map((e) => (
          <div className="col-md-3" key={e.id}>
            <div className="card">
              <img src={e.avatar} alt={e.name} className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">{e.name}</h4>
                <p className="card-text">{e.description}</p>
                <p className="card_price"> {e.quatity}</p>
                <div className="function">
                  <Link className="button1" to={`/shopping/${e.id}`}>
                    THÊM GIỎ HÀNG
                  </Link>
                  <Link className='button' to={`/product/${e.id}`} >Chi tiết</Link>
                  <button className='button'>Mua ngay</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
