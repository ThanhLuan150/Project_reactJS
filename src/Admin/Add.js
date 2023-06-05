import React, { useState } from 'react';
import axios from 'axios';

const API = "https://63a5721a318b23efa793a770.mockapi.io/api/produce/";

const Add = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    avatar: "",
    quantity: "",
    description: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(API, newProduct);
      setNewProduct({
        name: "",
        avatar: "",
        quantity: "",
        description: ""
      });

      alert('Thêm mới thành công!');
      setTimeout(() => {
        window.location = '/Admin'; // Replace with your desired URL
      }, 100);
    } catch (error) {
      alert('Thêm mới không thành công:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label>Tên Sản phẩm</label>
                <input type="text" className="form-control" value={newProduct.name} onChange={handleInputChange} name="name" />
              </div>
              <div className="form-group">
                <label>Ảnh sản phẩm</label>
                <input type="text" className="form-control" value={newProduct.avatar} onChange={handleInputChange} name="avatar" />
              </div>
              <div className="form-group">
                <label>Gi á</label>
                <input type="text" className="form-control" value={newProduct.quantity} onChange={handleInputChange} name="quantity" />
              </div>
              <div className="form-group">
                <label>Mô tả</label>
                <input type="text" className="form-control" value={newProduct.description} onChange={handleInputChange} name="description" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
