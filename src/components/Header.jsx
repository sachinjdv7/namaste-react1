import { LOGO_URL } from '../utils/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('login');
  const { onlineStatus } = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-200">
      <div className="logo-container">
        <img className="w-45" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-5 p-5">
          <li className="px-4">online status : {onlineStatus ? '🍏' : '🍎'}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button
              onClick={() =>
                // btnName === 'login' ? setBtnName('logout') : setBtnName('login')
                setBtnName((prev) => (prev === 'login' ? 'logout' : 'login'))
              }
              className="login-btn"
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
