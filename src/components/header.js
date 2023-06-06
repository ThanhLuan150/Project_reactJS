import '../style/header.css';
import Shopping from './Shopping';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <img className='img' src='https://bizweb.dktcdn.net/100/473/812/themes/889220/assets/logo.png?1685001259345'></img>
        <div className='menu'>
          <ul>
            <li>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li>
              <Link to="/shopping">GIỎ HÀNG</Link>
            </li>
            <li>
              <Link to="/Admin">ADMIN</Link>
            </li>
          </ul>
        </div>
        <div className='login'>
          <button className='button'>Đăng nhập</button>
        </div>
      </div>
    );
  }
}

export default Header;
